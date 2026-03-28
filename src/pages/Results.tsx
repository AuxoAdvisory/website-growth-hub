import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    industry: "Dental Consulting",
    challenge: "Dr. Sarah was spending 10+ hours a week prospecting manually. Despite being excellent at her job, her calendar was half-empty.",
    solution: "We found 500+ dental practices in her region, scored each one, and launched a personalised 3-step email sequence.",
    result: "8 booked calls in the first 2 weeks. 3 became paying clients within a month.",
    metric: "8 calls / 2 weeks",
  },
  {
    industry: "Plumbing Services",
    challenge: "Mike's company relied on word-of-mouth. Growth had stalled and he wanted commercial contracts.",
    solution: "We targeted property managers and commercial buildings in his area with tailored outreach.",
    result: "3 new commercial contracts in month one — over $12K in new recurring revenue.",
    metric: "3 contracts / month 1",
  },
  {
    industry: "Accounting Firm",
    challenge: "Karen's firm needed clients beyond tax season. They wanted year-round bookkeeping and advisory work.",
    solution: "We identified underserved small businesses in 3 verticals and ran a 4-week campaign.",
    result: "Client base grew 20% in 90 days. Average client value: $8K+.",
    metric: "+20% in 90 days",
  },
];

const Results = () => (
  <Layout>
    <section className="bg-hero text-hero-foreground section-padding">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl">Results</h1>
          <p className="mt-5 text-hero-muted text-lg">Real numbers from real businesses we've worked with.</p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow space-y-10">
        {caseStudies.map((cs, i) => (
          <FadeIn key={cs.industry} delay={i * 0.1}>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="bg-primary text-primary-foreground px-8 py-4 flex items-center justify-between">
                <h3 className="font-display font-bold text-lg">{cs.industry}</h3>
                <div className="flex items-center gap-2 text-gold font-display font-bold text-sm">
                  <TrendingUp size={18} /> {cs.metric}
                </div>
              </div>
              <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold">The problem</span>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold">What we did</span>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold">The outcome</span>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{cs.result}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container-narrow max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="font-display font-extrabold text-3xl text-foreground">Want to see what we can do for you?</h2>
          <Button variant="gold" size="lg" className="mt-8 text-base px-10" asChild>
            <Link to="/contact">Let's talk <ArrowRight className="ml-1" size={18} /></Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Results;
