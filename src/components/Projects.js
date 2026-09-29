import { client } from "@/sanity/client";
import ProjectsClient from "./ProjectsClient";

export default async function Projects() {
    const projects = await client.fetch(`
    *[_type == "project"] | order(_createdAt desc) {
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
  `, {}, { cache: "no-store" });

    return <ProjectsClient projects={projects} />;
}