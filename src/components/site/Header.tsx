import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-hero/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-1 font-display text-2xl font-bold">
          <span className="text-primary">devops</span>
          <span className="text-foreground">docs</span>
          <span className="ml-1 text-primary">hub</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-foreground/80 md:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Home</Link>
          <Link to="/services" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Services</Link>
          <Link to="/about" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">About</Link>
          <Link to="/contact" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
