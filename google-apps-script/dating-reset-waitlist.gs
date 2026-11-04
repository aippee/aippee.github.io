/**
 * Dating Reset -odotuslista → Google Sheet
 *
 * Paste this into the Google Sheet: Extensions → Apps Script.
 * Deploy: Deploy → New deployment → Web app
 *   - Execute as: Me
 *   - Who has access: Anyone
 * Copy the Web app URL (ends in /exec) into src/pages/DatingReset.tsx (WAITLIST_ENDPOINT).
 */

// Send an email to the sheet owner for each new sign-up (true / false)
const SEND_NOTIFICATION = true;
const SHEET_NAME = 'Odotuslista';

const HEADERS = ['Aikaleima', 'Nimi', 'Sähköposti', 'Puhelinnumero', 'Ikä', 'Toteutustapa', 'Suostumus'];

function doPost(e) {
  const p = (e && e.parameter) || {};

  // Spam honeypot: real users never fill this hidden field
  if (p.website) return json({ success: true });

  if (!p.name || !p.email || p.suostumus !== 'Kyllä') {
    return json({ success: false, error: 'missing fields' });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),
      clean(p.name),
      clean(p.email),
      clean(p.phone),
      clean(p.ika),
      clean(p.toteutustapa),
      'Kyllä',
    ]);
  } finally {
    lock.releaseLock();
  }

  if (SEND_NOTIFICATION) {
    try {
      MailApp.sendEmail({
        to: Session.getEffectiveUser().getEmail() + ',helmisilvennoinen@gmail.com',
        subject: 'Dating Reset – uusi odotuslistalainen: ' + clean(p.name),
        body:
          'Nimi: ' + clean(p.name) + '\n' +
          'Sähköposti: ' + clean(p.email) + '\n' +
          'Puhelinnumero: ' + clean(p.phone) + '\n' +
          'Ikä: ' + clean(p.ika) + '\n' +
          'Toteutustapa: ' + clean(p.toteutustapa) + '\n\n' +
          SpreadsheetApp.getActiveSpreadsheet().getUrl(),
      });
    } catch (err) {
      // Email quota hit etc. – the row is already saved, so ignore
    }
  }

  return json({ success: true });
}

function doGet() {
  return json({ ok: true });
}

// Trim, limit length, and stop values being interpreted as spreadsheet formulas
function clean(v) {
  let s = String(v || '').trim().slice(0, 500);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
