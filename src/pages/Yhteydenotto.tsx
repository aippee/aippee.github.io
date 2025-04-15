
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Yhteydenotto = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Viesti lähetetty onnistuneesti!");
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error("Virhe viestin lähetyksessä. Yritä uudelleen.");
        console.log("Error", data);
      }
    } catch (error) {
      toast.error("Virhe viestin lähetyksessä. Yritä uudelleen.");
      console.log("Error", error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-semibold mb-8">Yhteydenotto</h1>
        
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nimi</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Kirjoita nimesi"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Sähköposti</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Kirjoita sähköpostiosoitteesi"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Viesti</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Kirjoita viestisi tähän"
              className="min-h-[150px]"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Lähetetään..." : "Lähetä viesti"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Yhteydenotto;
