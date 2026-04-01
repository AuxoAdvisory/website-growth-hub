import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Star, MessageSquare, CalendarCheck, Phone, Globe, BarChart3, FileText, UserCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  { icon: Bot, name: "AI Receptionist Chatbot", desc: "24/7 website chatbot that answers questions, captures leads, and books appointments.", price: "$299/mo" },
  { icon: Star, name: "Google Review Management", desc: "Automated responses to every Google review — positive or negative.", price: "$199/mo" },
  { icon: MessageSquare, name: "Customer Follow-up SMS", desc: "Instant SMS responses to new enquiries within 60 seconds.", price: "$249/mo" },
  { icon: CalendarCheck, name: "Online Booking Integration", desc: "Let clients book appointments any time, without calling.", price: "$149/mo" },
  { icon: Phone, name: "AI Voice Agent", desc: "AI-powered phone answering that books appointments automatically.", price: "$399/mo" },
  { icon: Globe, name: "Website Rebuild", desc: "Fast, mobile-optimised website built to convert visitors into clients.", price: "From $2,500" },
  { icon: BarChart3, name: "Custom Reporting", desc: "Tailored dashboards and reports showing exactly what matters to you.", price: "$149/mo" },
  { icon: FileText, name: "Monthly Performance Reports", desc: "Clear monthly summaries of leads, bookings, and growth metrics.", price: "$99/mo" },
  { icon: UserCheck, name: "Dedicated Account Manager", desc: "A single point of contact who knows your business inside out.", price: "$199/mo" },
];

const faqs = [
  { q: "What kind of businesses do you work with?", a: "Any local service business — dentists, gyms, law firms, trades, salons, accountants, clinics, and more. If you serve local customers, we can help." },
  { q: "How fast will I see results?", a: "Most clients see measurable improvements within the first 2–4 weeks. Chatbots and review management start working immediately after setup." },
  { q: "Do I need to set anything up?", a: "No. We handle the full setup — integrations, configuration, and testing. You just keep running your business." },
  { q: "Can I add or remove services later?", a: "Absolutely. Mix and match as you grow. No penalties for changing your selection." },
  { q: "Can I cancel anytime?", a: "Yes. No long-term contracts. 30 days' notice and you're out." },
];

const Pricing = () => (
  <Layout>
    <section className="section-padding pt-24 md:pt-36">
      <div className="container-narrow max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="text-[11px] font-medium text-accent mb-4 tracking-[0.2em] uppercase font-mono">Pricing</p>
          <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
            Pick what you need.<br className="hidden sm:block" /> Pay for what you use.
          </h1>
          <p className="mt-4 text-muted-foreground text-base max-w-md mx-auto">
            Mix and match services tailored to your business. No bundles, no waste.
          </p>
          <p className="mt-3 text-xs font-mono font-medium text-accent">No contracts · Cancel anytime · Setup included</p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow max-w-3xl mx-auto">
        <div className="space-y-2">
          {services.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.04}>
              <div className="group rounded-lg border border-border bg-card p-4 md:p-5 shadow-sm hover:border-accent/40 hover:shadow-[0_4px_24px_-8px_hsl(226_100%_71%_/_0.12)] transition-all duration-300 flex items-center gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-md bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                  <s.icon className="text-accent" size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">{s.name}</h3>
                  <p className="text-[13px] text-muted-foreground mt-0.5 leading-relaxed truncate md:whitespace-normal">{s.desc}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <span className="text-sm font-semibold text-foreground">{s.price}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-10 text-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_30px_-5px_hsl(226_100%_71%_/_0.3)] hover:shadow-[0_0_40px_-5px_hsl(226_100%_71%_/_0.4)] transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Book a free call
                <ArrowRight className="ml-1" size={14} />
              </Link>
            </Button>
            <p className="mt-3 text-[12px] text-muted-foreground">We'll recommend the right combination for your business.</p>
          </div>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-2xl mx-auto">
        <FadeIn><h2 className="text-2xl font-semibold text-foreground mb-6 tracking-tight">Common questions</h2></FadeIn>
        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="font-medium text-sm text-foreground text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[13px] leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Pricing;
