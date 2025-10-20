import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Zafar Ali</h3>
            <p className="text-foreground/70">
              Full-Stack Developer passionate about creating innovative web applications and AI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-foreground/70 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/zafarali12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Github size={20} className="text-primary" />
              </a>
              <a
                href="https://linkedin.com/in/muhammadzafarali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Linkedin size={20} className="text-primary" />
              </a>
              <a
                href="mailto:zafaraliimran12@gmail.com"
                className="p-3 glass-effect rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Mail size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/70 text-center md:text-left">
            © {currentYear} Zafar Ali. Made with <Heart size={16} className="inline text-primary" /> using React & Tailwind CSS
          </p>

          <Button
            onClick={scrollToTop}
            size="icon"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            <ArrowUp size={20} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
