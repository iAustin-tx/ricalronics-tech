"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  "All",
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
];

export default function ProjectsClient({ projects = [] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            Project Portfolio
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#0b2545] sm:text-4xl">
            On-Site Execution Feed
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Explore engineering installations, smart infrastructure and
            digital solutions delivered across our areas of expertise.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${activeCategory === category
                  ? "bg-[#0b2545] text-white shadow-md"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-cyan-400 hover:text-cyan-600"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <p className="font-semibold text-[#0b2545]">
              No projects available in this category yet.
            </p>
          </div>
        )}

        {/* Project cards */}
        {filteredProjects.length > 0 && (
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project._id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Project media */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#071b33] to-[#134074]">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <div className="absolute inset-0 opacity-10">
                        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_#22d3ee_1px,_transparent_1px)] bg-[length:18px_18px]" />
                      </div>

                      <span className="relative text-5xl font-bold text-white/10">
                        R
                      </span>
                    </div>
                  )}

                  <span className="absolute left-4 top-4 rounded-md bg-[#071b33]/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="absolute right-4 top-4 rounded-md bg-cyan-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project information */}
                <div className="p-6">
                  {project.sector && (
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-600">
                      {project.sector}
                    </p>
                  )}

                  <h3 className="mt-2 text-xl font-bold leading-snug text-[#0b2545]">
                    {project.title}
                  </h3>

                  {project.location && (
                    <p className="mt-2 text-sm font-medium text-slate-500">
                      📍 {project.location}
                    </p>
                  )}

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {project.description}
                  </p>

                  {project.completionDate && (
                    <p className="mt-4 text-xs font-medium text-slate-400">
                      Completed:{" "}
                      {new Date(project.completionDate).toLocaleDateString()}
                    </p>
                  )}

                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex text-sm font-bold text-cyan-600 hover:text-cyan-700"
                    >
                      Watch Project Video →
                    </a>
                  )}

                  {project.slug && (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-5 flex w-fit items-center rounded-lg bg-[#0b2545] px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-600"
                    >
                      View Project →
                    </Link>
                  )}
                </div>

                <div className="border-t border-slate-100 px-6 py-4">
                  <p className="text-xs font-medium text-slate-400">
                    ✓ Ricalronics Project Portfolio
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}