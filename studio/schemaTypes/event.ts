import {defineArrayMember, defineField, defineType} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Event date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'reference',
      to: [{type: 'venue'}],
    }),
    defineField({
      name: 'curatedBy',
      title: 'Curated by',
      description: 'Optional',
      type: 'reference',
      to: [{type: 'person'}],
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'person'}]})],
    }),
    defineField({
      name: 'text',
      title: 'Event text',
      type: 'blockContent',
    }),
    defineField({
      name: 'images',
      title: 'Event images',
      type: 'array',
      of: [defineArrayMember({type: 'image', options: {hotspot: true}})],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'images.0',
    },
    prepare({title, date, media}) {
      return {
        title,
        subtitle: date,
        media,
      }
    },
  },
})
