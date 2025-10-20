import { useState } from "react";
import { Send, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 gradient-text transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div
            className={`space-y-6 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 text-lg">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-4 pt-4">
                  <a
                    href="mailto:zafaraliimran12@gmail.com"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group"
                  >
                    <Mail className="group-hover:scale-110 transition-transform" size={20} />
                    <span>zafaraliimran12@gmail.com</span>
                  </a>

                  <a
                    href="tel:+923289569517"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group"
                  >
                    <Phone className="group-hover:scale-110 transition-transform" size={20} />
                    <span>+92 328 9569517</span>
                  </a>

                  <div className="flex items-center gap-3 text-foreground/80">
                    <MapPin size={20} />
                    <span>Lahore, Pakistan</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <a
                    href="https://github.com/zafarali12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-effect rounded-lg hover:bg-primary/10 transition-colors hover:scale-110 transform duration-300"
                  >
                    <Github size={24} className="text-primary" />
                  </a>
                  <a
                    href="https://linkedin.com/in/muhammadzafarali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-effect rounded-lg hover:bg-primary/10 transition-colors hover:scale-110 transform duration-300"
                  >
                    <Linkedin size={24} className="text-primary" />
                  </a>
                  <a
                    href="mailto:zafaraliimran12@gmail.com"
                    className="p-3 glass-effect rounded-lg hover:bg-primary/10 transition-colors hover:scale-110 transform duration-300"
                  >
                    <Mail size={24} className="text-primary" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card
            className={`glass-effect transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-20"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-effect"
                  size="lg"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
