"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "SQL", "JavaScript", "Python"],
    },
    {
      title: "Backend & Tools",
      skills: ["React", "Node.js", "FastAPI", "Postman", "ChromaDB", "Git", "Docker"],
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures", "Algorithms", "OOP", "System Design", "ML/DL", "DBMS"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Skills
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title}>
              <div
                className="bg-muted p-6 rounded-xl border border-border"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-background rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
