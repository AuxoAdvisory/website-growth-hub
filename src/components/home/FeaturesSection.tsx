import FadeIn from "@/components/FadeIn";
import { Target, Pen, RefreshCw, BarChart3, LayoutDashboard, Shield } from "lucide-react";

const features = [
  { icon: Target, title: "Smart lead scoring", desc: "We prioritise the leads most likely to convert." },
  { icon: Pen, title: "Emails that feel personal", desc: "Each one is written for a real person, not blasted to a list." },
  { icon: RefreshCw, title: "Follow-ups on autopilot", desc: "We keep the conversation going so you don't have to." },
  { icon: BarChart3, title: "Reply tracking", desc: "You'll know who's interested and who's not." },
  { icon: LayoutDashboard, title: "One clear dashboard", desc: "Opens, clicks, replies, booked calls — all visible." },
  { icon: Shield, title: "Fully managed", desc: "We handle everything. You focus on your clients." },
];

const FeaturesSection = () => (
  <section className="section-padding border-t border-border">
    <div className="container-narrow">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">What's included</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Everything you need. Nothing you don't.
          </h2>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <FadeIn key={f.title} delay={i * 0.05}>
            <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="text-primary" size={20} />
              </div>
              <h3 className="text-base font-bold text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
