import { CheckCircle2, Layers, Sparkles } from "lucide-react";
import { languages, objective, profile, softSkills } from "@/lib/resume-data";
import { RingShape, StarBurst, TriangleShape } from "./decorations";

const stats = [
  { value: "3rd", label: "Year of B.Tech", icon: Layers },
  { value: "3", label: "Projects shipped", icon: Sparkles },
  { value: "2028", label: "Expected graduation", icon: CheckCircle2 },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-secondary/60 py-20 lg:py-24">
      <RingShape className="animate-drift pointer-events-none absolute right-10 top-12 h-16 w-16 text-primary/30" />
      <TriangleShape className="pointer-events-none absolute bottom-12 right-1/4 h-6 w-6 text-amber" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About me
          </p>
          <h2 className="mt-3 text-balance-tight font-display text-3xl font-bold text-ink sm:text-4xl">
            Solutions first, models second
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{objective}</p>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Right now that means a {profile.year.toLowerCase()} student at {profile.institute}{" "}
            spending most of his free hours with Python, OpenCV and Django — turning coursework
            into things that actually run.
          </p>

          <div className="mt-9 flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-hairline bg-card px-3.5 py-1.5 text-xs font-medium text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            <span className="font-semibold text-ink">Languages:</span> {languages.join(" · ")}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="print-avoid-break rounded-3xl border border-hairline bg-card p-6 shadow-soft"
              >
                <Icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
                <p className="mt-5 font-display text-4xl font-bold text-ink">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}

          <div className="print-avoid-break relative overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground shadow-lift">
            <StarBurst className="absolute -right-3 -top-3 h-12 w-12 text-amber" />
            <p className="font-display text-lg font-semibold">Currently exploring</p>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
              Deep learning fundamentals, model evaluation, and building small end-to-end
              applications that a real person can click through.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
