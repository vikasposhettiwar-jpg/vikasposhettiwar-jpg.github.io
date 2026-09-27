import { ArrowRight } from "lucide-react";
import { processSteps } from "@/lib/resume-data";
import { DotField } from "./decorations";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-background py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[24rem] w-[24rem] rounded-full opacity-[0.07] blur-3xl [background-image:var(--gradient-hero)]"
      />
      <DotField className="pointer-events-none absolute bottom-10 right-8 hidden h-24 w-28 opacity-60 md:block" />

      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Working process
          </p>
          <h2 className="mt-3 text-balance-tight font-display text-3xl font-bold text-ink sm:text-4xl">
            How a project moves through my hands
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <li
              key={step.step}
              className="print-avoid-break relative rounded-3xl border border-white/60 bg-card/70 p-7 shadow-soft backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-amber font-display text-sm font-bold text-amber-foreground">
                  {step.step}
                </span>
                <span className="h-px flex-1 bg-hairline" />
                {index < processSteps.length - 1 ? (
                  <ArrowRight className="h-5 w-5 text-primary/60" strokeWidth={2.4} />
                ) : null}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{step.blurb}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
