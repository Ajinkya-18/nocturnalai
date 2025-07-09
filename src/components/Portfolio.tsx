
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock, Users, BarChart } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Order Processing",
      description: "Automated the entire order fulfillment process for a major retailer, reducing processing time by 85% and eliminating manual errors.",
      technologies: ["AI Agents", "API Integration", "Slack", "Shopify"],
      metrics: "85% faster processing",
      icon: BarChart,
      category: "E-commerce"
    },
    {
      title: "Customer Support Automation",
      description: "Deployed intelligent chatbots and ticket routing system that handles 80% of customer inquiries automatically.",
      technologies: ["NLP", "Ticket Management", "CRM Integration", "Teams"],
      metrics: "80% automation rate",
      icon: Users,
      category: "Customer Service"
    },
    {
      title: "Financial Reporting Pipeline",
      description: "Built an AI-powered system that automatically generates monthly financial reports from multiple data sources.",
      technologies: ["Data Processing", "Google Sheets", "Notion", "Power BI"],
      metrics: "Hours to minutes",
      icon: Clock,
      category: "Finance"
    },
    {
      title: "HR Onboarding Workflow",
      description: "Streamlined employee onboarding with automated document collection, task assignment, and progress tracking.",
      technologies: ["Document AI", "Task Automation", "Slack", "HRIS"],
      metrics: "95% task completion",
      icon: Users,
      category: "Human Resources"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-noct-navy/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Past Work & Success Stories
          </h2>
          <div className="w-24 h-1 bg-noct-electric mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See how we've transformed businesses across industries with our intelligent automation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-noct-gray/50 border-gray-700 hover:border-noct-electric/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-noct-electric/10 group cursor-pointer"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-noct-electric/10 p-3 rounded-xl group-hover:bg-noct-electric/20 transition-colors duration-300">
                    <project.icon className="h-6 w-6 text-noct-electric" />
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-500 group-hover:text-noct-electric transition-colors duration-300" />
                </div>
                
                <div className="mb-3">
                  <Badge variant="outline" className="border-noct-electric/30 text-noct-electric mb-2">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-noct-electric transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary" 
                        className="bg-gray-800/50 text-gray-300 border-gray-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-noct-electric font-semibold">
                    {project.metrics}
                  </span>
                  <span className="text-gray-500 text-sm">
                    View Case Study →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
