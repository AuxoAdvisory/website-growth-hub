import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Stethoscope, Wrench, Zap, Calculator, Scale, Building2,
  SprayCan, Dumbbell, MoreHorizontal, Search, Brain, CalendarCheck,
  Target, Mail, RefreshCw, MessageSquare, BarChart3, Sparkles,
  ArrowRight, CheckCircle2, Quote,
} from "lucide-react";

const stats = [
  { value: "500+", label: "Businesses contacted per week" },
  { value: "5 avg", label: "Booked calls per campaign" },
  { value: "10+", label: "Industries served" },
];

const industries = [
  { icon: Stethoscope, label: "Dental & Medical" },
  { icon: Wrench, label: "Plumbing & HVAC" },
  { icon: Zap, label: "Electricians" },
  { icon: Calculator, label: "Accounting & Finance" },
  { icon: Scale, label: "Law Firms" },
  { icon: Building2, label: "Real Estate" },
  { icon: SprayCan, label: "Cleaning Services" },
  { icon: Dumbbell, label: "Gyms & Wellness" },
  { icon: MoreHorizontal, label: "And more..." },
];

const steps = [
  { icon: Search, title: "Find & Scrape", desc: "We find and scrape qualified local businesses in your target area using advanced data tools." },
  { icon: Brain, title: "AI Scores & Writes", desc: "AI scores each lead and writes a personalised email for every prospect — no templates." },
  { icon: CalendarCheck, title: "Calls in Calendar", desc: "Booked calls land directly in your calendar — you just close the deal." },
];

const features = [
  { icon: Target, title: "AI-Powered Lead Scoring", desc: "Every lead is scored based on likelihood to convert." },
  { icon: Mail, title: "Personalised Cold Emails", desc: "Unique, relevant emails written for each prospect at scale." },
  { icon: RefreshCw, title: "Automated Follow-Ups", desc: "Multi-step sequences that keep you top of mind." },
  { icon: MessageSquare, title: "Reply & Opt-Out Tracking", desc: "Real-time tracking of every response and unsubscribe." },
  { icon: BarChart3, title: "Live Campaign Dashboard", desc: "See opens, clicks, replies, and booked calls in real-time." },
  { icon: Sparkles, title: "Zero Tech Skills Needed", desc: "Completely done-for-you — just show up to the calls." },
];

const testimonials = [
  { quote: "MedProspect booked me 6 calls in the first week. I've never had this kind of pipeline before.", name: "Dr. Sarah Mitchell", role: "Dental Consultant" },
  { quote: "We went from cold-calling ourselves to having warm leads show up on our calendar. Game changer.", name: "Mike Torres", role: "HVAC Business Owner" },
  { quote: "The personalised emails actually get replies. Our close rate went through the roof.", name: "Karen Li", role: "Accounting Firm Partner" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-hero text-hero-foreground section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/30 to-navy opacity-80" />
      <div className="container-narrow relative z-10 text-center max-w-4xl mx-auto">
        <FadeIn>
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold/15 text-gold border border-gold/25">
            By Auxo Advisory
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight">
            We Fill Your Calendar With{" "}
            <span className="text-gradient-gold">Ready-To-Buy Clients</span>
            {" "}— You Just Show Up
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-hero-muted max-w-2xl mx-auto leading-relaxed">
            Done-for-you cold outreach for local service businesses. We find, score, and contact your ideal prospects — and deliver booked calls straight to your inbox.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" className="text-base px-8" asChild>
              <Link to="/contact">Book a Free Strategy Call <ArrowRight className="ml-1" size={18} /></Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8" asChild>
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* Social Proof */}
    <section className="bg-primary text-primary-foreground py-8">
      <div className="container-narrow px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display font-extrabold text-3xl text-gold">{s.value}</p>
            <p className="text-sm text-primary-foreground/70 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Industries */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-center text-foreground">
            Industries We Serve
          </h2>
          <p className="text-center text-muted-foreground mt-3 max-w-xl mx-auto">
            From dental offices to law firms, we help local service businesses fill their pipeline.
          </p>
        </FadeIn>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <FadeIn key={ind.label} delay={i * 0.05}>
              <div className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border bg-card hover:shadow-md hover:border-gold/40 transition-all group">
                <ind.icon className="text-gold group-hover:scale-110 transition-transform" size={28} />
                <span className="text-sm font-semibold text-card-foreground text-center">{ind.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-center text-foreground">How It Works</h2>
          <p className="text-center text-muted-foreground mt-3">Three steps to a full pipeline.</p>
        </FadeIn>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <step.icon className="text-gold" size={28} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold">Step {i + 1}</span>
                <h3 className="font-display font-bold text-xl mt-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-center text-foreground">
            Everything You Need to Scale Outreach
          </h2>
        </FadeIn>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.08}>
              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <f.icon className="text-gold" size={20} />
                </div>
                <h3 className="font-display font-bold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-hero text-hero-foreground">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-center">
            What Our Clients Say
          </h2>
        </FadeIn>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="p-6 rounded-xl bg-navy-light/50 border border-navy-light">
                <Quote className="text-gold mb-3" size={24} />
                <p className="text-hero-muted text-sm leading-relaxed italic">"{t.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <CheckCircle2 className="text-gold" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-hero-foreground">{t.name}</p>
                    <p className="text-xs text-hero-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="section-padding bg-background text-center">
      <div className="container-narrow max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
            Ready to Stop Chasing Leads?
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Let us fill your calendar while you focus on what you do best.
          </p>
          <Button variant="gold" size="lg" className="mt-8 text-base px-10" asChild>
            <Link to="/contact">Book a Free Strategy Call <ArrowRight className="ml-1" size={18} /></Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Index;
