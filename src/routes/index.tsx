import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, BadgeIndianRupee, Clock, MapPin, Sparkles, Heart, BookOpen, Palette, Baby, Music } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroTutor from "@/assets/hero-tutor.png";
import heroSitter from "@/assets/hero-sitter.png";
import heroArt from "@/assets/hero-art.png";
import kidsPlaying from "@/assets/kids-playing.jpg";

const WHATSAPP = "https://wa.me/919270292020";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KidHelp — Trusted tutors, sitters & coaches for kids" },
      { name: "description", content: "Verified tutors, babysitters and activity coaches for your children. Fixed prices, on-time, fully background checked. Book on WhatsApp." },
      { property: "og:title", content: "KidHelp — Trusted tutors, sitters & coaches for kids" },
      { property: "og:description", content: "Verified, fixed-price help for parents — tutoring, babysitting, art, music & more." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyUs />
      <Steps />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-peach opacity-50 blur-3xl" aria-hidden />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky opacity-50 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-14 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
            <Sparkles className="h-3.5 w-3.5" /> 100% verified helpers
          </span>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
            Trusted help <br />for parents in{" "}
            <span className="text-primary">Kolhapur</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            KidHelp connects you with verified tutors, babysitters and activity coaches for your children. Safe, reliable and always on time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-[0_5px_0_oklch(0.45_0.22_255)] transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_0_0_oklch(0.45_0.22_255)]"
            >
              Book on WhatsApp
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 bg-white px-7 py-3.5 text-base font-bold text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              How it works
            </a>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[500px]">
          <img src={heroTutor} alt="Smiling tutor with a book" width={768} height={896}
            className="absolute left-0 top-4 h-[70%] w-auto drop-shadow-2xl" />
          <img src={heroSitter} alt="Babysitter with happy children" width={768} height={896} loading="lazy"
            className="absolute right-0 bottom-0 h-[60%] w-auto drop-shadow-2xl" />
          <img src={heroArt} alt="Art teacher with palette" width={768} height={896} loading="lazy"
            className="absolute right-12 top-0 h-[45%] w-auto drop-shadow-xl" />
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: ShieldCheck, title: "100% Verified Helpers", desc: "Every tutor and sitter passes a strict background check & police verification. Your child's safety is our promise.", tint: "bg-mint", iconBg: "bg-white text-mint-foreground" },
  { icon: BadgeIndianRupee, title: "Fixed Rates. No Bargaining.", desc: "The price you see is the price you pay. No hidden costs, no last-minute demands, no haggling.", tint: "bg-peach", iconBg: "bg-white text-peach-foreground" },
  { icon: MapPin, title: "Serving Entire Kolhapur", desc: "From Rajarampuri to Kasba Bawda — wherever you live in the city, we are just a tap away.", tint: "bg-sky", iconBg: "bg-white text-sky-foreground" },
  { icon: Clock, title: "On-Time, Every Time", desc: "Stop waiting. You pick the time slot, and our helpers arrive at your door on the dot.", tint: "bg-lavender", iconBg: "bg-white text-lavender-foreground" },
];

function WhyUs() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Why parents choose us</h2>
          <p className="mt-4 text-muted-foreground">Built around the only thing that matters — your children's well-being.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className={`${f.tint} rounded-3xl p-7 transition-transform hover:-translate-y-1`}>
              <div className={`${f.iconBg} flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm`}>
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-10 rounded-3xl bg-hero p-8 md:grid-cols-2 md:p-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <Heart className="h-3.5 w-3.5" /> Made for Kolhapur families
            </span>
            <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Your own, Kolhapuri kids' helper app!</h3>
            <p className="mt-4 text-muted-foreground">Local tutors, local sitters, local coaches — who understand your child's school, language and routine.</p>
          </div>
          <img src={kidsPlaying} alt="Happy children reading and playing together" width={1280} height={896} loading="lazy"
            className="rounded-2xl object-cover shadow-lg" />
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "1", title: "Pick a service", desc: "Tutoring, babysitting, art, music, sports — choose what your child needs." },
  { n: "2", title: "Choose your time", desc: "Tell us the day and time slot that works best for your family." },
  { n: "3", title: "Verified helper arrives", desc: "A background-checked, friendly helper is at your door — on the dot." },
];

function Steps() {
  return (
    <section id="how-it-works" className="bg-hero py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Get help in 3 easy steps!</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-3xl border-2 border-foreground/10 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary font-display text-2xl font-bold text-primary-foreground shadow-[0_4px_0_oklch(0.45_0.22_255)]">
                {s.n}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: BookOpen, title: "Home Tutoring", desc: "Maths, science & languages — Class 1 to 10.", tint: "bg-mint" },
  { icon: Baby, title: "Babysitting", desc: "Trained sitters for hourly or full-day care.", tint: "bg-peach" },
  { icon: Palette, title: "Art Classes", desc: "Drawing, painting & craft for ages 5-14.", tint: "bg-lavender" },
  { icon: Music, title: "Music Coaching", desc: "Singing, keyboard, guitar — beginner friendly.", tint: "bg-sky" },
];

function Services() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">What we help with</h2>
          <p className="mt-4 text-muted-foreground">Everything your child might need — under one trusted roof.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className={`${s.tint} group rounded-3xl p-7 transition-transform hover:-translate-y-1`}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  { name: "Priya S.", role: "Mum of two, Rajarampuri", text: "The tutor for my son's maths is brilliant — and so polite. Best decision this term." },
  { name: "Rahul J.", role: "Dad, Kasba Bawda", text: "Booked a sitter on a Sunday morning, she arrived exactly on time. Trustworthy and lovely with kids." },
  { name: "Anita M.", role: "Mum, Kalamba", text: "Fixed prices, no awkward bargaining. Finally a service made for parents." },
];

function Testimonials() {
  return (
    <section className="bg-hero py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Loved by Kolhapuri parents</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-3xl border-2 border-foreground/10 bg-white p-7 shadow-sm">
              <div className="text-2xl text-accent-foreground">★★★★★</div>
              <p className="mt-3 text-foreground/80">"{r.text}"</p>
              <div className="mt-5 font-semibold">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12">
        <h2 className="font-display text-4xl font-bold sm:text-5xl">Ready when you are</h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
          One quick message on WhatsApp and your child's helper is on the way.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-bold text-primary shadow-[0_5px_0_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-transform">
            Book on WhatsApp
          </a>
          <a href="tel:+919270292020"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-base font-bold text-white hover:bg-white/10">
            Call +91 92702 92020
          </a>
        </div>
      </div>
    </section>
  );
}
