import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import cropImage from "@/assets/project-crop.jpg";
import gestureImage from "@/assets/project-gesture.jpg";
import webImage from "@/assets/project-web.jpg";
import { projects } from "@/lib/resume-data";
import { LoopSquiggle } from "./decorations";

const images: Record<string, string> = {
  crop: cropImage,
  gesture: gestureImage,
  web: webImage,
};

const filters = ["All", "Machine Learning", "Computer Vision", "Full Stack"];

export function Work() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="relative bg-secondary/60 py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Portfolio
            </p>
            <h2 className="mt-3 text-balance-tight font-display text-3xl font-bold text-ink sm:text-4xl">
              Projects I&rsquo;ve built
            </h2>
            <LoopSquiggle className="mt-4 h-5 w-40 text-amber" />
          </div>

          <div className="no-print flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={active === filter}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-200 ${
                  active === filter
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "border border-hairline bg-card text-muted-foreground hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <article
              key={project.title}
              className="print-avoid-break group flex flex-col overflow-hidden rounded-3xl border border-hairline bg-card shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden bg-primary-soft">
                <img
                  src={images[project.image]}
                  alt={`${project.title} illustration`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-primary-soft px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-lavender-foreground">
                    {project.category}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-primary/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2.4}
                  />
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2 border-t border-hairline pt-4">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-secondary px-2.5 py-1 text-[0.7rem] font-medium text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
