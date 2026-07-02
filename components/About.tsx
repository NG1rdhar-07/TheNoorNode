"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="space-y-4 text-muted-foreground text-lg">
            <p>
              I am a final-year B.Tech student in Communication & Computer Engineering at LNMIIT, Jaipur. I enjoy building user-centric software, with a solid background in frontend and backend development. I have experience building real-world GenAI applications and recently had a research paper accepted at ICTIS 2026 (Springer LNNS).
            </p>
            <p>
              I am interested in the working behind neural networks and how AI can be used to solve complex, real-world problems. I am looking to leverage these skills, where I can contribute to building efficient and scalable systems.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
