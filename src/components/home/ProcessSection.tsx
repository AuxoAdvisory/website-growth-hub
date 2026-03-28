import FadeIn from "@/components/FadeIn";
import { Search, Mail, CalendarCheck } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "We find your people", desc: "We dig through local business data to build a list of prospects who actually need what you offer." },
  { icon: Mail, num: "02", title: "We write the emails", desc: "Not templates. Every email is written specifically for that person and their business." },
  { icon: CalendarCheck, num: "03", title: "You take the calls", desc: "Interested prospects book a time with you. That's it — you just show up." },
];

const ProcessSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Three steps. No complexity.
          </h2>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <FadeIn key={step.num} delay={i * 0.1}>
            <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <step.icon className="text-primary" size={22} />
              </div>
              <span className="text-xs font-bold text-primary">{step.num}</span>
              <h3 className="text-lg font-bold text-foreground mt-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{step.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
