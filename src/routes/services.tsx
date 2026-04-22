import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BookOpen, Baby, Palette, Music, Dumbbell, Languages, Calculator, Stars } from "lucide-react";

const WHATSAPP = "https://wa.me/919270292020";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services for kids — KidHelp" },
      { name: "description", content: "Tutoring, babysitting, art, music, sports & language classes for children. Verified helpers, fixed rates." },
      { property: "og:title", content: "Services for kids — KidHelp" },
      { property: "og:description", content: "Tutoring, babysitting, art, music & more — verified helpers at fixed rates." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: BookOpen, title: "Home Tutoring", price: "from ₹350/hr", desc: "All boards, Class 1-10. Maths, science, English, Marathi & more.", tint: "bg-mint" },
  { icon: Baby, title: "Babysitting", price: "from ₹200/hr", desc: "Trained, kind sitters for hourly, evening or weekend care.", tint: "bg-peach" },
  { icon: Palette, title: "Art & Craft", price: "from ₹400/session", desc: "Drawing, painting, clay & paper craft — ages 5 to 14.", tint: "bg-lavender" },
  { icon: Music, title: "Music Coaching", price: "from ₹500/session", desc: "Singing, keyboard, guitar — for absolute beginners up.", tint: "bg-sky" },
  { icon: Dumbbell, title: "Sports Coaching", price: "from ₹450/session", desc: "Football, cricket, badminton & general fitness for kids.", tint: "bg-mint" },
  { icon: Languages, title: "Language Classes", price: "from ₹400/hr", desc: "English speaking, French & Sanskrit basics.", tint: "bg-peach" },
  { icon: Calculator, title: "Maths Olympiad", price: "from ₹500/hr", desc: "Specialised coaching for Olympiad and scholarship exams.", tint: "bg-lavender" },
  { icon: Stars, title: "Birthday Party Help", price: "from ₹2000/event", desc: "Hosts, games, magic shows — let parents enjoy the day too.", tint: "bg-sky" },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-hero py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h1 className="font-display text-5xl font-bold sm:text-6xl">Services for your <span className="text-primary">little ones</span></h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Every helper is background-checked, friendly and trained to work with children.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className={`${s.tint} rounded-3xl p-7 transition-transform hover:-translate-y-1`}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm font-bold text-primary">{s.price}</p>
              <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full bg-foreground px-4 py-2 text-xs font-bold text-background hover:bg-primary transition-colors">
                Book on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
