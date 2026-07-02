<div align="center">
  
  #  TheNoorNode : My portfolio website
  
  *A modern, interactive, and fully responsive personal portfolio.*

  **[ View Live Website](https://the-noor-node.vercel.app/)**

  <br />

  ![Next.js](https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

</div>

<br />

##  Overview

Welcome to **TheNoorNode**! This repository houses the source code for my personal website, built to showcase my projects, skills, and professional journey. It leverages the latest web technologies to deliver a fast, seamless, and animated user experience.

---

##  Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion

---

##  Project Structure

The repository is organized following Next.js App Router best practices:

```text
├── app/
│   ├── layout.tsx         # Global layout and font configuration
│   ├── page.tsx           # Main landing page assembling all components
│   └── globals.css        # Global styles and Tailwind directives
├── components/
│   ├── Navbar.tsx         # Top navigation
│   ├── Hero.tsx           # Intro section with Framer animations
│   ├── About.tsx          # Personal background
│   ├── Skills.tsx         # Technical stack grid
│   ├── Projects.tsx       # Showcase of past work
│   ├── Experience.tsx     # Professional timeline
│   ├── Education.tsx      # Academic background
│   ├── Certifications.tsx # Courses and achievements
│   ├── Contact.tsx        # Reach out form/links
│   └── ChatbotPlaceholder.tsx # Interactive AI integration
├── tailwind.config.ts     # Tailwind design system constraints
├── tsconfig.json          # TypeScript configurations
├── next.config.ts         # Next.js configurations
└── package.json           # Dependencies and scripts
