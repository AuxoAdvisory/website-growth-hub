import FadeIn from "@/components/FadeIn";
import { AlertTriangle, Globe, Star } from "lucide-react";

const painPoints = [
  {
    icon: Star,
    title: "Low Google reviews",
    desc: "Your competitors have hundreds of reviews. You have a handful. Customers choose them before they even see your website.",
  },
  {
    icon: Globe,
    title: "Slow website losing patients",
    desc: "If your site takes more than 3 seconds to load on mobile, you're losing clients to the business down the street.",
  },
  {
    icon: AlertTriangle,
    title: "No online booking",
    desc: "Customers want to book at 10pm on a Tuesday. If they can't, they'll find someone who lets them.",
  },
];

const IndustriesSection = () => (
  <section className="section-padding border-t border-border">
    <div className="container-narrow">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">The problem</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Is your practice losing patients to competitors?
          </h2>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {painPoints.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.1}>
            <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <p.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
