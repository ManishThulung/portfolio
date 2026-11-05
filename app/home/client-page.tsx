"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    name: "Appsha",
    type: "SAAS PLATFORM · FULL-STACK DEVELOPMENT",
    description:
      "A social media management platform with profile management, scheduled publishing, subscriptions, analytics, and integrations.",
    stack: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Prisma", "AWS"],
    mark: "A.",
    tone: "project-dark",
    href: "#contact",
  },
  {
    number: "02",
    name: "Solana Token Launchpad",
    type: "WEB3 · SOLANA",
    description:
      "A token launchpad exploring the Solana ecosystem, token creation, on-chain metadata, and liquidity workflows.",
    stack: ["Next.js", "Solana", "Rust", "Prisma", "PostgreSQL"],
    mark: "◎",
    tone: "project-lilac",
    href: "#contact",
  },
  {
    number: "03",
    name: "Spot Orderbook Engine",
    type: "BACKEND ENGINEERING · LEARNING PROJECT",
    description:
      "An exploration of exchange fundamentals: in-memory order matching, bid and ask depth, and concurrent backend services.",
    stack: ["Rust", "Actix Web", "PostgreSQL", "WebSockets"],
    mark: "↗",
    tone: "project-olive",
    href: "#contact",
  },

  {
    number: "04",
    name: "N8N Workflow Clone",
    type: "PERSONAL PROJECT · FULL-STACK",
    description:
      "Developed a workflow automation platform inspired by n8n, enabling users to create and execute custom automation pipelines by chaining predefined actions through an intuitive visual interface.",
    stack: [
      "Node.js",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "RabbitMQ",
      "Monorepo",
    ],
    mark: "N.",
    tone: "project-lilac",
    href: "https://github.com/ManishThulung/n8n",
  },
  {
    number: "05",
    name: "Drawly",
    type: "PERSONAL PROJECT · REAL-TIME COLLABORATION",
    description:
      "Developed a real-time collaborative whiteboard using WebSockets, enabling multiple users to join shared rooms, draw shapes collaboratively with instant synchronization, and communicate through an integrated real-time chat system.",
    stack: [
      "Node.js",
      "Next.js",
      "Prisma",
      "WebSockets",
      "PostgreSQL",
      "Monorepo",
    ],
    mark: "✳",
    tone: "project-olive",
    href: "https://github.com/ManishThulung/excalidraw",
  },
  {
    number: "06",
    name: "Phone Recommendation System",
    type: "PERSONAL PROJECT · PERN STACK",
    description:
      "Built an application that tracks user activities and recommends similar phones using a content-based filtering algorithm. Implemented binary search for better optimisation.",
    stack: [
      "Next.js",
      "NestJS",
      "Express.js",
      "PostgreSQL",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    mark: "↗",
    tone: "project-dark",
    href: "#contact",
  },
];

const services = [
  {
    no: "01",
    icon: "⌘",
    title: "FULL-STACK",
    subtitle: "WEB DEVELOPMENT",
    body: "End-to-end web applications, from thoughtful interfaces to reliable backend systems.",
  },
  {
    no: "02",
    icon: "◫",
    title: "BACKEND",
    subtitle: " & API ENGINEERING",
    body: "Scalable REST APIs, authentication, integrations, background jobs, and business logic.",
  },
  {
    no: "03",
    icon: "▤",
    title: "DATABASE",
    subtitle: " & SYSTEM DESIGN",
    body: "Data modelling, query optimisation, service architecture, and maintainable systems.",
  },
  {
    no: "04",
    icon: "◇",
    title: "WEB3",
    subtitle: " & BLOCKCHAIN",
    body: "Currently exploring Rust, Solana, smart contracts, and decentralised applications.",
  },
];

