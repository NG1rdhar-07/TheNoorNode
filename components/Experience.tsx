"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Experience
          </h2>
        </AnimatedSection>

        {/* Internship */}
        <AnimatedSection className="mb-6">
          <a
            href="https://drive.google.com/file/d/1xQWdJSS5W2HjlXMHPYuExzkWTlxNLXtw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-muted p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">Web Development Intern</h3>
                <p className="text-primary">Indicore Infocomm Pvt. Ltd.</p>
              </div>
              <span className="text-muted-foreground">May 2025 – July 2025</span>
            </div>
            <p className="text-muted-foreground text-sm mb-2">Tech Stack: React.js • SQL • REST APIs • Git & GitHub • Agile</p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Built full-stack features, working directly on both frontend and backend components.</li>
              <li>Optimized SQL queries to improve data retrieval speed and backend efficiency.</li>
              <li>Implemented automated testing and CI/CD pipelines for smooth code deployments.</li>
            </ul>
          </a>
        </AnimatedSection>

        {/* Coordinator */}
        <AnimatedSection>
          <div
            className="bg-muted p-6 rounded-xl border border-border"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">Coordinator</h3>
                <p className="text-primary">The LNMIIT Alumni Association (Jaipur, India)</p>
              </div>
              <span className="text-muted-foreground">Oct 2025 - Apr 2026</span>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>Worked with a team of coordinators to plan and run major events like the <a href="https://alumni.lnmiit.ac.in/newsroom/news/ECHO-2026-A-Successful-Homecoming.dz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ECHO Alumni Meet</a> and <a href="https://alumni.lnmiit.ac.in/newsroom/news/LNMIIT-Alumni-Association-Hosts-Successful-Delhi-Chapter-Meet-2026.dz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Delhi Chapter Meet</a>, managing everything from initial planning to on-ground logistics.</li>
              <li>Facilitated impactful alumni talks and <a href="https://www.linkedin.com/posts/akshita-s-g_im-a-fossil-and-so-i-mentor-guess-what-activity-7414587607235538944-cR46" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">career mentorship sessions </a>for students.</li>
              <li><a href="https://www.linkedin.com/posts/noor-999b9b202_wrapping-up-the-first-meet-with-the-y-25-activity-7419425662517653504-a04A" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Led internal team </a>communication and task delegation for a team of volunteers to keep project timelines on track.</li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Experience;
