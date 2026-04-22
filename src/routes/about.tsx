import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
const kidsPlaying = "/assets/kids-playing.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About KidHelp — Our promise to parents" },
      { name: "description", content: "KidHelp is a Kolhapur-based service connecting parents with verified tutors, sitters and coaches. Our story and our promise." },
      { property: "og:title", content: "About KidHelp — Our promise to parents" },
      { property: "og:description", content: "Built by parents, for parents. Verified helpers, fixed prices, total peace of mind." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-hero py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="font-display text-5xl font-bold sm:text-6xl">Built by parents, <br /><span className="text-primary">for parents</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            We started KidHelp because finding a trustworthy person to spend time with our own children was the hardest thing about being parents in a busy city.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center">
          <img src={kidsPlaying} alt="Children learning together" width={1280} height={896} loading="lazy"
            className="rounded-3xl shadow-lg" />
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Our promise</h2>
            <ul className="mt-6 space-y-4 text-foreground/80">
              <li className="flex gap-3"><span className="text-primary font-bold">✓</span> Every helper is police-verified and reference-checked.</li>
              <li className="flex gap-3"><span className="text-primary font-bold">✓</span> Fixed, transparent prices — never any bargaining.</li>
              <li className="flex gap-3"><span className="text-primary font-bold">✓</span> Helpers trained to work with children kindly and safely.</li>
              <li className="flex gap-3"><span className="text-primary font-bold">✓</span> A real person on WhatsApp to help, every single day.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-hero py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 text-center sm:px-6 sm:grid-cols-3">
          <Stat n="500+" label="Happy families" />
          <Stat n="120+" label="Verified helpers" />
          <Stat n="4.9★" label="Average rating" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="font-display text-5xl font-bold text-primary">{n}</div>
      <div className="mt-2 text-sm font-semibold text-muted-foreground">{label}</div>
    </div>
  );
}
