import { ArrowRight, GraduationCap, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/resume-data";
import { DotField, LoopSquiggle, RingShape, StarBurst, TriangleShape } from "./decorations";

export function Hero() {
  return (
    <section id="home" className="surface-hero relative overflow-hidden pt-28 lg:pt-32">
      <DotField className="dots-light pointer-events-none absolute -top-4 right-6 h-32 w-40 opacity-70 lg:right-24" />
      <RingShape className="animate-float-soft pointer-events-none absolute left-[-3rem] top-40 h-40 w-40 text-primary-foreground/20" />
      <TriangleShape className="animate-drift pointer-events-none absolute bottom-10 left-8 h-10 w-10 text-amber/70" />
      <StarBurst className="pointer-events-none absolute right-1/3 top-16 h-6 w-6 text-amber" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pb-28">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            AI / ML Student · 3rd Year
          </span>

          <p className="mt-7 font-display text-lg font-medium text-primary-foreground/80">
            Hello, I&rsquo;m
          </p>
          <h1 className="mt-1 font-display text-[clamp(2.1rem,8vw,5.2rem)] font-bold leading-[0.92] text-primary-foreground">
            VIKAS
            <br />
            <span className="text-amber">POSHETTIWAR</span>
          </h1>
          <LoopSquiggle className="mt-4 h-6 w-52 text-primary-foreground/50" />

          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-semibold text-amber-foreground shadow-amber transition-transform duration-200 hover:-translate-y-0.5"
            >
              View my work
              <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary-foreground/10"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-amber" />
              <span>{profile.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber" />
              <span>{profile.institute}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-amber" />
              <a href={`tel:${profile.phone}`} className="hover:text-primary-foreground">
                {profile.phone}
              </a>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -rotate-6 rounded-[2.5rem] border-2 border-primary-foreground/25" />
          <div className="relative rounded-[2.5rem] bg-card p-7 shadow-lift">
            <div className="grid h-32 w-32 place-items-center rounded-3xl bg-primary-soft">
              <span className="font-display text-5xl font-bold text-primary">VP</span>
            </div>

            <h2 className="mt-6 font-display text-xl font-semibold text-ink">
              {profile.degree}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {profile.institute}
            </p>

            <div className="mt-6 grid gap-2 border-t border-hairline pt-5 text-sm">
              <Row label="Year" value={profile.year} />
              <Row label="Graduation" value="2028" />
              <Row label="Focus" value="AI · CV · Django" />
            </div>

            <span className="animate-float-soft absolute right-2 top-3 grid h-16 w-16 place-items-center rounded-2xl bg-amber text-center font-display text-[0.65rem] font-bold uppercase leading-tight text-amber-foreground shadow-amber sm:-right-4 sm:-top-4">
              Open to
              <br />
              internships
            </span>
          </div>
        </div>
      </div>

      <div className="relative h-10 w-full bg-background [clip-path:ellipse(70%_100%_at_50%_100%)]" />
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-semibold text-ink">{value}</dd>
    </div>
  );
}
