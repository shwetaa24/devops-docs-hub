import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-hero">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-1 font-display text-2xl font-bold">
            <span className="text-primary">kid</span>
            <span>help</span>
            <span className="ml-1">🎈</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Verified tutors, babysitters and kids' activity coaches — booked in seconds. Made for parents who care.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Kolhapur, Maharashtra</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} KidHelp. Made with 💛 for parents.
      </div>
    </footer>
  );
}
