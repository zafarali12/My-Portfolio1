import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: "Wanderlust Travel Platform",
      description: "Airbnb-style web application with authentication, property listings, hotel reviews, and booking system. Features clean UI with dynamic functionality and database integration.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Authentication"],
      github: "https://github.com/zafarali12",
      demo: "#",
    },
    {
      title: "Zerodha Trading Platform Clone",
      description: "Complete trading platform clone with live stock data, order management, and real-time dashboard. Implemented full backend APIs and state management.",
      technologies: ["MERN Stack", "REST APIs", "Real-time Data", "State Management"],
      github: "https://github.com/zafarali12",
      demo: "#",
    },
    {
      title: "My-Space Productivity App",
      description: "Full-stack productivity application featuring live weather API, location tracking, automatic quote generator, and note builder with responsive UI.",
      technologies: ["React.js", "Node.js", "Express.js", "Bootstrap", "APIs"],
      github: "https://github.com/zafarali12",
      demo: "#",
    },
    {
      title: "Generative AI with AWS Bedrock",
      description: "Built generative AI workflows using AWS Bedrock foundation models for automation and text generation. Integrated AI pipelines with REST APIs.",
      technologies: ["AWS Bedrock", "LLMs", "API Integration", "Python"],
      github: "https://github.com/zafarali12",
      demo: "#",
    },
    {
      title: "n8n Automation Workflows",
      description: "Implemented RAG pipelines for content generation and support bots. Created LinkedIn Post Generator and AI Customer Support using n8n and AI Agents.",
      technologies: ["n8n", "RAG", "AI Agents", "APIs", "Automation"],
      github: "https://github.com/zafarali12",
      demo: "#",
    },
    {
      title: "Naive Bayes Text Classifier",
      description: "Machine learning model for text classification achieving high accuracy. Processed real-world datasets using advanced data science techniques.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "ML"],
      github: "https://github.com/zafarali12",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 gradient-text transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`glass-effect hover-lift flex flex-col transition-all duration-800 ease-out ${
                isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-20 -rotate-2"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
