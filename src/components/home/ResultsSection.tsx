import FadeIn from "@/components/FadeIn";

const results = [
  { number: "23 → 67", label: "Google reviews", desc: "Dental practice in Markham. 6 weeks after launching review management." },
  { number: "31%", label: "Reduction in no-shows", desc: "Specialist clinic in Richmond Hill. First month after implementing automated reminders." },
  { number: "40+", label: "Additional appointments in month one", desc: "Service business in Mississauga. Added online booking to their Google listing and website." },
];

const ResultsSection = () => (
  <section className="section-padding" style={{ backgroundColor: "#FAFAFA" }}>
    <div className="container-narrow">
      <FadeIn>
        <div className="text-center mb-4">
          <span className="inline-block text-[12px] uppercase tracking-[0.05em] rounded-full px-3.5 py-1.5" style={{ backgroundColor: "#EFF6FF", color: "#2563EB", fontWeight: 600 }}>
            Results
          </span>
        </div>
        <h2 className="text-center text-[28px] md:text-[40px] leading-tight" style={{ color: "#111827", fontWeight: 800 }}>
          Specific outcomes. Not vague promises.
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
        {results.map((r, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="rounded-xl" style={{ backgroundColor: "#EFF6FF", border: "1px solid #BFDBFE", padding: "36px 28px" }}>
              <p className="text-[42px] mb-2" style={{ color: "#2563EB", fontWeight: 800 }}>{r.number}</p>
              <p className="text-[14px] mb-2" style={{ color: "#111827", fontWeight: 600 }}>{r.label}</p>
              <p className="text-[14px] leading-[1.5]" style={{ color: "#6B7280" }}>{r.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
