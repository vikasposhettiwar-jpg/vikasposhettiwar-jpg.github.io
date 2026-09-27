import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/site-nav";
import { Hero } from "@/components/site/hero";
import { Expertise } from "@/components/site/expertise";
import { About } from "@/components/site/about";
import { Process } from "@/components/site/process";
import { Work } from "@/components/site/work";
import { Credentials } from "@/components/site/credentials";
import { Contact } from "@/components/site/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vikas Poshettiwar — AI/ML Student & Developer" },
      {
        name: "description",
        content:
          "Portfolio of Vikas Poshettiwar, a third-year Computer Science (AI & ML) student building machine-learning, computer-vision and Django projects.",
      },
      { property: "og:title", content: "Vikas Poshettiwar — AI/ML Student & Developer" },
      {
        property: "og:description",
        content:
          "Machine learning, computer vision and full-stack projects by a third-year CSE (AI & ML) student at Mahatma Gandhi Institute of Technology.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Expertise />
        <About />
        <Process />
        <Work />
        <Credentials />
        <Contact />
      </main>
    </div>
  );
}
