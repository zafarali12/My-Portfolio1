import { Briefcase, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      company: "Excellerate (Remote / Project Internship)",
      role: "Project Leader",
      duration: "Sep 2025 – Nov 2025",
      details: [
        "Led a cross-functional team during a project-based internship, successfully delivering two full-stack projects.",
        "Addressed the 'Silent Contributor' problem by designing an inclusive communication framework.",
        "Handled project planning, technical documentation, and coordination for on-time delivery.",
      ],

    },
    {
      company: "Cortexis Solution Hub (Remote / Lahore)",
      role: "MERN Stack Developer Intern",
      duration: "Aug 2025 – Oct 2025",
      details: [
        "Completed 9 structured MERN stack tasks and developed a full-stack project using React (Vite), Node.js, Express, and Bootstrap.",
        "Enhanced skills in creating responsive UIs, building RESTful APIs, and integrating frontend with backend efficiently.",
      ],
   
    },
    {
      company: "Developers Cohub (Remote / Lahore)",
      role: "MERN Stack Developer Intern",
      duration: "Mar 2025 – May 2025",
      details: [
        "Specialized in building scalable and responsive applications using React, Express, and MongoDB.",
        "Collaborated with mentors on improving API efficiency and project structure.",
      ],

    },
    {
      company: "PEL (Pak Elektron Limited)",
      role: "Full Stack Developer Intern",
      duration: "Aug 2024 – Oct 2024",
      details: [
        "Contributed to a full-stack  web app with authentication, cart management, and admin dashboard.",
        "Worked with senior developers to implement secure backend APIs and responsive UI components.",
      ],
    
    },
  ];

  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 gradient-text transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          Professional Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`glass-effect hover-lift group transition-all duration-800 ease-out ${
                isVisible
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-90 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <Briefcase
                    className="text-primary flex-shrink-0 group-hover:animate-glow"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted-foreground font-normal">
                      {exp.company} • {exp.duration}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <ul className="list-disc pl-5 text-foreground/80 mb-4 space-y-2">
                  {exp.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

               
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
