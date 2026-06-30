"use client";

import { useEffect, useState } from "react";

const timelineItems = [
  {
    year: "2024",
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc",
    description:
      "Lead development of microservices architecture and mentored junior developers",
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "Digital Solutions Co",
    description:
      "Built and maintained multiple web applications using modern tech stack",
  },
  {
    year: "2021",
    title: "Junior Full Stack Developer",
    company: "StartUp Hub",
    description:
      "Started career building full-stack web applications with focus on backend",
  },
  {
    year: "2020",
    title: "Self-Taught Developer",
    company: "Freelance",
    description:
      "Learned web development through online courses and personal projects",
  },
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("experience");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience Timeline
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            My professional journey and milestones
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-500 ${isVisible ? "animate-fade-in-up" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center`}
                >
                  {/* Content - alternates left and right */}
                  <div
                    className={`order-1 ${index % 2 === 0 ? "md:order-1 md:text-right" : "md:order-2 md:text-left"}`}
                  >
                    <div className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary font-bold text-sm">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-primary text-sm font-semibold mb-3">
                        {item.company}
                      </p>
                      <p className="text-foreground/60 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="order-2 md:order-none flex justify-center">
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/50" />
                    </div>
                  </div>

                  {/* Empty space for alternation */}
                  {index % 2 === 0 ? (
                    <div className="hidden md:block md:order-3" />
                  ) : (
                    <div className="hidden md:block md:order-1" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
