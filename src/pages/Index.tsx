import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Stethoscope, Wrench, Zap, Calculator, Scale, Building2,
  SprayCan, Dumbbell, MoreHorizontal, Search, Brain, CalendarCheck,
  Target, Mail, RefreshCw, MessageSquare, BarChart3, Sparkles,
  ArrowRight, Quote,
} from "lucide-react";

const industries = [
  { icon: Stethoscope, label: "Dental & Medical" },
  { icon: Wrench, label: "Plumbing & HVAC" },
  { icon: Zap, label: "Electricians" },
  { icon: Calculator, label: "Accounting" },
  { icon: Scale, label: "Law Firms" },
  { icon: Building2, label: "Real Estate" },
  { icon: SprayCan, label: "Cleaning" },
  { icon: Dumbbell, label: "Gyms & Wellness" },
  { icon: MoreHorizontal, label: "And more" },
];

const steps = [
  { icon: Search, title: "We find your people", desc: "We dig through local business data to build a list of prospects who actually need what you offer." },
  { icon: Brain, title: "We write the emails", desc: "Not templates. Every email is written specifically for that person and their business." },
  { icon: CalendarCheck, title: "You take the calls", desc: "Interested prospects book a time with you. That's it — you just show up." },
];

const features = [
  { icon: Target, title: "Smart lead scoring", desc: "We prioritise the leads most likely to say yes." },
  { icon: Mail, title: "Emails that don't sound like spam", desc: "Each one is written for a real person, not blasted to a list." },
  { icon: RefreshCw, title: "Follow-ups on autopilot", desc: "We keep the conversation going so you don't have to." },
  { icon: MessageSquare, title: "Reply tracking", desc: "You'll know who's interested, who's not, and who unsubscribed." },
  { icon: BarChart3, title: "A dashboard you'll actually check", desc: "Opens, clicks, replies, booked calls — all in one place." },
  { icon: Sparkles, title: "You don't need to touch anything", desc: "Seriously. We handle the whole thing." },
];

const testimonials = [
  { quote: "I was sceptical, but they booked me 6 calls in week one. I've never had leads come to me like that before.", name: "Dr. Sarah M.", role: "Dental Consultant" },
  { quote: "We used to cold-call for hours. Now people are booking time on our calendar. Completely different experience.", name: "Mike T.", role: "HVAC Business Owner" },
  { quote: "The emails they write actually sound like a human wrote them. That's why people reply.", name: "Karen L.", role: "Accounting Firm Partner" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-hero text-hero-foreground section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/30 to-navy opacity-80" />
      <div className="container-narrow relative z-10 max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-gold text-sm font-semibold tracking-wide uppercase mb-6">Auxo Advisory</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Stop chasing clients.{" "}
            <span className="text-gradient-gold">Let them come to you.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg text-hero-muted max-w-xl leading-relaxed">
            We handle the outreach so you can focus on your actual work. Cold emails, follow-ups, booked calls — all done for you.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button variant="gold" size="lg" className="text-base px-8" asChild>
              <Link to="/contact">Let's talk <ArrowRight className="ml-1" size={18} /></Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8" asChild>
              <Link to="/how-it-works">How it works</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* Quick proof */}
    <section className="bg-primary text-primary-foreground py-6">
      <div className="container-narrow px-4 md:px-8 flex flex-wrap justify-center gap-8 text-center text-sm">
        <span><strong className="text-gold text-lg font-display">500+</strong> businesses contacted weekly</span>
        <span><strong className="text-gold text-lg font-display">~5</strong> booked calls per campaign</span>
        <span><strong className="text-gold text-lg font-display">10+</strong> industries</span>
      </div>
    </section>

    {/* Industries — compact, no cards */}
    <section className="section-padding bg-background">
      <div className="container-narrow max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
            Built for local service businesses
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg">
            If you're great at what you do but tired of chasing leads, we're probably a good fit.
          </p>
        </FadeIn>
        <div className="mt-10 flex flex-wrap gap-3">
          {industries.map((ind, i) => (
            <FadeIn key={ind.label} delay={i * 0.03}>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card text-sm font-medium text-card-foreground hover:border-gold/40 transition-colors">
                <ind.icon className="text-gold" size={16} />
                {ind.label}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works — left-aligned, staggered */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">Here's what happens</h2>
        </FadeIn>
        <div className="mt-12 space-y-10">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.1}>
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <step.icon className="text-gold" size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gold">Step {i + 1}</p>
                  <h3 className="font-display font-bold text-xl mt-1 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed max-w-lg">{step.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Features — 2-column, not 3 */}
    <section className="section-padding bg-background">
      <div className="container-narrow max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
            What's included
          </h2>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.06}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center mt-0.5">
                  <f.icon className="text-gold" size={18} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-hero text-hero-foreground">
      <div className="container-narrow max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl">
            Don't take our word for it
          </h2>
        </FadeIn>
        <div className="mt-10 space-y-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="flex gap-5 items-start p-6 rounded-xl bg-navy-light/40 border border-navy-light">
                <Quote className="text-gold flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-hero-muted text-sm leading-relaxed">"{t.quote}"</p>
                  <p className="mt-3 text-sm"><span className="font-semibold text-hero-foreground">{t.name}</span> <span className="text-hero-muted">· {t.role}</span></p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="section-padding bg-background">
      <div className="container-narrow max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
            Interested? Let's have a conversation.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            No commitment, no pressure. Just a quick chat about whether this makes sense for your business.
          </p>
          <Button variant="gold" size="lg" className="mt-8 text-base px-10" asChild>
            <Link to="/contact">Book a free call <ArrowRight className="ml-1" size={18} /></Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Index;
