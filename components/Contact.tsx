"use client";

import { useState } from "react";
import { Mail, MapPin, FileText, BookOpen, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/ManishThulung" },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manish-rai-ba3006206/",
  },
  // { icon: FaXTwitter, label: "X (Twitter)", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:raimanishthl08@gmail.com" },
  // { icon: FileText, label: "Resume", href: "#" },
  {
    icon: BookOpen,
    label: "Medium",
    href: "https://medium.com/@raimanishthl08",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Have a project in mind or just want to chat? My inbox is always open."
        />

        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            <div className="glass rounded-2xl p-6">
              <div className="text-sm text-muted-foreground">Email</div>
              <a
                href="mailto:raimanishthl08@gmail.com"
                className="mt-1 block font-medium hover:text-primary"
              >
                raimanishthl08@gmail.com
              </a>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} /> Location
              </div>
              <div className="mt-1 font-medium">Kathmandu, Nepal · Remote</div>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="text-sm text-muted-foreground">Availability</div>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Open to new projects
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  aria-label={s.label}
                  className="group relative grid h-11 w-11 place-items-center rounded-xl glass transition-all hover:-translate-y-0.5 hover:glow-primary"
                >
                  <s.icon size={16} />
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-popover px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="glass md:col-span-3 space-y-4 rounded-2xl p-6 md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Name
                </span>
                <input
                  required
                  className="w-full rounded-lg border border-border bg-input/40 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Email
                </span>
                <input
                  required
                  type="email"
                  className="w-full rounded-lg border border-border bg-input/40 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="jane@company.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Subject
              </span>
              <input
                className="w-full rounded-lg border border-border bg-input/40 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Project inquiry"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Message
              </span>
              <textarea
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-border bg-input/40 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Tell me about your project…"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 glow-primary"
            >
              {sent ? (
                "Sent ✓"
              ) : (
                <>
                  Send message <Send size={14} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
