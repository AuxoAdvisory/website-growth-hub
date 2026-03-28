import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Brain, CalendarCheck, Phone, Target, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  { icon: Search, title: "We Find Qualified Leads", desc: "Using advanced scraping and data enrichment tools, we identify local businesses in your target area and industry that match your ideal customer profile." },
  { icon: Brain, title: "AI Scores & Personalises", desc: "Every lead gets an AI-generated relevance score. We then craft a unique, personalised email for each prospect — no cookie-cutter templates." },
  { icon: CalendarCheck, title: "Booked Calls, Delivered", desc: "Interested prospects book directly into your calendar. You show up, have the conversation, and close the deal." },
];

const timeline = [
  { icon: Phone, title: "Onboarding Call", desc: "We define your target area, ideal industries, and messaging tone.", time: "Day 1" },
  { icon: Target, title: "First Leads Scraped & Scored", desc: "Your prospect list is built and AI-scored within 48 hours.", time: "Day 2–3" },
  { icon: CalendarCheck, title: "Emails Go Out", desc: "Personalised outreach starts — replies and booked calls begin rolling in.", time: "Day 4–5" },
  { icon: BarChart3, title: "Weekly Reporting", desc: "You receive a full performance report: opens, replies, booked calls, and optimisations.", time: "Weekly" },
];

const HowItWorks = () => (
  <Layout>
    <section className="bg-hero text-hero-foreground section-padding">
      <div className="container-narrow text-center max-w-3xl mx-auto">
        <FadeIn>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl">How <span className="text-gradient-gold">MedProspect</span> Works</h1>
          <p className="mt-5 text-hero-muted text-lg">From onboarding to booked calls in under a week. Here's the full process.</p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <FadeIn><h2 className="font-display font-extrabold text-3xl text-center text-foreground">The 3-Step Process</h2></FadeIn>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <s.icon className="text-gold" size={32} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold">Step {i + 1}</span>
                <h3 className="font-display font-bold text-xl mt-2 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn><h2 className="font-display font-extrabold text-3xl text-center text-foreground">What Happens After You Sign Up</h2></FadeIn>
        <div className="mt-12 space-y-8">
          {timeline.map((t, i) => (
            <FadeIn key={t.title} delay={i * 0.1}>
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                  <t.icon className="text-gold" size={24} />
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

    <section className="section-padding bg-background text-center">
      <FadeIn>
        <h2 className="font-display font-extrabold text-3xl text-foreground">Ready to Get Started?</h2>
        <Button variant="gold" size="lg" className="mt-8 text-base px-10" asChild>
          <Link to="/contact">Book Your Free Strategy Call <ArrowRight className="ml-1" size={18} /></Link>
        </Button>
      </FadeIn>
    </section>
  </Layout>
);

export default HowItWorks;
