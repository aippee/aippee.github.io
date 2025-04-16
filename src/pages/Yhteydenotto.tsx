import React from 'react';
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
    <div className="min-h-screen bg-black flex items-center justify-center text-white pt-20 md:pt-0 px-4 py-8 md:py-12">
      <div className="max-w-lg w-full px-4 sm:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">YHTEYDENOTTO</h1>
        
        <form onSubmit={onSubmit} className="space-y-6 md:space-y-8">
          <div className="space-y-1">
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Nimi:"
              className="bg-transparent border-0 border-b border-white rounded-none text-white focus:ring-0 focus:border-white px-1 py-2 placeholder:text-gray-400 text-base"
            />
          </div>

          <div className="space-y-1">
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Sähköposti:"
              className="bg-transparent border-0 border-b border-white rounded-none text-white focus:ring-0 focus:border-white px-1 py-2 placeholder:text-gray-400 text-base"
            />
          </div>

          <div className="space-y-1">
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Puhelin:"
              className="bg-transparent border-0 border-b border-white rounded-none text-white focus:ring-0 focus:border-white px-1 py-2 placeholder:text-gray-400 text-base"
            />
          </div>

          <div className="space-y-1">
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Viesti:"
              className="bg-transparent border-0 border-b border-white rounded-none text-white focus:ring-0 focus:border-white px-1 py-2 min-h-[80px] md:min-h-[100px] resize-none placeholder:text-gray-400 text-base"
            />
          </div>

          <div className="flex justify-center pt-4">
            <Button 
              type="submit" 
              className="rounded-full px-8 py-2 md:px-12 text-sm md:text-base bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors"
              disabled={isSubmitting}
              style={{ textTransform: 'uppercase' }}
            >
              {isSubmitting ? "Lähetetään..." : "Lähetä"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Yhteydenotto;
