import { ExternalLink } from "lucide-react";
import p1 from "@/public/appsha.png";
import p2 from "@/public/drawly.png";
import p3 from "@/public/project-1.jpg";
import { SectionHeading } from "./SectionHeading";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

const projects = [
  {
    image: p1,
    title: "Appsha",
    desc: "Designed and developed a scalable platform featuring customizable profile pages, multi-platform social media publishing, a real-time unified messaging inbox, Google Business Profile review management, advanced CRM, appointment booking, digital product sales, analytics, and subscription-based premium features.",
    stack: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Prisma",
      "Docker",
      "Socket.io",
    ],
    github: null,
    href: "https://appsha.com/",
  },
  {
    image: p2,
    title: "Drawly",
    desc: "Realtime collaborative whiteboard canvas to draw different shapes(circle, diamond etc.) along with chat room.",
    stack: [
      "React.js",
      "Node.js",
      "Prisma",
      "WebSoket",
      "TypeScript",
      "Monorepo",
    ],
    github: "https://github.com/ManishThulung/drawly",
    href: "#",
  },
  {
    image: p3,
    title: "n8n",
    desc: "Developed a workflow automation platform inspired by n8n, enabling users to create and execute custom automation pipelines by chaining predefined actions through an intuitive visual interface.",
    stack: ["React.js", "Node.js", "Postgres", "TypeScript"],
    github: "https://github.com/ManishThulung/n8n",
    href: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured projects"
          description="A few recent things I built — from backend systems to polished interfaces."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl glass transition-all hover:-translate-y-2 hover:glow-primary"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-60" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-[11px] font-mono text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2 pt-2">
                  {p.github && (
                    <Link
                      href={p.github}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-accent"
                    >
                      <FaGithub size={14} /> Code
                    </Link>
                  )}
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#e4f1eb] px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
