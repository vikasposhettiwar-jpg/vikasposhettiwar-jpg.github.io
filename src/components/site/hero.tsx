import { ArrowRight, GraduationCap, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/resume-data";
import { DotField } from "./decorations";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background pb-24 pt-28 lg:pt-36">
      {/* layered depth: soft gradient orbs + dot field */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-48 h-[34rem] w-[34rem] rounded-full opacity-10 blur-3xl [background-image:var(--gradient-hero)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-[-10rem] h-96 w-96 rounded-full bg-amber opacity-[0.12] blur-3xl"
      />
      <DotField className="pointer-events-none absolute right-10 top-24 h-40 w-52 opacity-60" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-12 lg:gap-10">
        {/* ---------- content column ---------- */}
        <div className="animate-rise lg:col-span-7">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            AI / ML Student · 3rd Year
          </span>

          <h1 className="mt-7 font-display text-[clamp(2.6rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-tight text-ink">
            VIKAS
            <br />
            <span className="text-amber">POSHETTIWAR</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
            >
              View my work
              <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-hairline bg-card px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-primary/40 hover:text-primary"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-hairline pt-7">
            <MetaChip icon={<GraduationCap className="h-4 w-4" />} label="Year" value={profile.year} />
            <MetaChip icon={<MapPin className="h-4 w-4" />} label="Institute" value={profile.institute} />
            <MetaChip icon={<Phone className="h-4 w-4" />} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
          </dl>
        </div>

        {/* ---------- glass profile card column ---------- */}
        <div className="relative mx-auto w-full max-w-sm lg:col-span-5">
          <div className="absolute inset-0 rotate-3 scale-105 rounded-[2.5rem] opacity-10 [background-image:var(--gradient-hero)]" />

          <div className="relative rounded-[2.5rem] border border-white/60 bg-card/80 p-8 shadow-lift backdrop-blur-xl">
            <div className="flex flex-col items-center text-center">
              <div className="grid h-28 w-28 place-items-center rounded-full border-4 border-card bg-primary shadow-soft">
                <span className="font-display text-4xl font-extrabold text-primary-foreground">VP</span>
              </div>

              <h2 className="mt-6 font-display text-xl font-semibold leading-snug text-ink">
                {profile.degree}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{profile.institute}</p>

              <div className="mt-6 grid w-full grid-cols-2 gap-3">
                <div className="rounded-2xl border border-hairline bg-secondary p-4 text-left">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-widest text-muted-foreground">
                    Year
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-primary">{profile.year}</p>
                </div>
                <div className="rounded-2xl border border-hairline bg-secondary p-4 text-left">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-widest text-muted-foreground">
                    Graduation
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-ink">2028</p>
                </div>
              </div>

              <div className="relative mt-3 w-full overflow-hidden rounded-3xl bg-ink p-5 text-left">
                <p className="text-[0.62rem] font-semibold uppercase tracking-widest text-primary-foreground/60">
                  Technical Focus
                </p>
                <p className="mt-1.5 font-display text-base font-semibold tracking-tight text-primary-foreground">
                  AI · Computer Vision · Machine Learning
                </p>
                <span className="pointer-events-none absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-amber opacity-25 blur-2xl" />
              </div>
            </div>

            <span className="animate-float-soft absolute -right-3 -top-4 inline-flex rotate-3 items-center whitespace-nowrap rounded-full bg-amber px-4 py-1.5 font-display text-[0.62rem] font-bold uppercase leading-tight tracking-wide text-amber-foreground shadow-amber">
              Open to internships
            </span>
          </div>

          <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber opacity-20 blur-xl" />
          <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-primary opacity-15 blur-xl" />
        </div>
      </div>
    </section>
  );
}

function MetaChip({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const body = (
    <>
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-secondary text-primary">{icon}</span>
      <span className="flex flex-col">
        <span className="text-[0.62rem] font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        <span className="text-sm font-medium text-ink">{value}</span>
      </span>
    </>
  );
  return (
    <div className="flex items-center gap-3">
      {href ? (
        <a href={href} className="flex items-center gap-3 transition-colors hover:text-primary">
          {body}
        </a>
      ) : (
        body
      )}
    </div>
  );
}
