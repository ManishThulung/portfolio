import { SectionHeading } from "./SectionHeading";
import { Atom, Server, Database, Cloud, Wrench } from "lucide-react";

const groups = [
  {
    icon: Atom,
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express.js", "NestJS"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    items: [
      "Docker",
      "Nginx",
      "CI/CD",
      "Linux",
      "Git",
      "Vercel",
      "Cloudflare",
      "AWS",
    ],
  },
  {
    icon: Wrench,
    title: "Other",
    items: [
      "REST APIs",
      "JWT Auth",
      "Monorepo",
      "WebSockets",
      "BullMQ",
      "Microservice",
    ],
  },
];

export function Stack() {
  return (
    <section id="stack" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I reach for"
          description="A curated toolkit refined over years of shipping real products."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="group glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:glow-primary"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <g.icon size={18} />
                </span>
                <h3 className="font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
