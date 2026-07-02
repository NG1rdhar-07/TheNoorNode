"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Projects = () => {
  const projects = [
    {
      title: "DataPilot AI",
      tech: ["Python", "React", "Supabase", "PostgreSQL", "Gemini SDK", "OpenTelemetry"],
      bullets: [
        "Engineered a GenAI analytics pipeline translating natural language to Python, utilizing deterministic fuzzy-matching and automated LLM failover",
        "Architected a secure, AST-validated sandbox to safely execute and self-heal AI-generated code",
        "Built an async backend with OpenTelemetry tracing and owner-scoped PostgreSQL repositories enforcing strict isolation"
      ],
      links: {
        github: "https://github.com/NG1rdhar-07/datapilot-ai",
        demo: "https://datapilot-ai-alpha.vercel.app",
        youtube: "https://youtu.be/8XhrnDDOeBo",
        architecture: "https://drive.google.com/file/d/1FobCIOPpMVxiBZDncBltPntsH-CLtlwk/view?usp=sharing",
      },
    },
    {
      title: "Hybrid RAG Search Engine",
      tech: ["Python", "ChromaDB", "React", "FastAPI", "RAGAS"],
      bullets: [
        "Built a hybrid retrieval pipeline combining BM25 keyword search and vector similarity search via Reciprocal Rank Fusion, boosting retrieval accuracy over pure semantic search",
        "Evaluated the pipeline with RAGAS, achieving great faithfullness score to quantify and reduce LLM hallucination",
        "Designed an async FastAPI REST backend with Pydantic validation, paired with a React frontend exposing live retrieval traces"
      ],
      links: {
        github: "https://github.com/NG1rdhar-07/hybrid-rag-search-engine",
      },
    },
    {
      title: "Causal-VidGraph Engine",
      tech: ["Python", "HuggingFace", "NetworkX", "CUDA", "Bash"],
      bullets: [
        "Architected a multimodal reasoning pipeline processing 5,440 raw videos and 34K QA pairs, scaling graph data 10x to eliminate severe model overfitting",
        "Optimized DGX cluster compute using 4-bit NF4 quantization on a 7B model, completely eliminating VRAM OOM crashes during heavy parallel execution",
        "Engineered a deterministic anti-hallucination gate via DeBERTa-v3 NLI to cross-verify and strip invalid visual entities prior to GNN execution"
      ],
      links: {
        github: "https://github.com/NG1rdhar-07/Causal-VidGraph",
        systemOverview: "https://drive.google.com/file/d/1c-ejyuJwDw-cVbr7pFvEv3HIqfpZuI3_/view?usp=sharing",
        report: "https://drive.google.com/file/d/12fOGiuaaGBh8Zj30BFp_DAekuysTJhha/view?usp=sharing",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Projects
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group bg-muted p-6 rounded-xl border border-border hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-background rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.links.youtube && (
                    <a
                      href={project.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      YouTube Video
                    </a>
                  )}
                  {project.links.architecture && (
                    <a
                      href={project.links.architecture}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Architecture
                    </a>
                  )}
                  {project.links.systemOverview && (
                    <a
                      href={project.links.systemOverview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      System Overview
                    </a>
                  )}
                  {project.links.report && (
                    <a
                      href={project.links.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Report
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
