import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import AWS_BEDROCK from "../assets/AWS_BEDROCK.png";
import CERTIFICATE from "../assets/CERTIFICATE.jpg";
import Communication_skills from "../assets/Communication_skills.jpg";
import CORVIT from "../assets/CORVIT.jpg";
import dataanalytics_certificate from "../assets/dataanalytics_certificate.jpg";
import datascience_certificate from "../assets/datascience_certificate.jpg";
import fullstack_internship from "../assets/fullstack_internship.jpg";
import javascipt_certificate from "../assets/javascipt certificate.png";

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation();

  const certifications = [
     {
      title: "Generative AI in AWS Bedrock",
      issuer: "AWS",
      date: "2025",
      description:
        "Mastered building generative AI workflows using AWS Bedrock foundation models for automation and text generation.",
      link: AWS_BEDROCK,
    },
   {
  title: "Full Stack Developer Internship",
  issuer: "Cortexis Solution Hub",
  date: "Aug 2025 - Sep 2025",
  description:
    "Completed an intensive internship developing 9+ full-stack projects using MERN stack and modern development practices.",
  link: "https://cortexis-solutions.com ", // fake link added for View button
},
    {
      title: "MERN Stack Developer Internship",
      issuer: "Developers Cohub",
      date: "Mar 2025 - May 2025",
      description:
        "Specialized in building responsive web interfaces and backend systems with MERN stack technologies.",
      link: fullstack_internship,
    },
       {
      title: "Data Analytics Certificate",
      issuer: "Analytix Camp",
      date: "2025",
      description:
        "Focused on data visualization, Excel analytics, and business insight generation for decision making.",
      link: dataanalytics_certificate,
    },
      {
      title: "Data Science Certificate",
      issuer: "Udemy",
      date: "2024",
      description:
        "Learned machine learning algorithms, data preprocessing, and model evaluation techniques using Python and Scikit-learn.",
      link: datascience_certificate,
    },
 
    {
      title: "PEL Internship Certificate",
      issuer: "PEL (Pak Elektron Limited)",
      date: "Aug 2024 - Oct 2024",
      description:
        "Contributed to a full-stack eCommerce web application with authentication, cart functionality, and admin dashboard.",
      link: CERTIFICATE,
    },
     {
      title: "MERN Stack Development",
      issuer: "Knowledge Gate",
      date: "2024",
      description:
        "Comprehensive certification in MongoDB, Express.js, React.js, and Node.js full-stack development.",
      link: javascipt_certificate,
    },
   
    {
      title: "AI Course Certificate",
      issuer: "CORVIT Institute",
      date: "2023",
      description:
        "Successfully completed Artificial Intelligence training focused on deep learning, NLP, and automation fundamentals.",
      link: CORVIT,
    },
   
  
  ];

  return (
    <section id="certifications" className="py-20 bg-card">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 gradient-text transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          Certifications & Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
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
                  <Award
                    className="text-primary flex-shrink-0 group-hover:animate-glow"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-normal">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">{cert.description}</p>

                {cert.link ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80"
                    onClick={() => window.open(cert.link, "_blank")}
                  >
                    View Certificate <ExternalLink size={16} className="ml-2" />
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    disabled
                    className="text-gray-400 cursor-not-allowed"
                  >
                    Not Available
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
