import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarCheck, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll be in touch within 24 hours.");
    }, 1200);
  };

  return (
    <Layout>
      <section className="bg-hero text-hero-foreground section-padding">
        <div className="container-narrow text-center max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl">Book a <span className="text-gradient-gold">Free Strategy Call</span></h1>
            <p className="mt-5 text-hero-muted text-lg">No pushy sales calls. Just a straightforward conversation about your growth.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calendly Placeholder */}
          <FadeIn>
            <div className="rounded-2xl border border-border bg-secondary p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
              <CalendarCheck className="text-gold mb-4" size={48} />
              <h3 className="font-display font-bold text-xl text-foreground">Schedule a Call</h3>
              <p className="text-muted-foreground text-sm mt-2 max-w-xs">
                Pick a time that works for you. We'll discuss your business, target market, and how we can help fill your calendar.
              </p>
              <div className="mt-6 w-full rounded-xl border border-border bg-card p-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Calendly Widget Placeholder</p>
                <p className="text-muted-foreground text-sm mt-2">Your Calendly embed will appear here.</p>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="font-display font-bold text-xl text-foreground">Or Send Us a Message</h3>
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Smith" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@business.com" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="business">Business Type</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dental">Dental & Medical</SelectItem>
                    <SelectItem value="plumbing">Plumbing & HVAC</SelectItem>
                    <SelectItem value="electrical">Electricians</SelectItem>
                    <SelectItem value="accounting">Accounting & Finance</SelectItem>
                    <SelectItem value="legal">Law Firms</SelectItem>
                    <SelectItem value="realestate">Real Estate</SelectItem>
                    <SelectItem value="cleaning">Cleaning Services</SelectItem>
                    <SelectItem value="fitness">Gyms & Wellness</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your business and goals..." rows={4} className="mt-1" />
              </div>
              <Button variant="gold" size="lg" type="submit" className="w-full" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </Button>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Shield size={14} />
                No pushy sales calls. Just a straightforward conversation about your growth.
              </div>
            </form>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
