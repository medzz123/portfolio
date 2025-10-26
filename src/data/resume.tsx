import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mahedi Hasan",
  initials: "MH",
  url: "https://medzz.dev",
  location: "London, UK",
  locationLink: "https://www.google.com/maps/place/london",
  description:
    "Software Engineer passionate about building innovative solutions and tackling challenging problems.",
  summary: `
I started developing in **2019** after completing my Computer Science degree and have since focused on building and scaling **fintech platforms**.

I’ve been part of **early engineering teams**, shaping core architecture, designing **Nx/Turbo monorepos**, and improving **developer workflows** to ship fast and reliably.

My work spans **frontend**, **backend**, and **infrastructure** on **GCP**, with experience in CI/CD, automation, and **LLM pipelines** for financial data. I focus on clean architecture, speed, and solving complex problems efficiently.
  `,
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Vite",
    "Typescript",
    "Node.js",
    "Go",
    "Prisma",
    "Postgres",
    "Docker",
    "GCP",
    "Pulumi"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@medzz.dev",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/medzz123",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/medzz123/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/medzz123",
        icon: Icons.x,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Playter",
      href: "https://playter.co",
      badges: [],
      location: "London, UK",
      title: "Lead Product Developer",
      logoUrl: "/playter.png",
      start: "Aug 2023",
      end: "Present",
      description:`
I was part of the **initial engineering team** that built a **scalable Nx monorepo** using **TypeScript, React, Node.js, and Prisma**, consolidating multiple applications for **merchants, admins, customers, and brokers**.  

I designed the **architecture with code generators** to accelerate development and reduce bugs, implemented **CI/CD pipelines** with **Pulumi and GCP** for seamless deployments, and balanced **speed with maintainability** to drive product solutions.  
      
Additionally, I **architected and implemented company analysis workflows** to support underwriting decisions, integrated **webhook listeners and event-driven processes**, and leveraged **LLMs** to parse **PDFs and extract critical business data**.        
    `
    },
    {
      company: "Build A Rocket Boy",
      badges: [],
      href: "https://buildarocketboy.com/",
      location: "Edinburgh, SC",
      title: "Senior Full Stack Developer",
      logoUrl: "/barb.png",
      start: "Nov 2021",
      end: "Aug 2023",
      description: `
Sole engineer responsible for **creating and maintaining internal admin tools** that control and monitor **game systems, configuration, and performance**.  

Developed **microservices** with **GoLang** and designed **custom game maps** with **Leaflet.js**, integrating performance metrics.  

Created **custom editors** for **JSON file creation and modification** and built **migration tools** for **data promotion** across different environments and namespaces.       
`
    },
    {
      company: "Equals",
      href: "https://equals.co/",
      badges: [],
      location: "London, UK",
      title: "Software Engineer",
      logoUrl: "/equals.png",
      start: "May 2019",
      end: "Oct 2021",
      description:`
Developed the **FairFX Multi-Currency web app** and the **Equals Go web and mobile apps**. Created **reusable React components** and **utility libraries** for multiple projects using **Rollup**.  

Established **CI pipelines** with **GitHub Actions and CircleCI**, ensuring efficient deployment workflows. Developed **GraphQL and REST APIs**, utilizing both **monolithic and microservice architectures**.  

Played a key role as a **core engineer** in planning and developing a **full-stack PWA project**. Monitored and logged application performance with **DataDog and Sentry**, while ensuring **code quality** through automated testing with **Jest and Cypress**.      
`
    },
  ],
  education: [
    {
      school: "City University London",
      href: "https://citystgeorges.ac.uk/",
      degree: "First class - Computer Science",
      logoUrl: "/city.png",
      start: "2017",
      end: "2021",
    },
    {
      school: "New City College",
      href: "https://ncclondon.ac.uk/",
      degree: "BTEC",
      logoUrl: "/college.png",
      start: "2014",
      end: "2017",
    },
  ],
} as const;
