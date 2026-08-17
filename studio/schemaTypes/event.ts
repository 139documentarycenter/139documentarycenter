import {defineArrayMember, defineField, defineType} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event title',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Event date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'Used in the URL, e.g. /archive/domashnyaya-rabota',
      type: 'slug',
      options: {source: 'title.ru', maxLength: 96},
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
      name: 'textTitle',
      title: 'Text label',
      description: 'Label shown on the "Text" accordion toggle. Defaults to "Text" if left empty.',
      type: 'localeString',
    }),
    defineField({
      name: 'text',
      title: 'Event text',
      type: 'localeBlockContent',
    }),
    defineField({
      name: 'galleries',
      title: 'Galleries',
      description: 'Named image galleries for this event, in display order (drag to reorder). The first one is treated as the main gallery.',
      type: 'array',
      of: [defineArrayMember({type: 'gallery'})],
    }),
    defineField({
      name: 'additionalTextTitle',
      title: 'Additional text label',
      description: 'Label shown on the "Additional text" accordion toggle. Defaults to "Additional text" if left empty.',
      type: 'localeString',
    }),
    defineField({
      name: 'additionalText',
      title: 'Additional text',
      description: 'Shown under the galleries, in the right-hand column of the event detail page.',
      type: 'localeBlockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title.ru',
      date: 'date',
      media: 'galleries.0.images.0',
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
