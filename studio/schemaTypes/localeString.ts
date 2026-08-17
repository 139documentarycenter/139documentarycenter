import {defineField, defineType} from 'sanity'

export const localeString = defineType({
  name: 'localeString',
  title: 'Localized string',
  type: 'object',
  fields: [
    defineField({name: 'ru', title: 'Русский', type: 'string'}),
    defineField({name: 'uz', title: "O'zbekcha", type: 'string'}),
    defineField({name: 'en', title: 'English', type: 'string'}),
  ],
})
