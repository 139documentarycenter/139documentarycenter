import {defineField, defineType} from 'sanity'

export const person = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      description: 'Latin-script transliteration for uz/en; ru holds the original Cyrillic name.',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'name.ru'},
  },
})
