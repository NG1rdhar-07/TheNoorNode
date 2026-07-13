"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Noor";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {text}
            <motion.span 
              className="text-primary"
              animate={text === fullText ? { opacity: [1, 0, 1] } : { opacity: 1 }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              !
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          Final Year Engineering Student | Aspiring Software Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="https://drive.google.com/file/d/1wIfB8-CduOjW1wuoWbBwdepoeLtMvVcP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Resume
          </motion.a>
          <motion.a
            href="https://github.com/NG1rdhar-07"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/noor-999b9b202/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;