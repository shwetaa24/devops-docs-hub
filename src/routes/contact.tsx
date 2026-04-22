import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact KidHelp — Book a helper today" },
      { name: "description", content: "Reach KidHelp on WhatsApp or phone. We're open 7 days a week to help Kolhapuri parents find verified childcare and tutors." },
      { property: "og:title", content: "Contact KidHelp — Book a helper today" },
      { property: "og:description", content: "Open 7 days a week. WhatsApp or call to book a verified helper for your child." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-hero py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="font-display text-5xl font-bold sm:text-6xl">Say <span className="text-primary">hello</span> 👋</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Send us a message on WhatsApp or call — we'll find the right helper for your family within hours.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-5xl gap-5 px-4 sm:grid-cols-2 sm:px-6">
          <a href="https://wa.me/917218834640" target="_blank" rel="noopener noreferrer"
            className="group rounded-3xl bg-mint p-8 transition-transform hover:-translate-y-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
              <MessageCircle className="h-7 w-7 text-mint-foreground" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold">WhatsApp us</h3>
            <p className="mt-2 text-foreground/70">Fastest way. Tell us what you need and we'll match a helper within hours.</p>
            <div className="mt-4 font-bold text-primary">+91 72188 34640 →</div>
          </a>

          <a href="tel:+917218834640"
            className="group rounded-3xl bg-peach p-8 transition-transform hover:-translate-y-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
              <Phone className="h-7 w-7 text-peach-foreground" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold">Call us</h3>
            <p className="mt-2 text-foreground/70">Prefer a chat? We're on the line every day from 8am to 9pm.</p>
            <div className="mt-4 font-bold text-primary">+91 72188 34640 →</div>
          </a>

          <div className="rounded-3xl bg-sky p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
              <MapPin className="h-7 w-7 text-sky-foreground" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold">Where we serve</h3>
            <p className="mt-2 text-foreground/70">All of Kolhapur — Rajarampuri, Kasba Bawda, Kalamba, Peth areas & more.</p>
          </div>

          <div className="rounded-3xl bg-lavender p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
              <Clock className="h-7 w-7 text-lavender-foreground" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold">Hours</h3>
            <p className="mt-2 text-foreground/70">Mon–Sun, 8:00 AM to 9:00 PM. Helpers available across all daytime slots.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
