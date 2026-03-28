import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    industry: "Dental Consulting",
    challenge: "Dr. Sarah was spending 10+ hours a week manually prospecting. Despite great services, her calendar was half-empty.",
    solution: "We scraped 500+ dental practices in her region, AI-scored each lead, and launched a 3-step personalised email sequence.",
    result: "8 booked strategy calls in the first 2 weeks. 3 converted to paying clients within the first month.",
    metric: "8 calls in 2 weeks",
  },
  {
    industry: "Plumbing Services",
    challenge: "Mike's plumbing company relied entirely on word-of-mouth. Growth had plateaued and he needed commercial contracts.",
    solution: "We targeted property managers, landlords, and commercial buildings in his service area with tailored outreach.",
    result: "3 new commercial contracts signed in month one, adding $12K+ in recurring monthly revenue.",
    metric: "3 contracts in month 1",
  },
  {
    industry: "Accounting Firm",
    challenge: "Karen's firm wanted to expand beyond tax season. They needed year-round bookkeeping and advisory clients.",
    solution: "We identified small businesses in 3 verticals that were underserved by their current accountants, and ran a 4-week campaign.",
    result: "Client base grew by 20% within 90 days. Average client lifetime value: $8,000+.",
    metric: "20% growth in 90 days",
  },
];

const Results = () => (
  <Layout>
    <section className="bg-hero text-hero-foreground section-padding">
      <div className="container-narrow text-center max-w-3xl mx-auto">
        <FadeIn>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl">Real <span className="text-gradient-gold">Results</span> for Real Businesses</h1>
          <p className="mt-5 text-hero-muted text-lg">See how local service businesses are growing with Auxo Advisory.</p>
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
                  <span className="text-xs font-bold uppercase tracking-wider text-gold">Challenge</span>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold">What We Did</span>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold">Results</span>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{cs.result}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>

    <section className="section-padding bg-secondary text-center">
      <FadeIn>
        <h2 className="font-display font-extrabold text-3xl text-foreground">Want Results Like These?</h2>
        <Button variant="gold" size="lg" className="mt-8 text-base px-10" asChild>
          <Link to="/contact">Book Your Free Strategy Call <ArrowRight className="ml-1" size={18} /></Link>
        </Button>
      </FadeIn>
    </section>
  </Layout>
);

export default Results;
