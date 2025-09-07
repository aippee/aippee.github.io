import React from 'react';
import { useCommonTranslation } from '../hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';

const I18nTest: React.FC = () => {
  const { t, isLoading, currentLanguage } = useCommonTranslation();

  if (isLoading) {
    return <div>Loading translations...</div>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">i18n Test Page</h1>
        
        <div className="mb-4">
          <strong>Current Language:</strong> {currentLanguage}
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Navigation Test:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>{t('navigation.home')}</li>
            <li>{t('navigation.services')}</li>
            <li>{t('navigation.about')}</li>
            <li>{t('navigation.contact')}</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Button Test:</h2>
          <div className="space-y-2">
            <button className="block bg-blue-500 text-white px-4 py-2 rounded">
              {t('buttons.send')}
            </button>
            <button className="block bg-green-500 text-white px-4 py-2 rounded">
              {t('buttons.bookCouplesTherapy')}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Form Test:</h2>
          <div className="space-y-2">
            <input 
              type="text" 
              placeholder={t('forms.placeholders.name')}
              className="w-full border rounded px-3 py-2"
            />
            <input 
              type="email" 
              placeholder={t('forms.placeholders.email')}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Language Switcher:</h2>
          <div className="bg-gray-800 p-4 rounded">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default I18nTest; 