"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import heroBg from "@/public/hero-bg.jpg";

const tech = [
  "Node.js",
  "React",
  "TypeScript",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
];

function useTyping() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = tech[i];
    const speed = deleting ? 50 : 100;
    const t = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text === word) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setText(word.slice(0, text.length - 1));
        if (text === "") {
          setDeleting(false);
          setI((i + 1) % tech.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return text;
}

export function Hero() {
  const typed = useTyping();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-float-slow" />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for new projects
        </div>

        <h1
          className="text-balance text-5xl font-bold tracking-tight md:text-7xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          {/* <span className="text-gradient">Manish Rai</span> */}
          <span>Manish Rai</span>
        </h1>

        <p
          className="mt-4 text-xl text-muted-foreground md:text-2xl animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Full Stack Developer building with{" "}
          <span className="font-mono text-primary">{typed}</span>
          <span className="ml-0.5 inline-block w-[2px] h-5 md:h-6 bg-primary align-middle animate-blink" />
        </p>

        <p
          className="mx-auto mt-6 max-w-4xl text-balance text-base leading-relaxed text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          I design and ship scalable web applications — from clean APIs and
          resilient backends to fast, accessible interfaces. Four years of
          turning hard problems into shipped products.
        </p>

        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 glow-primary"
          >
            View Projects
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium transition-colors hover:bg-accent"
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail size={16} /> Contact Me
          </a>
        </div>

        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} /> Remote · Kathmandu, Nepal
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles size={14} /> 4+ yrs experience
          </span>
        </div>
      </div>
    </section>
  );
}
