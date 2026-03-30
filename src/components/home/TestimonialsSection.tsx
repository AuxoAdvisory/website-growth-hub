import FadeIn from "@/components/FadeIn";
import { TrendingUp } from "lucide-react";

const stats = [
  { value: "2.3x", label: "More Google reviews in 60 days" },
  { value: "60s", label: "Average lead follow-up time" },
  { value: "35%", label: "Increase in online bookings" },
  { value: "24/7", label: "AI receptionist availability" },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">Results</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Numbers that speak for themselves
          </h2>
        </div>
      </FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.1}>
            <div className="rounded-2xl border border-border bg-card p-8 text-center hover:border-primary/30 transition-all">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="text-primary" size={20} />
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-gradient-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
