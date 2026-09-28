import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Download, Github, Linkedin, Loader2, Phone, Send } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { profile } from "@/lib/resume-data";
import { DotField, RingShape, Squiggle, StarBurst } from "./decorations";

const EMAILJS_SERVICE_ID = "service_3h3ivxa";
const EMAILJS_TEMPLATE_ID = "template_p0670vu";
const EMAILJS_PUBLIC_KEY = "NsbfDJSZjyAUqk9Nl";

export function Contact() {
  return (
    <footer id="contact" className="relative bg-background pt-8">
      <div className="surface-hero relative overflow-hidden rounded-[2.5rem] px-5 py-16 lg:px-12 lg:py-20">
        <DotField className="dots-light pointer-events-none absolute left-8 top-8 h-24 w-28 opacity-70" />
        <RingShape className="animate-float-soft pointer-events-none absolute -bottom-10 -right-6 h-40 w-40 text-primary-foreground/20" />
        <StarBurst className="pointer-events-none absolute right-1/4 top-10 hidden h-7 w-7 text-amber lg:block" />

        <div className="relative mx-auto w-full max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
            Contact
          </p>
          <h2 className="mt-4 text-balance-tight font-display text-3xl font-bold text-primary-foreground sm:text-5xl">
            Have something in mind? Let&rsquo;s talk.
          </h2>
          <Squiggle className="mx-auto mt-5 h-4 w-44 text-amber" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85">
            I&rsquo;d be glad to hear about an internship, a project, or even an idea you&rsquo;re
            working through. You can call me or reach out on LinkedIn.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-semibold text-amber-foreground shadow-amber transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" strokeWidth={2.4} />
              {profile.phone}
            </a>
            <Link
              to="/resume"
              className="no-print inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-md transition-colors duration-200 hover:bg-primary-foreground/20"
            >
              <Download className="h-4 w-4" strokeWidth={2.4} />
              Download CV
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-primary-foreground/80">
            <li>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary-foreground"
              >
                <Linkedin className="h-4 w-4 text-amber" />
                {profile.linkedin}
              </a>
            </li>
            <li>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary-foreground"
              >
                <Github className="h-4 w-4 text-amber" />
                {profile.github}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.degree}</p>
      </div>
    </footer>
  );
}
