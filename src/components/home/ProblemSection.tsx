import FadeIn from "@/components/FadeIn";

const problems = [
  "Clients search after hours and cannot book — so they book your competitor instead.",
  "Negative reviews sit unanswered for months, costing you new clients before they ever call.",
  "Your Google listing has fewer than 30 reviews — clients skip you for whoever ranks higher.",
  "Happy clients never get asked for a review, so your rating stays flat while others climb.",
  "Your website has not been updated in years and does not work properly on mobile.",
];

const ProblemSection = () => (
  <section className="section-padding" style={{ backgroundColor: "#F5F4F0" }}>
    <div className="container-narrow max-w-[860px]">
      <FadeIn>
        <div className="text-center mb-4">
          <span className="inline-block text-[12px] uppercase tracking-[0.05em] rounded-full px-3.5 py-1.5" style={{ backgroundColor: "#FEF3C7", color: "#D97706", fontWeight: 600 }}>
            The Problem
          </span>
        </div>
        <h2 className="text-center text-[28px] md:text-[40px] leading-tight max-w-[700px] mx-auto" style={{ color: "#111827", fontWeight: 800 }}>
          Most local service businesses are losing new clients every week without knowing it.
        </h2>
      </FadeIn>
      <div className="mt-14">
        {problems.map((p, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div
              className="group py-[24px] pl-0 hover:pl-4 text-[17px] transition-all duration-200 ease-in-out cursor-default flex items-center justify-between"
              style={{ color: "#6B7280", borderBottom: "1px solid #E5E7EB", borderLeftWidth: "0px", borderLeftColor: "transparent" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderLeftWidth = "3px"; e.currentTarget.style.borderLeftColor = "#2563EB"; e.currentTarget.style.color = "#111827"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderLeftWidth = "0px"; e.currentTarget.style.borderLeftColor = "transparent"; e.currentTarget.style.color = "#6B7280"; }}
            >
              <span>{p}</span>
              <span className="ml-4 text-[17px] transition-colors duration-200 shrink-0" style={{ color: "#E5E7EB" }}>
                <span className="group-hover:hidden">→</span>
                <span className="hidden group-hover:inline" style={{ color: "#2563EB" }}>→</span>
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
