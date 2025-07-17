
import { Code, Briefcase } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about-us" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Us
          </h2>
          <div className="w-24 h-1 bg-noct-electric mx-auto mb-8" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              At NoctAI, we don't just automate workflows — we build AI Agents that can think, adapt, and act on their own.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Our goal is to free teams from repetitive operations by designing intelligent systems that make real-time decisions and run 24/7 behind the scenes — so humans can focus on what really matters: ideas, product design, and innovation.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're proudly industry-agnostic and fully custom-built. Whether you're a startup, solopreneur, or lean team, we help you move faster by automating the workflows holding you back.
            </p>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-8">Built by a Two-Person Team</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-noct-electric/10 p-6 rounded-2xl mb-6 inline-block group-hover:bg-noct-electric/20 transition-colors duration-300">
                <Code className="h-12 w-12 text-noct-electric mx-auto" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Ajinkya – CAO (Chief Automation Officer)</h4>
              <p className="text-gray-400 leading-relaxed">
                CSE undergrad with a specialization in AI/ML. He leads all things technical: architecture, agent design, and system logic.
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-noct-electric/10 p-6 rounded-2xl mb-6 inline-block group-hover:bg-noct-electric/20 transition-colors duration-300">
                <Briefcase className="h-12 w-12 text-noct-electric mx-auto" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Soham – CBO (Chief Business Officer)</h4>
              <p className="text-gray-400 leading-relaxed">
                MBA candidate with a focus on growth, communication, and client experience. He handles sales, discovery, and project direction.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 leading-relaxed font-medium">
              We combine deep tech with a human-first approach — and we're just getting started.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
