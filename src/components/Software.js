const softwareServices = [
  {
    number: "01",
    title: "Corporate Websites",
    description:
      "Responsive, professional websites designed for companies, hotels, organisations and service businesses.",
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Custom browser-based applications built around real business workflows and operational requirements.",
  },
  {
    number: "03",
    title: "Business Management Systems",
    description:
      "Digital platforms for inventory, reservations, customer management, operations, reporting and administration.",
  },
  {
    number: "04",
    title: "API & System Integration",
    description:
      "Secure integrations that connect applications, third-party services, payment systems and smart infrastructure.",
  },
  {
    number: "05",
    title: "Dashboards & Analytics",
    description:
      "Management dashboards that provide clear operational information, reporting and system visibility.",
  },
  {
    number: "06",
    title: "Smart Facility Software",
    description:
      "Software interfaces designed to complement hotel automation, energy management, IoT and connected facility systems.",
  },
];

export default function Software() {
  return (
    <section id="software" className="overflow-hidden bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Introduction */}
          <div className="lg:sticky lg:top-32">
            <div className="mb-5 inline-flex rounded-full bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
              Digital Engineering Division
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0b2545] sm:text-4xl">
              Software Built Around
              <span className="block text-cyan-600">
                Real Business Operations.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              Ricalronics combines software development with its engineering
              capabilities to create digital systems that support modern
              businesses and intelligent facilities.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-slate-600">
              From corporate websites and management applications to APIs,
              dashboards and smart-facility interfaces, our goal is to connect
              physical operations with practical digital tools.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-lg bg-[#0b2545] px-6 py-3.5 font-semibold text-white transition hover:bg-cyan-600"
            >
              Discuss a Software Project
            </a>
          </div>

          {/* Services */}
          <div className="grid gap-5 sm:grid-cols-2">
            {softwareServices.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-lg"
              >
                <span className="text-sm font-bold text-cyan-600">
                  {service.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-[#0b2545]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
