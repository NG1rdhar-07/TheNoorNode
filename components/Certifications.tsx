"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Certifications = () => {
  const certifications = [
    {
      title: "CS50x: Introduction to Computer Science",
      issuer: "Harvard University",
      year: "2023",
      link: "https://drive.google.com/file/d/1o8x12AgUTZqNFaMvKa0l42uBZfL2HZNt/view?usp=sharing",
    },
    {
      title: "Walmart Sparkathon 2k'25",
      issuer: "Walmart",
      year: "2025",
      link: "https://drive.google.com/file/d/1rR1Fk_OBSzq0g8j_qOUYVAC7Oqw68ujj/view?usp=sharing",
    },
    {
      title: "ZKP-Guard : Certificate",
      issuer: "ICTIS 2026",
      year: "2026",
      link: "https://drive.google.com/file/d/1mPR5l3qOc4w10q-6sZzd4yKe3SBNIoAu/view?usp=sharing",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Certifications
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedSection key={cert.title}>
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-muted p-6 rounded-xl border border-border hover:border-primary/50 transition-all block"
              >
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                <p className="text-primary text-sm mt-1">{cert.year}</p>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
