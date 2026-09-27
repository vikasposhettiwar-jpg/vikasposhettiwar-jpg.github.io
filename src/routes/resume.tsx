import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Award, BadgeCheck, Github, Linkedin, Phone, Printer } from "lucide-react";
import {
  certifications,
  interests,
  languages,
  objective,
  profile,
  projects,
  skillGroups,
  softSkills,
} from "@/lib/resume-data";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Vikas Poshettiwar — Resume / CV" },
      {
        name: "description",
        content:
          "Printable one-page resume for Vikas Poshettiwar: B.Tech Computer Science (AI & ML) student, skills, projects, certifications and contact details.",
      },
      { property: "og:title", content: "Vikas Poshettiwar — Resume / CV" },
      {
        property: "og:description",
        content:
          "A print-ready A4 resume for Vikas Poshettiwar — AI/ML student, Python, OpenCV, Django, Pandas and Scikit-learn.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <div className="resume-page min-h-screen bg-secondary/70 pb-16 pt-6">
      <div className="no-print mx-auto flex w-full max-w-[210mm] flex-wrap items-center justify-between gap-3 px-5 py-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2.4} />
          Back to portfolio
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
        >
          <Printer className="h-4 w-4" strokeWidth={2.4} />
          Print / Save as PDF
        </button>
      </div>

      <article className="resume-sheet mx-auto my-4 rounded-3xl print:rounded-none">
        <header className="border-b-2 border-primary pb-4">
          <h1 className="font-display text-[2.3rem] font-bold uppercase leading-none tracking-tight text-ink">
            {profile.name}
          </h1>
          <p className="mt-2.5 font-display text-base font-semibold text-primary">
            {profile.degree}
          </p>
          <p className="mt-1 text-[0.85rem] text-muted-foreground">
            {profile.institute} · {profile.year} · {profile.graduation}
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[0.85rem] text-foreground">
            <li className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-primary" /> {profile.phone}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Linkedin className="h-3.5 w-3.5 text-primary" /> {profile.linkedin}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Github className="h-3.5 w-3.5 text-primary" /> {profile.github}
            </li>
          </ul>
        </header>

        <Section title="Career Objective">
          <p className="text-[0.87rem] leading-relaxed text-foreground">{objective}</p>
        </Section>

        <Section title="Technical Skills">
          <div className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="print-avoid-break">
                <p className="text-[0.72rem] font-bold uppercase tracking-wide text-primary">
                  {group.title}
                </p>
                <p className="mt-1 text-[0.87rem] leading-snug text-foreground">
                  {group.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Projects">
          <div className="grid gap-3">
            {projects.map((project) => (
              <div key={project.title} className="print-avoid-break border-l-2 border-primary pl-3">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-display text-base font-semibold text-ink">
                    {project.title}
                  </h3>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <p className="mt-1 text-[0.87rem] leading-snug text-foreground">
                  {project.summary}
                </p>
                <p className="mt-1 text-[0.78rem] font-medium text-muted-foreground">
                  {project.stack.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Certifications & Workshops">
          <div className="grid gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div key={cert.title} className="print-avoid-break flex gap-2">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-[0.87rem] leading-snug text-foreground">
                  <span className="font-semibold text-ink">{cert.title}</span> — {cert.detail}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <div className="grid gap-x-6 gap-y-3 sm:grid-cols-3">
          <MiniSection title="Soft Skills" items={softSkills} />
          <MiniSection title="Languages" items={languages} />
          <MiniSection title="Interests" items={interests} />
        </div>
      </article>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="print-avoid-break mt-4">
      <h2 className="font-display text-[0.85rem] font-bold uppercase tracking-[0.14em] text-primary">
        {title}
      </h2>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}

function MiniSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="print-avoid-break mt-4">
      <h2 className="flex items-center gap-1.5 font-display text-[0.85rem] font-bold uppercase tracking-[0.14em] text-primary">
        <Award className="h-4 w-4" />
        {title}
      </h2>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md bg-secondary px-2 py-0.5 text-[0.78rem] font-medium text-secondary-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
