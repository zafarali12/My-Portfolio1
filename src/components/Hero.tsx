import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

const Hero = () => {
  const { displayedText, isComplete } = useTypingAnimation("Zafar Ali", 150);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-4 text-center z-10 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">{displayedText}</span>
          {!isComplete && <span className="animate-pulse">|</span>}
        </h1>
        <p className="text-2xl md:text-3xl text-foreground/80 mb-4">
          Full-Stack Developer — MERN + AI/ML Specialist
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Crafting innovative web applications with cutting-edge technologies. Passionate about AI, Data Science, and creating seamless user experiences.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect"
            onClick={() => scrollToSection("#projects")}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => scrollToSection("#contact")}
          >
            Contact Me
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/zafarali12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform duration-300"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/muhammadzafarali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform duration-300"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:zafaraliimran12@gmail.com"
            className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform duration-300"
          >
            <Mail size={28} />
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
