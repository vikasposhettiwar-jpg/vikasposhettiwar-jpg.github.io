import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import cvAsset from "@/assets/vikasposhettiwar_resume.pdf.asset.json";

const links = [
  { label: "Home", href: "#home" },
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = "text-muted-foreground hover:text-primary";

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-hairline bg-background/95 py-2 shadow-soft backdrop-blur-md"
          : "border-b border-transparent py-4"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5">
        <a
          href="#home"
            className="flex items-center gap-2.5 font-display text-base font-bold tracking-tight text-ink transition-colors"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-soft">
              VP
            </span>
          <span className="hidden sm:inline">Vikas Poshettiwar</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${linkClass}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={cvAsset.url}
            download="Vikas_Poshettiwar_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-amber-foreground shadow-amber transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            <Download className="h-4 w-4" strokeWidth={2.4} />
            Download CV
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-hairline bg-card text-ink transition-colors lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mx-auto mt-2 w-full max-w-6xl px-5 lg:hidden">
          <nav className="grid gap-1 rounded-2xl border border-hairline bg-card p-2 shadow-soft">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary-soft"
              >
                {link.label}
              </a>
            ))}
            <a
              href={cvAsset.url}
              download="Vikas_Poshettiwar_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-amber px-3 py-2.5 text-sm font-semibold text-amber-foreground"
            >
              Download CV
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
