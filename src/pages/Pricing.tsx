import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter",
    price: "Custom",
    period: "",
    desc: "Perfect for testing the waters.",
    features: ["1 industry", "100 leads/month", "Personalised emails", "Basic follow-up sequence", "Monthly report", "Email support"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "Custom",
    period: "",
    desc: "Most popular for growing businesses.",
    features: ["Multi-industry targeting", "300 leads/month", "Full follow-up sequences", "Reply & opt-out tracking", "Weekly reports", "Priority support"],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    desc: "For businesses ready to dominate.",
    features: ["Unlimited industries", "1,000+ leads/month", "Advanced AI personalisation", "Custom reporting dashboard", "Dedicated account manager", "Priority support"],
    highlighted: false,
  },
];

const faqs = [
  { q: "What industries do you work with?", a: "We work with any local service business — dental, plumbing, HVAC, electrical, accounting, law firms, real estate, cleaning, gyms, and more." },
  { q: "How quickly will I see results?", a: "Most clients start seeing booked calls within the first 5–7 days of their campaign launching." },
  { q: "Do I need any software or tools?", a: "Nope. We handle everything — from lead sourcing to email delivery. All you need is a calendar and an inbox." },
  { q: "Can I pause or cancel anytime?", a: "Absolutely. There are no long-term contracts. You can pause or cancel at any time with 30 days' notice." },
];

const Pricing = () => (
  <Layout>
    <section className="bg-hero text-hero-foreground section-padding">
      <div className="container-narrow text-center max-w-3xl mx-auto">
        <FadeIn>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl">Simple, Transparent <span className="text-gradient-gold">Pricing</span></h1>
          <p className="mt-5 text-hero-muted text-lg">No hidden fees. No long-term contracts. Contact us to find the right plan for your business.</p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div className={`rounded-2xl p-8 border flex flex-col h-full ${
                plan.highlighted
                  ? "border-gold bg-gold/5 shadow-xl shadow-gold/10 relative"
                  : "border-border bg-card"
              }`}>
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-accent-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display font-bold text-xl text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{plan.desc}</p>
                <div className="mt-6">
                  <span className="font-display font-extrabold text-4xl text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="text-gold flex-shrink-0 mt-0.5" size={16} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.highlighted ? "gold" : "outline"}
                  size="lg"
                  className="mt-8 w-full"
                  asChild
                >
                  <Link to="/contact">Get Started <ArrowRight className="ml-1" size={16} /></Link>
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container-narrow max-w-2xl mx-auto">
        <FadeIn><h2 className="font-display font-extrabold text-3xl text-center text-foreground">Frequently Asked Questions</h2></FadeIn>
        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="font-display font-semibold text-foreground text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Pricing;
