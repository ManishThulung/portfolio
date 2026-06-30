"use client";

import { useEffect, useRef, useState } from "react";
import { Gauge, Layers, Sparkles, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const dur = 1500;
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - t0) / dur, 1);
          setN(Math.round(start + (to - start) * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: Sparkles, label: "Years of experience", value: 6, suffix: "+" },
  { icon: Layers, label: "Projects shipped", value: 40, suffix: "+" },
  { icon: Users, label: "Happy clients", value: 25, suffix: "+" },
  { icon: Gauge, label: "Avg. Lighthouse score", value: 98, suffix: "" },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="About"
          title="Engineering at the intersection of craft and scale"
        />

        <div className="grid gap-10 md:grid-cols-5 md:items-center">
          <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a full stack developer with{" "}
              <span className="text-foreground font-medium">4+ years</span> of
              experience designing and shipping production web applications. My
              focus is on{" "}
              <span className="text-foreground font-medium">
                scalable backend architecture
              </span>{" "}
              and{" "}
              <span className="text-foreground font-medium">
                modern, accessible frontends
              </span>
              .
            </p>
            <p>
              I care deeply about clean code, predictable systems, and the kind
              of small details that make a product feel finished — fast loads,
              considered animations, sensible defaults. I've shipped APIs
              serving millions of requests and interfaces used by teams across
              four continents.
            </p>
            <p>
              When I'm not at the keyboard you'll find me reading distributed
              systems papers, fiddling with my homelab, or hiking somewhere with
              no signal.
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-5 transition-transform hover:-translate-y-1"
              >
                <s.icon className="mb-3 text-primary" size={20} />
                <div className="text-2xl font-bold tracking-tight">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
