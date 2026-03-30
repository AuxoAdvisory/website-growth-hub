import FadeIn from "@/components/FadeIn";
import { Search, Wrench, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "We find the problem", desc: "We audit your online presence — reviews, website speed, booking flow, and search rankings — to find exactly where you're losing patients." },
  { icon: Wrench, num: "02", title: "We build the fix", desc: "From AI chatbots to review management to website rebuilds — we deploy the right tools to plug the gaps." },
  { icon: TrendingUp, num: "03", title: "You get more patients", desc: "More bookings, more reviews, more calls. You focus on patient care while we handle the growth." },
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
