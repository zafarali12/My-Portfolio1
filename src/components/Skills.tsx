import { Code2, Database, Server, Wrench, Brain, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: "Good" },
        { name: "HTML5", level: "Strong" },
        { name: "CSS3", level: "Strong" },
        { name: "JavaScript", level: "Strong" },
        { name: "Bootstrap", level: "Good" },
        { name: "Tailwind CSS", level: "Good" },
        { name: "TypeScript", level: "Good" }
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: "Strong" },
        { name: "Express.js", level: "Strong" },
        { name: "REST APIs", level: "Good" },
        { name: "Authentication", level: "Good" },
        { name: "NestJS", level: "Good" }
      ],
    },
    {
      icon: Database,
      title: "Database & Storage",
      skills: [
        { name: "MongoDB", level: "Good" },
        { name: "Database Design", level: "Good" },
        { name: "PostgreSQL", level: "Good" },
      ],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        { name: "Naive Bayes", level: "Good" },
        { name: "Regression", level: "Good" },
        { name: "Classification", level: "Good" },
        { name: "AI Agents (LangChain, RAG)", level: "Good" },
        { name: "TensorFlow", level: "Basic" },
        { name: "PyTorch", level: "Basic" },
      ],
    },
    {
      icon: BarChart3,
      title: "Data Science",
      skills: [
        { name: "Pandas", level: "Strong" },
        { name: "NumPy", level: "Strong" },
        { name: "Scikit-learn", level: "Good" },
        { name: "Jupyter Notebook", level: "Strong" },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: [
        { name: "Git/GitHub", level: "Strong" },
        { name: "VS Code", level: "Strong" },
        { name: "AWS Bedrock", level: "Good" },
        { name: "n8n Automation", level: "Good" },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Strong":
        return "bg-primary";
      case "Good":
        return "bg-secondary";
      default:
        return "bg-muted";
    }
  };

  return (
    <section id="skills" className="py-20 gradient-bg">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 gradient-text transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`glass-effect hover-lift transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <category.icon size={28} />
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground/80">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${getLevelColor(skill.level)} rounded-full transition-all duration-1000`}
                          style={{
                            width:
                              skill.level === "Strong"
                                ? "90%"
                                : skill.level === "Good"
                                ? "75%"
                                : "50%",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
