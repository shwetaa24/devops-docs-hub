import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact DevOps Docs Hub" },
      { name: "description", content: "Get in touch with the DevOps Docs Hub team for documentation support and inquiries." },
      { property: "og:title", content: "Contact DevOps Docs Hub" },
      { property: "og:description", content: "Questions about our infrastructure guides? We're here to help." },
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
          <h1 className="font-display text-5xl font-bold sm:text-6xl">Get in <span className="text-primary">touch</span></h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Have questions about our documentation or want to contribute? Reach out to us.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-5xl gap-5 px-4 sm:grid-cols-2 sm:px-6">
          <div className="rounded-3xl bg-mint p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
              <MessageCircle className="h-7 w-7 text-mint-foreground" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold">WhatsApp us</h3>
            <p className="mt-2 text-foreground/70">Connect with us for any queries or to book a helper instantly.</p>
          </div>

          <div className="rounded-3xl bg-peach p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
              <Phone className="h-7 w-7 text-peach-foreground" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold">Call us</h3>
            <p className="mt-2 text-foreground/70">Our team is available every day to assist you with your needs.</p>
          </div>

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
