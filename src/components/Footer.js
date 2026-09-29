import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "Software", href: "#software" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Smart Automation",
  "Electrical Systems",
  "Solar Energy",
  "HVAC & Plumbing",
  "CCTV & Security",
  "Networking & IPTV",
  "MEPF Systems",
  "Software Development",
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#041426] text-slate-300">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/ricalronics-footer-logo.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#041426]/90" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white">RICALRONICS TECH LTD.</Link>
            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400">
              Integrated engineering and technology solutions for hotels,
              homes, businesses and modern facilities — connecting
              infrastructure, automation, energy, security, networking and
              software.
            </p>
            <p className="mt-6 text-xs text-slate-500">
              Corporate Registration:{" "}
              <span className="font-semibold text-slate-300">
                RC-9225473
              </span>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-white">Company</h3>
            <div className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white">Capabilities</h3>
            <div className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <span key={service} className="text-sm text-slate-400">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-14 grid gap-5 border-y border-white/10 py-7 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="tel:+2349059630783"
            className="text-sm transition hover:text-cyan-400"
          >
            <span className="block text-xs uppercase tracking-wider text-slate-500">
              Telephone
            </span>
            <span className="mt-1 block font-semibold">
              +234 905 963 0783
            </span>
            <span className="mt-1 block font-semibold">
              +234 703 238 7791
            </span>
          </a>
          <a
            href="mailto:ricalronicstech@gmail.com"
            className="text-sm transition hover:text-cyan-400"
          >
            <span className="block text-xs uppercase tracking-wider text-slate-500">
              Email
            </span>
            <span className="mt-1 block font-semibold">
              ricalronicstech@gmail.com
            </span>
          </a>
          <a
            href="https://wa.me/2349059630783"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition hover:text-cyan-400"
          >
            <span className="block text-xs uppercase tracking-wider text-slate-500">
              WhatsApp
            </span>
            <span className="mt-1 block font-semibold">
              Start a conversation →
            </span>
          </a>
          <a
            href="https://www.tiktok.com/@ricalronics1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition hover:text-cyan-400"
          >
            <span className="block text-xs uppercase tracking-wider text-slate-500">
              TikTok
            </span>
            <span className="mt-1 block font-semibold">
              @ricalronics1 →
            </span>
          </a>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-3 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Ricalronics Tech Ltd. All Rights
            Reserved.
          </p>
          <p>Engineering • Automation • Digital Solutions</p>
        </div>
      </div>
    </footer>
  );
}
