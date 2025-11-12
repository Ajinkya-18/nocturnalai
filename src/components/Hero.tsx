
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-noct-navy/10 to-transparent" />
      
      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <div className="animate-fade-in">
          {/* Logo Banner */}
          <div className="mb-8 flex justify-center">
            <img 
              src="nocturnalai/public/lovable-uploads/a19821e3-e5c7-4230-9557-2cd4331b1283.png" 
              alt="NocturnalAI Logo - You dream it, we automate it"
              className="w-[900px] h-[300px] md:w-[1200px] md:h-[400px] lg:w-[1500px] lg:h-[500px] object-cover object-center filter drop-shadow-2xl transition-all duration-700 ease-out hover:scale-105 hover:drop-shadow-[0_0_30px_rgba(0,102,255,0.3)]"
            />
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-300">
            We build intelligent agents that streamline and automate workflows for businesses, 
            transforming your operations with cutting-edge AI technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-500">
            <Button
              onClick={() => scrollToSection('portfolio')}
              className="bg-noct-electric hover:bg-blue-700 text-white px-8 py-6 text-lg font-medium rounded-xl transition-all duration-500 ease-out hover:scale-110 hover:shadow-2xl hover:shadow-noct-electric/30 active:scale-95"
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-6 text-lg font-medium rounded-xl transition-all duration-500 ease-out hover:scale-110 hover:border-noct-electric/50 hover:shadow-lg active:scale-95"
            >
              <Sparkles className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-noct-electric rounded-full opacity-60 animate-pulse" />
      <div className="absolute bottom-32 right-16 w-3 h-3 bg-white rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-20 w-1 h-1 bg-noct-electric rounded-full opacity-80 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-32 w-2 h-2 bg-noct-electric/60 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;
