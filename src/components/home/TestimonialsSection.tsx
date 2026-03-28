import FadeIn from "@/components/FadeIn";
import { Quote } from "lucide-react";

const testimonials = [
  { quote: "I was sceptical, but they booked me 6 calls in week one. I've never had leads come to me like that before.", name: "Dr. Sarah M.", role: "Dental Consultant" },
  { quote: "We used to cold-call for hours. Now people are booking time on our calendar. Completely different experience.", name: "Mike T.", role: "HVAC Business Owner" },
  { quote: "The emails they write actually sound like a human wrote them. That's why people reply.", name: "Karen L.", role: "Accounting Firm Partner" },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            What our clients say
          </h2>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.1}>
            <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition-all">
              <Quote className="text-primary/40 mb-4" size={24} />
              <p className="text-foreground text-sm leading-relaxed">{t.quote}</p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
