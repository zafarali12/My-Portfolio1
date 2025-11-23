import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "Tech Solutions Inc",
      content: "Zafar delivered an exceptional MERN stack application that exceeded our expectations. His attention to detail and problem-solving skills are outstanding.",
      rating: 5,
    },
     
    {
      name: "Michael Chen",
      role: "CTO",
      company: "DataFlow Systems",
      content: "Working with Zafar was a great experience. He implemented complex AI features seamlessly and maintained excellent communication throughout the project.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Owner",
      company: "InnovateLab",
      content: "Zafar's expertise in both frontend and backend development made our project a success. His AI/ML integration capabilities are truly impressive.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 gradient-bg">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 gradient-text transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          Testimonials
        </h2>
        <p
          className={`text-center text-muted-foreground mb-16 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          What clients say about my work
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`glass-effect hover-lift transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
