export default function About() {
  const strengths = [
    {
      number: "01",
      title: "Integrated Engineering",
      text: "Electrical, mechanical, plumbing, automation, security and digital systems planned as connected infrastructure.",
    },
    {
      number: "02",
      title: "Smart Technology",
      text: "Modern automation, energy management, networking and software technologies built around practical operational needs.",
    },
    {
      number: "03",
      title: "End-to-End Delivery",
      text: "From system planning and installation to configuration, integration, testing and technical support.",
    },
  ];

  return (
    <section id="about" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            About Ricalronics
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0b2545] sm:text-4xl">
            Connecting Engineering Infrastructure With Intelligent Technology
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Ricalronics Tech Ltd. provides engineering and technology
            solutions for hotels, homes, offices, healthcare environments
            and commercial facilities.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Our approach brings physical infrastructure and digital systems
            together—from electrical, HVAC, plumbing and energy systems to
            automation, networking, IPTV, security and custom software.
          </p>

          <div className="mt-8 border-l-4 border-cyan-500 bg-white p-6 shadow-sm">
            <p className="text-lg font-bold text-[#0b2545]">
              Your Desire Must Work.
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Our focus is practical integration: engineering systems that
              work together reliably and technology that makes them easier
              to operate.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {strengths.map((item) => (
            <div
              key={item.number}
              className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0b2545] text-sm font-bold text-cyan-400">
                {item.number}
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#0b2545]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
