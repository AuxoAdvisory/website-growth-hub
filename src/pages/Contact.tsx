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
      toast.success("Got it! We'll get back to you within 24 hours.");
    }, 1200);
  };

  return (
    <Layout>
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-sm font-medium text-primary mb-3">Contact</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">Let's talk</h1>
            <p className="mt-5 text-muted-foreground text-lg">No sales pitch. Just a straightforward conversation about whether we can help.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn>
            <div className="rounded-2xl border border-border bg-card p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <CalendarCheck className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-xl text-foreground">Pick a time</h3>
              <p className="text-muted-foreground text-sm mt-2 max-w-xs">
                Choose a slot that works for you. We'll talk about your business and whether our service is a good fit.
              </p>
              <div className="mt-6 w-full rounded-xl border border-border bg-secondary p-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Calendar widget</p>
                <p className="text-muted-foreground text-sm mt-2">Your scheduling tool will appear here.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 space-y-5">
              <h3 className="font-bold text-xl text-foreground">Or drop us a message</h3>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required className="mt-1 bg-secondary border-border" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@business.com" required className="mt-1 bg-secondary border-border" />
              </div>
              <div>
                <Label htmlFor="business">Industry</Label>
                <Select>
                  <SelectTrigger className="mt-1 bg-secondary border-border">
                    <SelectValue placeholder="What do you do?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dental">Dental & Medical</SelectItem>
                    <SelectItem value="plumbing">Plumbing & HVAC</SelectItem>
                    <SelectItem value="electrical">Electricians</SelectItem>
                    <SelectItem value="accounting">Accounting</SelectItem>
                    <SelectItem value="legal">Law Firms</SelectItem>
                    <SelectItem value="realestate">Real Estate</SelectItem>
                    <SelectItem value="cleaning">Cleaning</SelectItem>
                    <SelectItem value="fitness">Gyms & Wellness</SelectItem>
                    <SelectItem value="other">Something else</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">What can we help with?</Label>
                <Textarea id="message" placeholder="Tell us a bit about your business..." rows={4} className="mt-1 bg-secondary border-border" />
              </div>
              <Button variant="gold" size="lg" type="submit" className="w-full" disabled={sending}>
                {sending ? "Sending..." : "Send message"}
              </Button>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Shield size={14} />
                We'll respond within 24 hours. No spam, ever.
              </div>
            </form>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
