
import { Brain, Zap, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-noct-navy/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About NocturnalAI
          </h2>
          <div className="w-24 h-1 bg-noct-electric mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            We're on a mission to revolutionize how businesses operate by creating intelligent AI agents 
            that understand, learn, and automate complex workflows. Our cutting-edge technology transforms 
            manual processes into seamless, efficient operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-noct-electric/10 p-6 rounded-2xl mb-6 inline-block group-hover:bg-noct-electric/20 transition-colors duration-300">
              <Brain className="h-12 w-12 text-noct-electric mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Intelligent Automation</h3>
            <p className="text-gray-400 leading-relaxed">
              Our AI agents learn and adapt to your business processes, making intelligent decisions to optimize workflows.
            </p>
          </div>

          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-noct-electric/10 p-6 rounded-2xl mb-6 inline-block group-hover:bg-noct-electric/20 transition-colors duration-300">
              <Zap className="h-12 w-12 text-noct-electric mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Lightning Fast</h3>
            <p className="text-gray-400 leading-relaxed">
              Reduce manual work by up to 90% with our rapid automation solutions that work 24/7.
            </p>
          </div>

          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-noct-electric/10 p-6 rounded-2xl mb-6 inline-block group-hover:bg-noct-electric/20 transition-colors duration-300">
              <Target className="h-12 w-12 text-noct-electric mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Precision Focused</h3>
            <p className="text-gray-400 leading-relaxed">
              Every automation is tailored to your specific needs, ensuring maximum efficiency and accuracy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
