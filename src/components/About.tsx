import profilePhoto from "@/assets/profile-photo.jpeg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <img
              src={profilePhoto}
              alt="Zafar Ali"
              className="rounded-2xl shadow-2xl glow-effect hover-lift w-full max-w-sm mx-auto"
            />
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <h3 className="text-3xl font-bold text-primary">
              Full-Stack Developer & AI Enthusiast
            </h3>
            
            <p className="text-foreground/80 text-lg leading-relaxed">
              I'm a Computer Science professional in my final semester at the University of Education, 
              with a strong passion for building innovative web applications and AI-powered solutions.
            </p>

            <p className="text-foreground/80 text-lg leading-relaxed">
              With expertise in the <span className="text-primary font-semibold">MERN stack</span> and 
              <span className="text-secondary font-semibold"> Machine Learning</span>, I've developed 
              dynamic applications like Wanderlust (Airbnb-style travel platform), Zerodha trading 
              platform clone, and various AI/ML models.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="glass-effect p-4 rounded-lg">
                <h4 className="text-3xl font-bold text-primary mb-2">3.5</h4>
                <p className="text-foreground/70">CGPA</p>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <h4 className="text-3xl font-bold text-primary mb-2">3+</h4>
                <p className="text-foreground/70">Internships</p>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <h4 className="text-3xl font-bold text-primary mb-2">6+</h4>
                <p className="text-foreground/70">Projects</p>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <h4 className="text-3xl font-bold text-primary mb-2">9+</h4>
                <p className="text-foreground/70">Mini Apps</p>
              </div>
            </div>

            <p className="text-foreground/80 text-lg leading-relaxed pt-4">
              <span className="text-primary">📍</span> Based in Lahore, Pakistan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
