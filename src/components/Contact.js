"use client";

import { useState } from "react";

const services = [
  "Smart Hotel & Home Automation",
  "HV/LV Electrical Systems",
  "Wired & Wireless Networks",
  "IPTV & Electronic Displays",
  "Hotel Energy Management",
  "Media & Intercom Systems",
  "Smart Solar Energy",
  "Air-Conditioning & HVAC",
  "CCTV & Security Systems",
  "Electric Gates & Fences",
  "Smart Plumbing Systems",
  "Telecom Power Systems",
  "MEPF & Fire Protection",
  "Software Development",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = `
Hello Ricalronics Tech Ltd.

I would like to request a quotation.

Name: ${formData.name}
Company: ${formData.company || "Not provided"}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Project Location: ${formData.location}

Project Details:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/2349059630783?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="bg-[#071b33] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact information */}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Start a Project
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Let&apos;s Build a Solution
              <span className="block text-cyan-400">That Works.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-300">
              Tell us about your engineering, automation, energy, security,
              networking or software requirements and our team can discuss
              the appropriate solution with you.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="tel:+2349059630783"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10 text-xl">
                  ☎
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Call Us
                  </p>
                  <div className="mt-1 space-y-1 font-semibold">
                    <p>+234 905 963 0783</p>
                    <p>+234 703 238 7791</p>
                  </div>
                </div>
              </a>

              <a
                href="mailto:ricalronicstech@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10 text-xl">
                  ✉
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Email
                  </p>
                  <p className="mt-1 break-all font-semibold">
                    ricalronicstech@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/2349059630783"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10 text-xl">
                  💬
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    WhatsApp
                  </p>
                  <p className="mt-1 font-semibold">
                    Chat with Ricalronics
                  </p>
                </div>
              </a>

              <a
                href="https://www.tiktok.com/@ricalronics1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10 text-xl">
                  ♪
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    TikTok
                  </p>
                  <p className="mt-1 font-semibold">@ricalronics1</p>
                </div>
              </a>
            </div>
          </div>

          {/* Quote form */}
          <div className="rounded-3xl bg-white p-7 text-slate-800 shadow-2xl sm:p-9">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-600">
                Request a Quote
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#0b2545]">
                Tell us about your project
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Complete the form and continue your enquiry through WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company / organisation"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Service Required *
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  >
                    <option value="">Select a service</option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Project Location *
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Lekki, Lagos"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Project Details *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you need..."
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#0b2545] px-6 py-4 font-bold text-white transition hover:bg-cyan-600"
              >
                Send Quote Request via WhatsApp →
              </button>

              <p className="text-center text-xs leading-5 text-slate-400">
                Submitting this form opens WhatsApp with your project
                information ready to send.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}