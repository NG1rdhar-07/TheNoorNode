"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Publications = () => {
  return (
    <section id="publications" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Publications and Presentations
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <a
            href="https://youtu.be/IW5Znqj4Qt8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted p-6 rounded-xl border border-border hover:border-primary/50 transition-all block"
          >
            <h3 className="text-xl font-semibold mb-2">
              "ZKP-Guard: A Lightweight Framework for Verifying Digital Image Authenticity and Ownership"
            </h3>
            <p className="text-primary mb-1">
              Noor, S. Mukherjee, S. S. Yadav
            </p>
            <p className="text-muted-foreground text-sm mb-2">
              11th International Conference on Information and Communication Technology for Intelligent Systems (ICTIS 2026), Bangkok, Thailand.
            </p>
            <p className="text-muted-foreground text-sm">
              (Accepted / To appear in Springer LNNS Series)
            </p>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Publications;
