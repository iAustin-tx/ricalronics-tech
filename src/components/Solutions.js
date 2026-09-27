const solutions = [
  {
    title: "Hospitality",
    description:
      "Integrated hotel automation, IPTV, guest-room controls, networking, energy management, security and facility systems.",
    label: "Hotels & Resorts",
  },
  {
    title: "Residential",
    description:
      "Smart-home automation, solar energy, CCTV, access control, networking, air-conditioning and electrical systems.",
    label: "Homes & Estates",
  },
  {
    title: "Commercial",
    description:
      "Reliable electrical, networking, security, automation and digital infrastructure for modern business facilities.",
    label: "Offices & Businesses",
  },
  {
    title: "Healthcare",
    description:
      "Infrastructure, communication, IPTV, electrical, HVAC and supporting technology solutions for healthcare environments.",
    label: "Hospitals & Clinics",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-[#071b33] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Industries We Serve
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Integrated Solutions for Modern Facilities
          </h2>

          <p className="mt-5 leading-7 text-slate-300">
            Different environments require different combinations of
            infrastructure and technology. We bring those systems together
            around the needs of each facility.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <article
              key={solution.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/50 hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-400">
                    {solution.label}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold">
                    {solution.title}
                  </h3>
                </div>

                <span className="text-3xl font-light text-white/20">
                  0{index + 1}
                </span>
              </div>

              <p className="mt-5 max-w-xl leading-7 text-slate-300">
                {solution.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
