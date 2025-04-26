import React from 'react';
import { useState } from "react";
import { Helmet } from "react-helmet-async";
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
    formData.append("access_key", "ce2eb7c7-2bea-4f74-97b2-d60622f8ddd8");

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
    <>
      <Helmet>
        <title>Ota Yhteyttä | Aino Pekkarinen</title>
        <meta 
          name="description" 
          content="Ota yhteyttä Aino Pekkariseen varataksesi ajan pariterapiaan, lyhytterapiaan tai tiedustellaksesi puheenvuoroja. Löydät täältä yhteystiedot."
        />
      </Helmet>

      <div className="min-h-screen bg-[#131313] flex flex-col justify-center text-white pt-32 md:pt-40 lg:pt-48 px-4 py-16 md:py-24">
        <div className="max-w-lg w-full mx-auto px-4 sm:px-8 py-8 md:py-12">  
          <form onSubmit={onSubmit} className="space-y-6 md:space-y-8">
            <div className="space-y-1">
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Nimi"
                className="elegant-input text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-1">
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Sähköposti"
                className="elegant-input text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-1">
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Puhelin"
                className="elegant-input text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-1">
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Viesti"
                className="elegant-input text-white placeholder:text-gray-400 min-h-[120px] resize-none"
              />
            </div>

            <div className="flex justify-center pt-8">
              <Button 
                type="submit" 
                className="btn-elegant-light"
                disabled={isSubmitting}
              >
                {isSubmitting ? "LÄHETETÄÄN..." : "LÄHETÄ"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Yhteydenotto;