const experience = [
  {
    period: "2 YEARS",
    company: "APPSHA NEPAL PVT. LTD.",
    role: "FULL-STACK DEVELOPER",
    projects: [
      {
        name: "Link Management System",
        description:
          "Developed a full-stack SaaS platform combining customizable link-in-bio pages, social media management, advanced CRM, appointment booking, digital product sales, Google Business Profile management, and real-time messaging. Built features for cross-platform content publishing, unified inbox, analytics, and subscription-based premium services. Led a team to plan, build, and ship the product within the given deadline.",
        stack: [
          "Node.js",
          "Message Queues",
          "Docker",
          "CI/CD",
          "PostgreSQL",
          "Next.js",
          "AWS",
          "EC2",
        ],
        link: "https://appsha.com/",
      },
    ],
  },
  {
    period: "5 MONTHS",
    company: "IT HIMALAYA PVT. LTD.",
    role: "BACKEND DEVELOPER",
    projects: [
      {
        name: "Survey System",
        description:
          "Built APIs using microservice architecture to simplify internal organisational processes for conducting surveys and visualising survey results. Gained experience with microservices, synchronous and asynchronous communication, CI/CD, and Docker containerisation.",
        stack: ["Node.js", "Message Queues", "Docker", "CI/CD", "PostgreSQL"],
        link: "#",
      },
    ],
  },
  {
    period: "6 MONTHS",
    company: "CLIFFBYTE PVT. LTD.",
    role: "FULL-STACK DEVELOPER",
    projects: [
      {
        name: "Real Estate Ownership Transformation System",
        description:
          "Built frontend features and integrated APIs for an application that automates and simplifies real estate property ownership transformation.",
        stack: [
          "React.js",
          "TypeScript",
          "GraphQL",
          "React Hook Form",
          "HTML",
          "Chakra UI",
        ],
        link: "#",
      },
      {
        name: "Immigration Management System",
        description:
          "Developed both backend and frontend features and integrated APIs for an immigration management system that allows people to complete their immigration process online.",
        stack: [
          "NestJS",
          "React.js",
          "TypeScript",
          "React Query",
          "REST APIs",
          "React Hook Form",
          "HTML",
          "Chakra UI",
        ],
        link: "#",
      },
    ],
  },
  {
    period: "1 YEAR + 3 MONTHS INTERNSHIP",
    company: "VAROSA TECHNOLOGY",
    role: "FRONTEND DEVELOPER",
    projects: [
      {
        name: "Restaurant Management System",
        description:
          "Built frontend experiences that allow customers to place and customise orders through an intuitive interface, ensuring a seamless ordering experience. Also worked on detailed food item management, including recipes and nutritional information.",
        stack: ["React.js", "Redux", "React Query", "Ant Design"],
        link: "#",
      },
      {
        name: "Content Management System (CMS)",
        description:
          "Built the frontend and integrated APIs for a content management application.",
        stack: [
          "React.js",
          "Next.js",
          "TypeScript",
          "REST APIs",
          "HTML",
          "Tailwind CSS",
        ],
        link: "#",
      },
    ],
  },
];

