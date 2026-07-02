"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Education = () => {
  const education = [
    {
      institution: "The LNM Institute of Information Technology, Jaipur, Rajasthan",
      degree: "B.Tech in Communication and Computer Engineering; CGPA: 7.93/10",
      year: "2023 - 2027",
      grade: "",
    },
    {
      institution: "Daffodils Public School, Fatehabad, Haryana",
      degree: "Higher Secondary Education (AISSCE); Percentage: 88.6%",
      year: "2022",
      grade: "",
    },
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Education
          </h2>
        </AnimatedSection>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <AnimatedSection key={edu.institution}>
              <div
                className="bg-muted p-6 rounded-xl border border-border"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.institution}</h3>
                    <p className="text-primary">{edu.degree}</p>
                  </div>
                  <span className="text-muted-foreground">{edu.year}</span>
                </div>
                {edu.grade && <p className="text-muted-foreground">{edu.grade}</p>}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
