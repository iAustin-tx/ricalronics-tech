import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "po15welx",
  dataset: "production",
  apiVersion: "2026-09-27",
  useCdn: false,
});
