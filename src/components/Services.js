const services = [
  {
    icon: "🏨",
    title: "Smart Hotel & Home Automation",
    description:
      "Integrated automation for lighting, climate, guest-room controls, energy management and connected building systems.",
  },
  {
    icon: "⚡",
    title: "HV/LV Electrical Systems",
    description:
      "Professional high-voltage and low-voltage electrical infrastructure for residential, commercial and hospitality facilities.",
  },
  {
    icon: "🌐",
    title: "Wired & Wireless Networks",
    description:
      "Structured cabling, Wi-Fi networks and communication infrastructure designed for reliable connectivity.",
  },
  {
    icon: "📺",
    title: "IPTV & Electronic Displays",
    description:
      "Interactive IPTV, digital signage and centralized multimedia distribution for hotels, hospitals and businesses.",
  },
  {
    icon: "🔋",
    title: "Hotel Energy Management",
    description:
      "Smart monitoring and control solutions designed to improve energy visibility and operational efficiency.",
  },
  {
    icon: "📡",
    title: "Media & Intercom Systems",
    description:
      "Integrated communication, audio-visual and intercom infrastructure for modern facilities.",
  },
  {
    icon: "☀️",
    title: "Smart Solar Energy",
    description:
      "Solar and intelligent power solutions for homes, hotels, offices and commercial facilities.",
  },
  {
    icon: "❄️",
    title: "Air-Conditioning & HVAC",
    description:
      "Cooling, ventilation and HVAC solutions designed for comfortable and efficient building environments.",
  },
  {
    icon: "📹",
    title: "CCTV & Security Systems",
    description:
      "Video surveillance, security door locks and access-control solutions for improved facility protection.",
  },
  {
    icon: "🚪",
    title: "Electric Gates & Fences",
    description:
      "Automated entrance, perimeter-control and electric-fencing solutions for residential and commercial properties.",
  },
  {
    icon: "🚿",
    title: "Smart Plumbing Systems",
    description:
      "Modern plumbing infrastructure and intelligent water-management solutions for complex facilities.",
  },
  {
    icon: "📶",
    title: "Telecom Power Systems",
    description:
      "Reliable power infrastructure and supporting systems for telecommunications installations.",
  },
  {
    icon: "🔥",
    title: "MEPF & Fire Protection",
    description:
      "Integrated mechanical, electrical, plumbing and fire-protection solutions for modern developments.",
  },
  {
    icon: "💻",
    title: "Software Development",
    description:
      "Custom websites, business applications, management platforms, dashboards and API integrations.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            What We Do
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#0b2545] sm:text-4xl">
            Engineering & Technology Solutions
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            From building infrastructure to intelligent automation and
            software, Ricalronics delivers integrated solutions designed
            around modern residential, hospitality and commercial
            environments.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-2xl">
                {service.icon}
              </div>

              <h3 className="mb-3 text-lg font-bold text-[#0b2545]">
                {service.title}
              </h3>

              <p className="text-sm leading-6 text-slate-500">
                {service.description}
              </p>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition group-hover:gap-3"
              >
                Enquire about service
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
