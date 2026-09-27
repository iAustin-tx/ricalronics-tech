import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Project URL',
      type: 'slug',
      description: 'Click Generate to create the website address for this project.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Service Category',
      type: 'string',
      options: {
        list: [
          'Smart Hotel & Home Automation',
          'HV/LV Electrical Systems',
          'Wired & Wireless Networks',
          'IPTV & Electronic Displays',
          'Hotel Energy Management',
          'Media & Intercom Systems',
          'Smart Solar Energy',
          'Air-Conditioning & HVAC',
          'CCTV & Security Systems',
          'Electric Gates & Fences',
          'Smart Plumbing Systems',
          'Telecom Power Systems',
          'MEPF & Fire Protection',
          'Software Development',
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'string',
      options: {
        list: [
          'Hospitality',
          'Residential',
          'Commercial',
          'Healthcare',
          'Industrial',
          'Other',
        ],
      },
    }),

    defineField({
      name: 'location',
      title: 'Project Location',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      description: 'Upload additional photos showing different stages of the project.',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    defineField({
      name: 'video',
      title: 'Project Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),

    defineField({
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date',
    }),

    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})