import { client } from "@/sanity/client";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default async function ProjectDetailsPage({ params }) {
    const { slug } = await params;

    const project = await client.fetch(
        `
      *[_type == "project" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        category,
        sector,
        location,
        description,
        completionDate,
        featured,
        "imageUrl": image.asset->url,
        "gallery": gallery[]{
          "url": asset->url
        },
        "videoUrl": video.asset->url
      }
    `,
        { slug }
    );

    if (!project) {
        notFound();
    }

    return (
        <>
            <Navbar />

        <main className="min-h-screen bg-slate-50 px-6 py-20">
            <div className="mx-auto max-w-5xl">
                <Link
                  href="/#projects"
                  className="mb-8 inline-flex items-center text-sm font-semibold text-slate-500 transition hover:text-cyan-600"
                >
                  ← Back to Projects
                </Link>
                <div className="rounded-3xl bg-[#071b33] px-6 py-12 sm:px-10 sm:py-16">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                      {project.category}
                    </span>

                    {project.sector && (
                      <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300">
                        {project.sector}
                      </span>
                    )}
                  </div>

                  <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                    {project.title}
                  </h1>

                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
                    {project.location && (
                      <p>📍 {project.location}</p>
                    )}

                    {project.completionDate && (
                      <p>
                        📅{" "}
                        {new Date(project.completionDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>

                {project.imageUrl && (
                    <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg">
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            className="object-cover"
                        />
                    </div>
                )}

                <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                    Project Overview
                  </p>

                  <h2 className="mt-3 text-2xl font-bold text-[#0b2545] sm:text-3xl">
                    About This Project
                  </h2>

                  <p className="mt-5 max-w-3xl leading-8 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-8 grid gap-4 border-t border-slate-100 pt-8 sm:grid-cols-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Sector
                      </p>
                      <p className="mt-2 font-semibold text-[#0b2545]">
                        {project.sector || "Not specified"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Location
                      </p>
                      <p className="mt-2 font-semibold capitalize text-[#0b2545]">
                        {project.location || "Not specified"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Completion
                      </p>
                      <p className="mt-2 font-semibold text-[#0b2545]">
                        {project.completionDate
                          ? new Date(project.completionDate).toLocaleDateString()
                          : "Not specified"}
                      </p>
                    </div>
                  </div>
                </section>

                {project.gallery?.length > 0 && (
                    <section className="mt-14">
                        <h2 className="text-2xl font-bold text-[#0b2545]">
                            Project Gallery
                        </h2>

                        <div className="mt-6 grid gap-6 sm:grid-cols-2">
                            {project.gallery.map((image, index) => (
                              <div
                                key={index}
                                className="group overflow-hidden rounded-2xl bg-white shadow-sm"
                              >
                                <div className="relative h-80 w-full overflow-hidden">
                                  <Image
                                    src={image.url}
                                    alt={`${project.title} - ${index + 1}`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                  />
                                </div>

                                <div className="px-5 py-4">
                                  <p className="text-sm font-semibold text-[#0b2545]">
                                    Project Image {index + 1}
                                  </p>
                                </div>
                              </div>
                            ))}
                        </div>
                    </section>
                )}

                {project.videoUrl && (
                    <section className="mt-14">
                        <h2 className="text-2xl font-bold text-[#0b2545]">
                            Project Video
                        </h2>

                        <video
                            controls
                            className="mt-6 w-full rounded-2xl bg-black"
                        >
                            <source src={project.videoUrl} />
                            Your browser does not support video playback.
                        </video>
                    </section>
                )}
            </div>
        </main>

        <Footer />
        <WhatsAppButton />
        </>
    );
}