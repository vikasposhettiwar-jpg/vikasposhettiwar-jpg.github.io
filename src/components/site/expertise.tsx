import { Brain, Code2, Eye } from "lucide-react";
import { expertiseCards } from "@/lib/resume-data";
import { DotField, Squiggle } from "./decorations";

const icons = {
  brain: Brain,
  eye: Eye,
  code: Code2,
};

export function Expertise() {
  return (
    <section id="expertise" className="relative overflow-hidden bg-background py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-[26rem] w-[26rem] rounded-full opacity-[0.07] blur-3xl [background-image:var(--gradient-hero)]"
      />
      <DotField className="pointer-events-none absolute left-6 top-10 hidden h-24 w-28 opacity-60 md:block" />

      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Expertise
          </p>
          <h2 className="mt-3 text-balance-tight font-display text-3xl font-bold text-ink sm:text-4xl">
            What I enjoy working on
          </h2>
          <Squiggle className="mt-4 h-4 w-40 text-amber" />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {expertiseCards.map((card) => {
            const Icon = icons[card.icon];
            const featured = card.featured;

            return (
              <article
                key={card.title}
                className={`print-avoid-break relative flex flex-col rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1 ${
                  featured
                    ? "bg-primary text-primary-foreground shadow-lift"
                    : "border border-white/60 bg-card/70 text-card-foreground shadow-soft backdrop-blur-xl"
                }`}
              >
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl ${
                    featured
                      ? "bg-primary-foreground/15 text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2.1} />
                </span>

                <h3
                  className={`mt-6 font-display text-xl font-semibold ${
                    featured ? "text-primary-foreground" : "text-ink"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`mt-3 flex-1 text-sm leading-relaxed ${
                    featured ? "text-primary-foreground/85" : "text-muted-foreground"
                  }`}
                >
                  {card.blurb}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <li
                      key={tag}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        featured
                          ? "bg-primary-foreground/15 text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
