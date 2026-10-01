import { type SchemaTypeDefinition } from "sanity";
import { projectType } from "./project";
import seasonalGreeting from "./seasonalGreeting";

export const schemaTypes: SchemaTypeDefinition[] = [
  projectType,
  seasonalGreeting,
];
