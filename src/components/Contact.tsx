
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Automate Your Workflow
          </h2>
          <div className="w-24 h-1 bg-noct-electric mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business with intelligent automation? Let's discuss how we can 
            streamline your operations and boost efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-noct-gray/50 border-gray-700 hover:border-noct-electric/50 transition-all duration-300 hover:scale-105 group">
            <CardContent className="p-8 text-center">
              <div className="bg-noct-electric/10 p-4 rounded-xl inline-block mb-4 group-hover:bg-noct-electric/20 transition-colors duration-300">
                <Mail className="h-8 w-8 text-noct-electric" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Email Us</h3>
              <p className="text-gray-400 mb-4">
                Reach out directly for inquiries and project discussions.
              </p>
              <a 
                href="mailto:hello@noctai.com" 
                className="text-noct-electric hover:text-blue-400 font-medium transition-colors duration-300"
              >
                hello@noctai.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-noct-gray/50 border-gray-700 hover:border-noct-electric/50 transition-all duration-300 hover:scale-105 group">
            <CardContent className="p-8 text-center">
              <div className="bg-noct-electric/10 p-4 rounded-xl inline-block mb-4 group-hover:bg-noct-electric/20 transition-colors duration-300">
                <MessageSquare className="h-8 w-8 text-noct-electric" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quick Consultation</h3>
              <p className="text-gray-400 mb-4">
                Schedule a call to discuss your automation needs.
              </p>
              <Button
                onClick={() => window.open('https://tally.so/placeholder-form', '_blank')}
                variant="outline"
                className="border-noct-electric text-noct-electric hover:bg-noct-electric hover:text-white transition-all duration-300"
              >
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Tally Form Embed */}
        <Card className="bg-noct-gray/50 border-gray-700">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Start Your Automation Journey
              </h3>
              <p className="text-gray-400">
                Tell us about your current workflows and challenges. We'll respond within 24 hours.
              </p>
            </div>
            
            {/* Placeholder for Tally form */}
            <div className="bg-noct-navy/50 border-2 border-dashed border-gray-600 rounded-xl p-12 text-center">
              <MessageSquare className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400 mb-4">
                Tally form will be embedded here once the form link is provided.
              </p>
              <Button
                onClick={() => window.open('https://tally.so/placeholder-form', '_blank')}
                className="bg-noct-electric hover:bg-blue-700 text-white"
              >
                Open Form
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
