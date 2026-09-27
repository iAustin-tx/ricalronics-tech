import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071b33] text-white">
      {/* Decorative background */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -bottom-32 left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2">
        {/* Left */}
        <div>
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
            Integrated Engineering & Digital Systems
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Engineering Smarter
            <span className="block text-cyan-400">
              Infrastructure & Technology.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Ricalronics Tech Ltd. delivers integrated electrical, mechanical,
            smart automation, security, networking, energy and software
            solutions for hotels, homes, businesses and modern facilities.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="rounded-lg bg-cyan-500 px-7 py-3.5 text-center font-semibold text-[#071b33] transition hover:bg-cyan-400"
            >
              Request a Quote
            </Link>

            <Link
              href="#services"
              className="rounded-lg border border-white/20 px-7 py-3.5 text-center font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Explore Our Services
            </Link>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-8">
            <div>
              <p className="text-xl font-bold text-cyan-400">MEPF</p>
              <p className="mt-1 text-xs text-slate-400">
                Engineering Systems
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-cyan-400">Smart</p>
              <p className="mt-1 text-xs text-slate-400">
                Automation
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-cyan-400">Digital</p>
              <p className="mt-1 text-xs text-slate-400">
                Software Solutions
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative hidden lg:block">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Integrated Solutions
            </p>

            <div className="space-y-4">
              {[
                "Smart Hotel & Home Automation",
                "Electrical & Solar Energy Systems",
                "HVAC & Smart Plumbing",
                "CCTV, Security & Access Control",
                "Networking, IPTV & Intercom",
                "Custom Software Development",
              ].map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-bold text-cyan-400">
                    ✓
                  </div>

                  <p className="font-medium text-slate-200">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
