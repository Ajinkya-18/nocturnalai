
import { Bot, Workflow, Cog, Link } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Workflow,
      title: "End-to-End Workflow Automation",
      description: "Complete automation solutions that handle complex business processes from start to finish, eliminating manual bottlenecks."
    },
    {
      icon: Bot,
      title: "Custom AI Agent Development",
      description: "Bespoke AI agents designed specifically for your business needs, trained to understand your unique workflows and requirements."
    },
    {
      icon: Cog,
      title: "Business Operations Automation",
      description: "Streamline your core operations with intelligent automation that adapts to your business rules and processes."
    },
    {
      icon: Link,
      title: "Tool Integrations",
      description: "Seamlessly connect your existing tools like Slack, Notion, Google Sheets, CRM systems, and more into unified workflows."
    }
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services We Offer
          </h2>
          <div className="w-24 h-1 bg-noct-electric mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From simple task automation to complex AI-driven workflows, we provide comprehensive solutions 
            that transform how your business operates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-noct-gray/50 border-gray-700 hover:border-noct-electric/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-noct-electric/10 group"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-noct-electric/10 p-4 rounded-xl group-hover:bg-noct-electric/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-noct-electric" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-noct-electric transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
