import FadeIn from "@/components/FadeIn";

const services = [
  { title: "Google Review Management", body: "We respond to every review within 24 hours in your voice. We send automated SMS to happy clients requesting reviews. Most businesses double their review count within 60 days." },
  { title: "Online Booking Setup", body: "We implement and connect a booking system to your website and Google listing. Clients book at any hour without calling. You see the appointment in your calendar." },
  { title: "AI Receptionist", body: "An AI system answers after-hours enquiries, qualifies new clients, and captures contact details while you sleep. No missed opportunities." },
  { title: "Automated Client Follow-Up", body: "Automated SMS follow-up sequence for every new enquiry. Clients who go quiet get a timely, personal-feeling message. Conversion rates improve immediately." },
  { title: "No-Show Reminder System", body: "Automated appointment reminders sent 48 hours and 2 hours before each booking. Reduces no-shows by an average of 30 percent." },
  { title: "Website Rebuild", body: "Fast, mobile-first website built to convert visitors into booked clients. Clear CTA. No clutter. Loads in under 2 seconds." },
];

const ServicesSection = () => (
  <section className="section-padding" style={{ backgroundColor: "#F5F4F0" }}>
    <div className="container-narrow">
      <FadeIn>
        <div className="text-center mb-4">
          <span className="inline-block text-[12px] uppercase tracking-[0.05em] rounded-full px-3.5 py-1.5" style={{ backgroundColor: "#EFF6FF", color: "#2563EB", fontWeight: 600 }}>
            What We Fix
          </span>
        </div>
        <h2 className="text-center text-[28px] md:text-[40px] leading-tight" style={{ color: "#111827", fontWeight: 800 }}>
          Six problems. Six systems.<br />One monthly retainer.
        </h2>
        <p className="text-center text-[17px] mt-3 mb-14" style={{ color: "#6B7280" }}>
          Every system is built, managed, and optimised by us. Nothing lands on your team.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
        {services.map((s, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div
              className="rounded-xl h-full transition-all duration-200 cursor-default"
              style={{ backgroundColor: "#FFFFFF", boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)", padding: "32px 28px" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,99,235,0.12)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <h3 className="text-[18px] mb-3" style={{ color: "#111827", fontWeight: 700 }}>{s.title}</h3>
              <p className="text-[15px] leading-[1.6]" style={{ color: "#6B7280" }}>{s.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
