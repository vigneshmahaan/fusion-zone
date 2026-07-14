import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us · Fusion Shoe Zone" },
      { name: "description", content: "Get in touch with Fusion Shoe Zone & Accessories — store details, hours and support." },
      { property: "og:title", content: "Contact Us · Fusion Shoe Zone" },
      { property: "og:description", content: "We'd love to hear from you. Reach out anytime." },
    ],
  }),
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Please share a bit more").max(1000),
});

function ContactPage() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <PageHeader crumb="Contact" title="Get in touch" subtitle="Questions, orders, or just want to say hi — we're here for you." />

      <Section>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 glass rounded-3xl p-6 sm:p-10 shadow-luxe">
            <h2 className="font-display text-2xl font-bold text-[color:var(--royal)]">Send us a message</h2>
            <p className="text-sm text-muted-foreground mt-1">We reply within 24 hours.</p>
            <form
              className="mt-6 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const parsed = schema.safeParse(Object.fromEntries(fd.entries()));
                if (!parsed.success) {
                  toast.error("Please check the form", { description: parsed.error.issues[0].message });
                  return;
                }
                setLoading(true);
                setTimeout(() => {
                  toast.success("Message sent!", { description: "Thanks — we'll be in touch shortly." });
                  (e.target as HTMLFormElement).reset();
                  setLoading(false);
                }, 700);
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required className="mt-1.5 rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@email.com" required className="mt-1.5 rounded-xl" />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" name="phone" placeholder="+91 98765 43210" className="mt-1.5 rounded-xl" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="How can we help?" required rows={5} className="mt-1.5 rounded-xl" />
              </div>
              <Button disabled={loading} className="gradient-ember text-[color:var(--ember-foreground)] font-semibold rounded-full h-11 mt-2">
                {loading ? "Sending…" : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="glass rounded-3xl p-6">
              <h3 className="font-display text-lg font-semibold text-[color:var(--royal)]">Store details</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-[color:var(--ember)] shrink-0" />24 Fusion Avenue, Fashion District, Mumbai 400001</li>
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-[color:var(--ember)]" />+91 98765 43210</li>
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-[color:var(--ember)]" />hello@fusionshoezone.com</li>
              </ul>
            </div>
            <div className="glass rounded-3xl p-6">
              <h3 className="font-display text-lg font-semibold text-[color:var(--royal)] flex items-center gap-2">
                <Clock className="h-4 w-4 text-[color:var(--ember)]" /> Working hours
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex justify-between"><span>Mon – Fri</span><span className="text-muted-foreground">10:00 – 21:00</span></li>
                <li className="flex justify-between"><span>Saturday</span><span className="text-muted-foreground">10:00 – 22:00</span></li>
                <li className="flex justify-between"><span>Sunday</span><span className="text-muted-foreground">11:00 – 20:00</span></li>
              </ul>
            </div>
            <div className="glass rounded-3xl p-6">
              <h3 className="font-display text-lg font-semibold text-[color:var(--royal)]">Follow us</h3>
              <div className="mt-4 flex gap-2">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social" className="grid h-10 w-10 place-items-center rounded-full gradient-royal text-white hover:scale-110 transition">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl overflow-hidden shadow-luxe">
          <iframe
            title="Store location"
            src="https://www.google.com/maps?q=Mumbai%20Fashion%20District&output=embed"
            className="w-full h-[420px] border-0"
            loading="lazy"
          />
        </div>
      </Section>
    </>
  );
}
