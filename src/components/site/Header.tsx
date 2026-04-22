import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

const WHATSAPP = "https://wa.me/919270292020";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-hero/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-1 font-display text-2xl font-bold">
          <span className="text-primary">kid</span>
          <span className="text-foreground">help</span>
          <span className="ml-1 text-2xl">🎈</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-foreground/80 md:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Home</Link>
          <Link to="/services" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Services</Link>
          <Link to="/about" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">About</Link>
          <Link to="/contact" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+919270292020"
            aria-label="Call KidHelp"
            className="hidden h-10 w-10 items-center justify-center rounded-full border-2 border-foreground/10 text-foreground hover:border-primary hover:text-primary transition-colors sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_4px_0_oklch(0.45_0.22_255)] transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_0_0_oklch(0.45_0.22_255)]"
          >
            Book now
          </a>
        </div>
      </div>
    </header>
  );
}
