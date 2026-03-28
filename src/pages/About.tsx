import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, User, Eye, TrendingUp, ArrowRight } from "lucide-react";

const values = [
  { icon: Zap, title: "We move fast", desc: "Your campaigns go live in days, not weeks. We don't waste time on long setups." },
  { icon: User, title: "Every email is personal", desc: "We don't do templates. Each email is written for the person reading it." },
  { icon: Eye, title: "You see everything", desc: "No black boxes. You get full visibility into what we're doing and how it's performing." },
  { icon: TrendingUp, title: "Results are all that matter", desc: "We measure success by one thing: booked calls that turn into revenue for you." },
];

const About = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium text-primary mb-3">About us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            We help local businesses get clients without the grind
          </h1>
          <p className="mt-5 text-muted-foreground text-lg">No manual prospecting. No cold calls. Just warm leads on your calendar.</p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Why we started Auxo Advisory</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>We kept meeting people who were brilliant at their work — dentists, plumbers, accountants, lawyers — but struggling to find enough clients.</p>
            <p>So we built something simple: a service that finds the right people, writes them a genuine email, and gets them on your calendar.</p>
            <p>Today we work with businesses across 10+ industries, combining smart lead scoring with outreach that actually sounds like it was written by a person.</p>
          </div>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-4xl mx-auto">
        <FadeIn><h2 className="text-3xl font-extrabold text-foreground mb-10">What we care about</h2></FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.08}>
              <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <v.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-bold text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl font-extrabold text-foreground">Want to work together?</h2>
          <p className="text-muted-foreground mt-3">Let's have a quick conversation. No obligations.</p>
          <Button variant="gold" size="lg" className="mt-8" asChild>
            <Link to="/contact">Book a free call <ArrowRight className="ml-1" size={18} /></Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default About;
