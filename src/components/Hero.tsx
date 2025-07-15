
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-noct-navy/20 to-transparent" />
      
      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <div className="animate-fade-in">
          {/* Logo Banner */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/a19821e3-e5c7-4230-9557-2cd4331b1283.png" 
              alt="NoctAI Logo - You dream it, we automate it"
              className="w-[900px] h-[540px] md:w-[1200px] md:h-[720px] lg:w-[1500px] lg:h-[900px] object-contain filter drop-shadow-2xl"
            />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-white">Noct</span>
            <span className="text-noct-electric">AI</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            You dream it, we automate it
          </p>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            We build intelligent agents that streamline and automate workflows for businesses, 
            transforming your operations with cutting-edge AI technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('portfolio')}
              className="bg-noct-electric hover:bg-blue-700 text-white px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-noct-electric/20"
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-noct-electric rounded-full opacity-60 animate-pulse" />
      <div className="absolute bottom-32 right-16 w-3 h-3 bg-white rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-20 w-1 h-1 bg-noct-electric rounded-full opacity-80 animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;