const skills = [
  {
    group: "FRONTEND",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML & CSS",
      "Tailwind CSS",
    ],
  },
  {
    group: "BACKEND",
    items: ["Node.js", "Express.js", "NestJS", "REST APIs", "WebSockets"],
  },
  {
    group: "DATABASE & TOOLS",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Docker", "Git", "AWS"],
  },
  {
    group: "EXPLORING",
    items: ["Rust", "Actix Web", "Solana", "Anchor", "Web3"],
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="arrow-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {diagonal ? (
        <path d="M7 17 17 7M7 7h10v10" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700;800;900&display=swap");

        :root {
          --paper: #deddd2;
          --paper-light: #e9e8df;
          --ink: #211d35;
          --black: #171717;
          --muted: #68665f;
          --line: rgba(33, 29, 53, 0.42);
          --mono: "DM Mono", "Courier New", monospace;
          --sans: "DM Sans", Arial, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          background: #171717;
        }
        a {
          color: inherit;
        }
        .portfolio {
          min-height: 100vh;
          margin: 0;
          padding: 8px;
          background: var(--paper);
          color: var(--black);
          font-family: var(--sans);
          overflow: hidden;
        }
        .site-frame {
          border: 1px solid var(--black);
        }
        .container {
          width: min(1240px, calc(100% - 88px));
          margin: 0 auto;
        }
        .mono {
          font-family: var(--mono);
        }
        .topbar {
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--line);
          gap: 24px;
        }
        .brand {
          font-family: var(--mono);
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          letter-spacing: -0.06em;
        }
        .brand span {
          color: var(--muted);
        }
        .nav {
          display: flex;
          align-items: center;
          gap: 30px;
        }
        .nav a,
        .availability {
          font: 11px var(--mono);
          text-decoration: none;
          letter-spacing: 0.045em;
          text-transform: uppercase;
        }
        .nav a {
          transition: opacity 0.2s;
        }
        .nav a:hover {
          opacity: 0.55;
        }
        .availability {
          display: flex;
          align-items: center;
          gap: 9px;
        }
        .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #526b45;
          display: inline-block;
        }
        .menu-toggle {
          display: none;
          border: 1px solid var(--ink);
          background: transparent;
          padding: 9px 12px;
          font: 11px var(--mono);
        }
        .hero {
          min-height: 690px;
          padding: 88px 0 68px;
          position: relative;
        }
        .eyebrow {
          display: flex;
          align-items: center;
          gap: 13px;
          font: 11px var(--mono);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .eyebrow:before {
          content: "";
          width: 34px;
          height: 1px;
          background: var(--ink);
        }
        .hero-title {
          margin: 42px 0 0;
          color: var(--ink);
          font-size: clamp(76px, 12vw, 164px);
          line-height: 0.82;
          letter-spacing: -0.095em;
          font-weight: 800;
          text-transform: uppercase;
        }
        .hero-title .outline {
          display: block;
          margin-left: clamp(12px, 10vw, 150px);
          margin-top: 17px;
          color: transparent;
          -webkit-text-stroke: 1.5px var(--ink);
        }
        .hero-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-top: 62px;
          margin-right: 32px;
        }
        .hero-intro {
          max-width: 570px;
          font-size: clamp(18px, 2vw, 25px);
          line-height: 1.45;
          font-weight: 600;
          letter-spacing: -0.035em;
        }
        .hero-intro strong {
          color: var(--ink);
        }
        .hero-side {
          max-width: 220px;
          font: 11px/1.8 var(--mono);
          text-transform: uppercase;
        }
        .hero-stamp {
          position: absolute;
          right: 4%;
          top: 95px;
          width: 112px;
          height: 112px;
          border: 1px solid var(--ink);
          border-radius: 50%;
          display: grid;
          place-items: center;
          transform: rotate(12deg);
          font: 10px/1.5 var(--mono);
          text-align: center;
          letter-spacing: 0.08em;
        }
        .hero-stamp b {
          font: 35px var(--sans);
          display: block;
        }
        .scroll-note {
          position: absolute;
          right: 0;
          bottom: 70px;
          writing-mode: vertical-rl;
          font: 10px var(--mono);
          letter-spacing: 0.1em;
        }
        .section {
          padding: 105px 0;
          border-top: 1px solid var(--line);
        }
        .section-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 64px;
        }
        .section-kicker {
          font: 11px var(--mono);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .section-title {
          color: var(--ink);
          font-size: clamp(44px, 7vw, 88px);
          line-height: 0.94;
          letter-spacing: -0.075em;
          font-weight: 800;
          text-transform: uppercase;
          margin: 18px 0 0;
        }
        .section-note {
          max-width: 250px;
          margin-top: 9px;
          color: var(--muted);
          font: 12px/1.8 var(--mono);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 10%;
          align-items: center;
        }
        .about-art {
          min-height: 390px;
          background: var(--ink);
          color: var(--paper);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 28px;
        }
        .about-art:before,
        .about-art:after {
          content: "";
          position: absolute;
          border: 1px solid rgba(222, 221, 210, 0.55);
          border-radius: 50%;
          width: 310px;
          height: 310px;
          right: -95px;
          top: 50px;
        }
        .about-art:after {
          width: 220px;
          height: 220px;
          right: -50px;
          top: 95px;
        }
        .art-mark {
          font-size: 105px;
          line-height: 0.8;
          font-weight: 800;
          letter-spacing: -0.1em;
          z-index: 1;
        }
        .art-caption {
          z-index: 1;
          font: 11px/1.7 var(--mono);
          text-transform: uppercase;
          max-width: 180px;
        }
        .about-copy .lead {
          font-size: clamp(23px, 3vw, 37px);
          line-height: 1.25;
          letter-spacing: -0.055em;
          font-weight: 700;
          margin: 0 0 25px;
        }
        .about-copy p:not(.lead) {
          max-width: 590px;
          color: #4d4b46;
          font-size: 15px;
          line-height: 1.9;
        }
        .text-link {
          display: inline-flex;
          align-items: center;
          gap: 13px;
          margin-top: 20px;
          padding-bottom: 7px;
          border-bottom: 1px solid var(--ink);
          text-decoration: none;
          font: 11px var(--mono);
          text-transform: uppercase;
        }
        .arrow-icon {
          width: 18px;
          height: 18px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
        }
        .service {
          min-height: 220px;
          padding: 27px 30px 30px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 22px;
          transition: background 0.25s;
        }
        .service:hover {
          background: var(--paper-light);
        }
        .service-icon {
          font-size: 56px;
          line-height: 1;
          color: var(--ink);
        }
        .service-no {
          font: 10px var(--mono);
          color: var(--muted);
        }
        .service h3 {
          margin: 12px 0 12px;
          color: var(--ink);
          font: 800 21px/1.12 var(--sans);
          letter-spacing: -0.04em;
          text-transform: uppercase;
        }
        .service p {
          margin: 0;
          max-width: 330px;
          color: #55534d;
          font-size: 13px;
          line-height: 1.7;
        }
        .project-list {
          border-top: 1px solid var(--ink);
        }
        .project {
          display: grid;
          grid-template-columns: 52px 1fr 1fr 44px;
          align-items: center;
          gap: 26px;
          padding: 27px 0;
          border-bottom: 1px solid var(--line);
          text-decoration: none;
        }
        .project-no {
          font: 11px var(--mono);
          color: var(--muted);
          align-self: start;
          padding-top: 7px;
        }
        .project h3 {
          margin: 0;
          color: var(--ink);
          font-size: clamp(25px, 3.5vw, 42px);
          line-height: 1;
          letter-spacing: -0.065em;
        }
        .project-type {
          display: block;
          margin-top: 12px;
          font: 10px var(--mono);
          color: var(--muted);
          letter-spacing: 0.04em;
        }
        .project-desc {
          max-width: 420px;
          font-size: 13px;
          line-height: 1.7;
          color: #4f4d47;
        }
        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 13px;
        }
        .project-stack span {
          border: 1px solid var(--line);
          border-radius: 30px;
          padding: 5px 9px;
          font: 9px var(--mono);
        }
        .project-arrow {
          width: 38px;
          height: 38px;
          border: 1px solid var(--ink);
          border-radius: 50%;
          display: grid;
          place-items: center;
          transition: 0.2s;
        }
        .project:hover .project-arrow {
          background: var(--ink);
          color: var(--paper);
          transform: rotate(45deg);
        }
        .project-visuals {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 36px;
        }
        .project-visual {
          min-height: 150px;
          padding: 18px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          color: var(--ink);
        }
        .project-visual strong {
          font-size: 43px;
          letter-spacing: -0.09em;
        }
        .project-visual span {
          font: 9px var(--mono);
        }
        .project-dark {
          background: #28243a;
          color: #e2e0d5;
        }
        .project-lilac {
          background: #b9b1c7;
        }
        .project-olive {
          background: #b9b9a4;
        }
        .experience-grid {
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 10%;
        }
        .experience-item {
          display: grid;
          grid-template-columns: 150px 1fr;
          gap: 30px;
          padding: 26px 0;
          border-top: 1px solid var(--line);
        }
        .experience-item:last-child {
          border-bottom: 1px solid var(--line);
        }
        .experience-period {
          font: 10px var(--mono);
          color: var(--muted);
        }
        .experience-item h3 {
          margin: 0 0 12px;
          font: 800 19px var(--sans);
          color: var(--ink);
        }
        .experience-item p {
          margin: 0;
          max-width: 500px;
          font-size: 13px;
          line-height: 1.8;
          color: #55534d;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        .skill-group {
          border-top: 1px solid var(--ink);
          padding-top: 15px;
        }
        .skill-group h3 {
          margin: 0 0 20px;
          font: 11px var(--mono);
          letter-spacing: 0.06em;
        }
        .skill-group ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .skill-group li {
          padding: 8px 0;
          border-bottom: 1px solid rgba(33, 29, 53, 0.15);
          font-size: 14px;
        }
        .learning-band {
          margin-top: 55px;
          padding: 25px 28px;
          background: var(--ink);
          color: var(--paper);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
        }
        .learning-band strong {
          font-size: clamp(20px, 3vw, 32px);
          letter-spacing: -0.05em;
        }
        .learning-band span {
          font: 10px/1.8 var(--mono);
          text-align: right;
          text-transform: uppercase;
        }
        .contact {
          padding: 100px 0 70px;
          border-top: 1px solid var(--line);
        }
        .contact-title {
          max-width: 950px;
          margin: 30px 0 55px;
          color: var(--ink);
          font-size: clamp(58px, 11vw, 142px);
          line-height: 0.84;
          letter-spacing: -0.09em;
          font-weight: 800;
          text-transform: uppercase;
        }
        .contact-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
        }
        .contact-copy {
          max-width: 360px;
          font-size: 15px;
          line-height: 1.8;
          color: #55534d;
        }
        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .contact-button {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          border: 1px solid var(--ink);
          padding: 15px 18px;
          text-decoration: none;
          font: 11px var(--mono);
          text-transform: uppercase;
          transition: 0.2s;
        }
        .contact-button:hover {
          background: var(--ink);
          color: var(--paper);
        }
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          border-top: 1px solid var(--line);
          padding: 22px 0;
          font: 10px var(--mono);
          text-transform: uppercase;
          color: var(--muted);
        }
        .footer-links {
          display: flex;
          gap: 20px;
        }
        .footer a {
          text-decoration: none;
          color: var(--ink);
        }

        .experience-company {
          margin-bottom: 8px;
          font: 10px var(--mono);
          letter-spacing: 0.06em;
          color: var(--muted);
        }

        .experience-item h3 {
          margin: 0 0 20px;
          font: 800 19px var(--sans);
          color: var(--ink);
        }

        .experience-project {
          padding: 17px 0;
          border-top: 1px solid rgba(33, 29, 53, 0.18);
        }

        .experience-project h4 {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 9px;
          color: var(--ink);
          font-size: 15px;
          letter-spacing: -0.025em;
        }

        .experience-project h4 a {
          display: inline-flex;
        }

        .experience-project h4 .arrow-icon {
          width: 14px;
          height: 14px;
        }

        .experience-project p {
          margin: 0;
          max-width: 560px;
          font-size: 12px;
          line-height: 1.8;
          color: #55534d;
        }

        .experience-project .project-stack {
          margin-top: 12px;
        }

        .experience-item > div:last-child {
          min-width: 0;
        }

        @media (max-width: 760px) {
          .container {
            width: calc(100% - 38px);
          }
          .topbar {
            height: 66px;
          }
          .menu-toggle {
            display: block;
          }
          .nav {
            display: none;
            position: absolute;
            z-index: 5;
            top: 73px;
            left: 8px;
            right: 8px;
            padding: 22px;
            background: var(--paper-light);
            border: 1px solid var(--ink);
            flex-direction: column;
            align-items: flex-start;
          }
          .nav.nav-open {
            display: flex;
          }
          .availability {
            display: none;
          }
          .hero {
            min-height: 620px;
            padding: 85px 0 60px;
          }
          .hero-title {
            font-size: clamp(62px, 16vw, 112px);
            margin-top: 55px;
          }
          .hero-title .outline {
            margin-left: 5px;
            -webkit-text-stroke-width: 1px;
          }
          .hero-stamp {
            width: 78px;
            height: 78px;
            top: 28px;
            right: 8px;
            font-size: 7px;
          }
          .hero-stamp b {
            font-size: 24px;
          }
          .hero-bottom {
            margin-top: 55px;
            display: block;
          }
          .hero-intro {
            font-size: 20px;
          }
          .hero-side {
            margin-top: 25px;
          }
          .scroll-note {
            display: none;
          }
          .section {
            padding: 75px 0;
          }
          .section-head {
            display: block;
            margin-bottom: 40px;
          }
          .section-note {
            margin-top: 20px;
          }
          .about-grid,
          .experience-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }
          .about-art {
            min-height: 280px;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service {
            min-height: 190px;
            padding: 23px 18px;
            grid-template-columns: 55px 1fr;
            gap: 15px;
          }
          .service-icon {
            font-size: 43px;
          }
          .project {
            grid-template-columns: 30px 1fr 36px;
            gap: 12px;
          }
          .project-desc {
            grid-column: 2 / 3;
            grid-row: 2;
          }
          .project-arrow {
            grid-column: 3;
            grid-row: 1;
          }
          .project-visuals {
            grid-template-columns: 1fr;
          }
          .project-visual {
            min-height: 115px;
          }
          .experience-item {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px 18px;
          }
          .learning-band {
            align-items: flex-start;
            flex-direction: column;
          }
          .learning-band span {
            text-align: left;
          }
          .contact {
            padding: 75px 0 45px;
          }
          .contact-title {
            font-size: clamp(57px, 15vw, 100px);
          }
          .contact-bottom {
            align-items: flex-start;
            flex-direction: column;
          }
          .footer {
            align-items: flex-start;
            flex-direction: column;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="site-frame">
        <div className="container">
          <header className="topbar">
            <a className="brand" href="#home" onClick={closeMenu}>
              MANISH<span>®</span> RAI.
            </a>
            <nav
              className={`nav ${menuOpen ? "nav-open" : ""}`}
              aria-label="Main navigation"
            >
              <a href="#about" onClick={closeMenu}>
                ABOUT
              </a>
              <a href="#services" onClick={closeMenu}>
                WHAT I DO
              </a>
              <a href="#work" onClick={closeMenu}>
                SELECTED WORK
              </a>
              <a href="#experience" onClick={closeMenu}>
                EXPERIENCE
              </a>
              <a href="#contact" onClick={closeMenu}>
                CONTACT
              </a>
            </nav>
            <div className="availability">
              <i className="dot" /> OPEN TO OPPORTUNITIES
            </div>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
            >
              {menuOpen ? "CLOSE −" : "MENU +"}
            </button>
          </header>

          <section className="hero" id="home">
            <div className="eyebrow">INDEPENDENT DEVELOPER · NEPAL</div>
            <div className="hero-stamp">
              <div>
                <b>✳</b> BUILDING
                <br />
                FOR THE WEB
              </div>
            </div>
            <h1 className="hero-title">
              MANISH<span className="outline">RAI.</span>
            </h1>
            <div className="hero-bottom">
              <div className="hero-intro">
                I turn ideas into <strong>useful digital products.</strong>
                <br />
                Full-stack developer crafting web experiences, backend systems,
                and everything in between.
              </div>
              <div className="hero-side">
                4+ YEARS OF BUILDING
                <br />
                MERN · NEXT.JS · TYPESCRIPT
                <br />
                CURRENTLY EXPLORING RUST & WEB3
              </div>
            </div>
            <div className="scroll-note">SCROLL TO EXPLORE ↓</div>
          </section>

          <section className="section" id="about">
            <div className="section-head">
              <div>
                <div className="section-kicker">01 / A LITTLE INTRODUCTION</div>
                <h2 className="section-title">
                  THE PERSON
                  <br />
                  BEHIND THE CODE.
                </h2>
              </div>
              <p className="section-note">
                CURIOUS BY NATURE. ENGINEERED TO BUILD. ALWAYS LEARNING.
              </p>
            </div>
            <div className="about-grid">
              <div className="about-art">
                <div className="section-kicker" style={{ color: "inherit" }}>
                  DEVELOPER / PROBLEM SOLVER
                </div>
                <div className="art-mark">MR.</div>
                <div className="art-caption">
                  DESIGNING, DEVELOPING & DELIVERING DIGITAL EXPERIENCES.
                </div>
              </div>
              <div className="about-copy">
                <p className="lead">
                  Hey, I'm Manish — a full-stack developer with 4+ years of
                  experience building for the web.
                </p>
                <p>
                  I work primarily across the MERN stack and modern JavaScript
                  ecosystem, turning product requirements into clean interfaces,
                  dependable APIs, and maintainable applications.
                </p>
                <p>
                  I enjoy understanding how things work under the hood. Lately,
                  that curiosity has taken me deeper into Rust, systems
                  programming, and Web3 — learning by building and
                  experimenting.
                </p>
                <a className="text-link" href="#work">
                  EXPLORE MY WORK <Arrow diagonal />
                </a>
              </div>
            </div>
          </section>

          <section className="section" id="services">
            <div className="section-head">
              <div>
                <div className="section-kicker">02 / HOW I CAN HELP</div>
                <h2 className="section-title">
                  WHAT I<br />
                  BRING TO THE TABLE.
                </h2>
              </div>
              <p className="section-note">
                FROM THE FIRST COMPONENT TO THE LAST API RESPONSE.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service" key={service.no}>
                  <div className="service-icon">{service.icon}</div>
                  <div>
                    <div className="service-no">{service.no} / SERVICE</div>
                    <h3>
                      {service.title}
                      <br />
                      <span style={{ fontWeight: 500 }}>
                        {service.subtitle}
                      </span>
                    </h3>
                    <p>{service.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="work">
            <div className="section-head">
              <div>
                <div className="section-kicker">
                  03 / A FEW THINGS I'VE BUILT
                </div>
                <h2 className="section-title">
                  SELECTED
                  <br />
                  WORK.
                </h2>
              </div>
              <p className="section-note">
                A MIX OF PRODUCT DEVELOPMENT, BACKEND ENGINEERING & EXPLORATION.
              </p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <a className="project" href={project.href} key={project.number}>
                  <span className="project-no">{project.number}</span>
                  <div>
                    <h3>{project.name}</h3>
                    <span className="project-type">{project.type}</span>
                  </div>
                  <div className="project-desc">
                    {project.description}
                    <div className="project-stack">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                  <span className="project-arrow">
                    <Arrow diagonal />
                  </span>
                </a>
              ))}
            </div>
            <div className="project-visuals" aria-label="Project themes">
              <div className="project-visual project-dark">
                <span>PRODUCT ENGINEERING</span>
                <strong>A.</strong>
              </div>
              <div className="project-visual project-lilac">
                <span>DECENTRALISED IDEAS</span>
                <strong>◎</strong>
              </div>
              <div className="project-visual project-olive">
                <span>SYSTEMS & LOGIC</span>
                <strong>↗</strong>
              </div>
            </div>
          </section>

          <section className="section" id="experience">
            <div className="experience-grid">
              <div>
                <div className="section-kicker">04 / THE JOURNEY SO FAR</div>
                <h2 className="section-title">
                  EXPERIENCE
                  <br />& GROWTH.
                </h2>
                <p className="section-note">
                  GOOD ENGINEERING IS A CONTINUOUS PROCESS OF LEARNING,
                  BUILDING, AND IMPROVING.
                </p>
              </div>
              <div>
                {experience.map((item) => (
                  <article className="experience-item" key={item.company}>
                    <div className="experience-period">{item.period}</div>

                    <div>
                      <div className="experience-company">{item.company}</div>

                      <h3>{item.role}</h3>

                      {item.projects.map((project) => (
                        <div className="experience-project" key={project.name}>
                          <h4>
                            {project.name}

                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Visit ${project.name}`}
                              >
                                <Arrow diagonal />
                              </a>
                            )}
                          </h4>

                          <p>{project.description}</p>

                          <div className="project-stack">
                            {project.stack.map((technology) => (
                              <span key={technology}>{technology}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="stack">
            <div className="section-head">
              <div>
                <div className="section-kicker">05 / MY TOOLKIT</div>
                <h2 className="section-title">
                  TOOLS OF
                  <br />
                  THE TRADE.
                </h2>
              </div>
              <p className="section-note">
                THE RIGHT TOOL FOR THE PROBLEM — AND ALWAYS ROOM FOR ONE MORE.
              </p>
            </div>
            <div className="skills-grid">
              {skills.map((group) => (
                <div className="skill-group" key={group.group}>
                  <h3>{group.group}</h3>
                  <ul>
                    {group.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="learning-band">
              <strong>Currently learning: Rust + Web3.</strong>
              <span>
                EXPLORING SYSTEMS PROGRAMMING
                <br />
                SMART CONTRACTS & BLOCKCHAIN
              </span>
            </div>
          </section>

          <section className="contact" id="contact">
            <div className="section-kicker">06 / HAVE SOMETHING IN MIND?</div>
            <h2 className="contact-title">
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              MEANINGFUL.
            </h2>
            <div className="contact-bottom">
              <p className="contact-copy">
                Have an idea, a challenge, or an opportunity? I'd love to hear
                about it. Let's start a conversation.
              </p>
              <div className="contact-actions">
                <a
                  className="contact-button"
                  href="mailto:YOUR_EMAIL@example.com"
                >
                  EMAIL ME <Arrow diagonal />
                </a>
                <a
                  className="contact-button"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LINKEDIN <Arrow diagonal />
                </a>
                <a
                  className="contact-button"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB <Arrow diagonal />
                </a>
              </div>
            </div>
          </section>

          <footer className="footer">
            <span>
              © {new Date().getFullYear()} MANISH RAI · MADE WITH CURIOSITY.
            </span>
            <div className="footer-links">
              <a href="#home">BACK TO TOP ↑</a>
              <span>NEPAL · UTC +5:45</span>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
