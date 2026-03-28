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
    <section className="bg-hero text-hero-foreground section-padding">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl">About us</h1>
          <p className="mt-5 text-hero-muted text-lg">We help local service businesses get clients without the grind of manual prospecting.</p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-foreground">Why we started Auxo Advisory</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              We kept meeting people who were brilliant at their work — dentists, plumbers, accountants, lawyers — but struggling to find enough clients. They didn't have time for marketing, and hiring a salesperson wasn't realistic.
            </p>
            <p>
              So we built something simple: a service that finds the right people, writes them a genuine email, and gets them on your calendar. You focus on what you're good at. We handle the rest.
            </p>
            <p>
              Today we work with businesses across 10+ industries, combining smart lead scoring with outreach that actually sounds like it was written by a person (because it was, with a bit of AI help).
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container-narrow max-w-4xl mx-auto">
        <FadeIn><h2 className="font-display font-extrabold text-3xl text-foreground">What we care about</h2></FadeIn>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.08}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mt-0.5">
                  <v.icon className="text-gold" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">{v.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{v.desc}</p>
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
          <h2 className="font-display font-extrabold text-3xl text-foreground">Want to work together?</h2>
          <p className="text-muted-foreground mt-3">Let's have a quick conversation. No obligations.</p>
          <Button variant="gold" size="lg" className="mt-8 text-base px-10" asChild>
            <Link to="/contact">Book a free call <ArrowRight className="ml-1" size={18} /></Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default About;
