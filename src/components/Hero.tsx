import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop')",
          filter: "brightness(0.7)"
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/21c76598-2d7e-4688-bb94-40ee6b7776e4.png" 
            alt="Gura River Camp" 
            className="h-32 w-32 drop-shadow-2xl"
          />
        </div>

        {/* Main heading */}
        <h1 className="font-playfair font-bold text-5xl md:text-7xl mb-6 leading-tight">
          Gura River <span className="text-river-teal-light">Camp</span>
        </h1>
        
        <p className="font-inter text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          A family campground on the largest river of the Aberdares. Experience hiking, swimming, 
          and peaceful moments in the forest reserve just outside Aberdares National Park.
        </p>

        {/* Location and pricing */}
        <div className="flex items-center justify-center space-x-6 mb-10">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-river-teal-light" />
            <span className="font-inter">2h 45min from Nairobi</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-inter font-semibold">3,000 KES/night per adult</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-inter font-semibold px-8 py-3 text-lg shadow-glow"
          >
            WhatsApp: +254 788 335 068
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary font-inter font-semibold px-8 py-3 text-lg"
          >
            Day visits: 1,000 KES
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;