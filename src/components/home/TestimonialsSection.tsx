import FadeIn from "@/components/FadeIn";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "Within two months, our Google reviews doubled and we started getting new patient inquiries every single day. The AI receptionist alone saved our front desk 15 hours a week.",
    name: "Dr. Sarah M.",
    business: "Dental Clinic Owner",
  },
  {
    quote:
      "I was skeptical about AI, but the follow-up system pays for itself. Members who used to ghost after a trial now convert at almost twice the rate — and I barely touch my phone.",
    name: "James T.",
    business: "Gym & Fitness Studio",
  },
  {
    quote:
      "We went from missing half our after-hours calls to capturing every single lead. The booking system and review automation have been a game-changer for our clinic.",
    name: "Priya K.",
    business: "Medical Clinic Manager",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-navy">
    <div className="container-narrow">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            What our clients say
          </h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="max-w-3xl mx-auto px-12">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name}>
                  <div className="rounded-2xl border border-border bg-card p-8 md:p-10 text-center">
                    <div className="flex justify-center gap-1 mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-gold text-gold"
                        />
                      ))}
                    </div>
                    <blockquote className="text-foreground text-lg leading-relaxed italic">
                      "{t.quote}"
                    </blockquote>
                    <div className="mt-6">
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.business}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-border text-muted-foreground hover:text-foreground hover:border-primary" />
            <CarouselNext className="border-border text-muted-foreground hover:text-foreground hover:border-primary" />
          </Carousel>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default TestimonialsSection;
