import FadeIn from "@/components/FadeIn";

const testimonials = [
  { quote: "We went from 14 reviews to 67 in under two months. New patients now mention our Google listing when they call. I did not have to do anything.", name: "Dr. Sarah M.", title: "Dental Clinic Owner, Markham" },
  { quote: "I was skeptical. The follow-up system alone recovered three clients in the first week who had gone quiet. It paid for itself immediately.", name: "James T.", title: "Physiotherapy Clinic, North York" },
  { quote: "We were missing half our after-hours enquiries. Now every one gets a response within minutes. Our booking rate has noticeably improved.", name: "Priya K.", title: "Specialist Clinic Manager, Vaughan" },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-4">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="text-[16px]" style={{ color: "#F59E0B" }}>★</span>
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section className="section-padding" style={{ backgroundColor: "#F5F4F0" }}>
    <div className="container-narrow">
      <FadeIn>
        <div className="text-center mb-4">
          <span className="inline-block text-[12px] uppercase tracking-[0.05em] rounded-full px-3.5 py-1.5" style={{ backgroundColor: "#EFF6FF", color: "#2563EB", fontWeight: 600 }}>
            What Clients Say
          </span>
        </div>
        <h2 className="text-center text-[28px] md:text-[40px] leading-tight" style={{ color: "#111827", fontWeight: 800 }}>
          From the people we work with.
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="rounded-xl h-full flex flex-col" style={{ backgroundColor: "#FFFFFF", boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)", padding: "32px" }}>
              <Stars />
              <p className="text-[16px] leading-[1.75] flex-1 mb-5 italic" style={{ color: "#111827", fontWeight: 400 }}>"{t.quote}"</p>
              <div>
                <p className="text-[14px]" style={{ color: "#111827", fontWeight: 700 }}>{t.name}</p>
                <p className="text-[13px] mt-1" style={{ color: "#9CA3AF" }}>{t.title}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
