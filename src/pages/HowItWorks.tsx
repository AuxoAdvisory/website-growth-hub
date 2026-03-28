import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Brain, CalendarCheck, Phone, Target, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  { icon: Search, title: "We build your prospect list", desc: "We use data tools to find local businesses in your area that match the kind of clients you want. No guesswork." },
  { icon: Brain, title: "We write emails that sound human", desc: "Every email is tailored to the person receiving it. We mention their business, their situation, and why you can help." },
  { icon: CalendarCheck, title: "They book time with you", desc: "When someone's interested, they pick a slot on your calendar. You just show up and have the conversation." },
];

const timeline = [
  { icon: Phone, title: "Quick onboarding call", desc: "We learn about your business, who you want to reach, and how you like to communicate.", time: "Day 1" },
  { icon: Target, title: "Prospect list is ready", desc: "Within a couple of days, we've built and scored your lead list.", time: "Day 2–3" },
  { icon: CalendarCheck, title: "Outreach begins", desc: "Emails start going out. Replies and bookings usually start within 48 hours.", time: "Day 4–5" },
  { icon: BarChart3, title: "You get a weekly update", desc: "A straightforward report showing what's working: opens, replies, and booked calls.", time: "Weekly" },
];

const HowItWorks = () => (
  <Layout>
    <section className="bg-hero text-hero-foreground section-padding">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl">How it works</h1>
          <p className="mt-5 text-hero-muted text-lg">From signup to booked calls, usually within a week. Here's the breakdown.</p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn><h2 className="font-display font-extrabold text-3xl text-foreground">Three steps. That's it.</h2></FadeIn>
        <div className="mt-12 space-y-10">
          {steps.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                  <s.icon className="text-gold" size={26} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold">Step {i + 1}</span>
                  <h3 className="font-display font-bold text-xl mt-1 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed max-w-lg">{s.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn><h2 className="font-display font-extrabold text-3xl text-foreground">After you sign up</h2></FadeIn>
        <div className="mt-10 space-y-8">
          {timeline.map((t, i) => (
            <FadeIn key={t.title} delay={i * 0.1}>
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <t.icon className="text-gold" size={22} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold">{t.time}</span>
                  <h3 className="font-display font-bold text-lg text-foreground mt-1">{t.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="font-display font-extrabold text-3xl text-foreground">Sound like what you need?</h2>
          <p className="text-muted-foreground mt-3">Let's chat. No commitment required.</p>
          <Button variant="gold" size="lg" className="mt-8 text-base px-10" asChild>
            <Link to="/contact">Book a free call <ArrowRight className="ml-1" size={18} /></Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default HowItWorks;
