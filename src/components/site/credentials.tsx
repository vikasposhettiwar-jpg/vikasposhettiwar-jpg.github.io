import { Award, BadgeCheck, Heart } from "lucide-react";
import { certifications, interests, languages } from "@/lib/resume-data";
import { DotField } from "./decorations";

export function Credentials() {
  return (
    <section
      id="credentials"
      className="relative overflow-hidden bg-background py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[24rem] w-[24rem] rounded-full opacity-[0.07] blur-3xl [background-image:var(--gradient-hero)]"
      />
      <DotField className="pointer-events-none absolute left-8 bottom-12 hidden h-24 w-28 opacity-60 md:block" />

      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Certifications &amp; interests
          </p>
          <h2 className="mt-3 text-balance-tight font-display text-3xl font-bold text-ink sm:text-4xl">
            Courses behind me, curiosity ahead
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <article
                key={cert.title}
                className="print-avoid-break flex h-full flex-col rounded-3xl border border-white/60 bg-card/70 p-6 shadow-soft backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
              >
                <BadgeCheck className="h-5 w-5 text-primary" strokeWidth={2.2} />
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {cert.issuer}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {cert.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-rows-2">
            <div className="print-avoid-break flex h-full flex-col rounded-3xl border border-white/60 bg-primary/10 p-6 backdrop-blur-xl">
              <Award className="h-5 w-5 text-primary" strokeWidth={2.2} />
              <h3 className="mt-4 font-display text-base font-semibold text-ink">Languages</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {languages.join(" · ")}
              </p>
            </div>
            <div className="print-avoid-break flex h-full flex-col rounded-3xl border border-white/60 bg-card/70 p-6 shadow-soft backdrop-blur-xl">
              <Heart className="h-5 w-5 text-amber" strokeWidth={2.2} />
              <h3 className="mt-4 font-display text-base font-semibold text-ink">Interests</h3>
              <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted-foreground">
                {interests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
