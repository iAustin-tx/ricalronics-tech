import { defineField, defineType } from "sanity";

export default defineType({
  name: "seasonalGreeting",
  title: "Seasonal Greetings",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Greeting Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "message",
      title: "Greeting Message",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "startDate",
      title: "Start Date & Time",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "endDate",
      title: "End Date & Time",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      description:
        "Turn this on to allow the greeting to appear during its scheduled dates.",
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: "title",
      active: "active",
    },

    prepare({ title, active }) {
      return {
        title,
        subtitle: active ? "Active" : "Inactive",
      };
    },
  },
});
