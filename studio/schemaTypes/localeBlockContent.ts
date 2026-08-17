import {defineField, defineType} from 'sanity'

export const localeBlockContent = defineType({
  name: 'localeBlockContent',
  title: 'Localized rich text',
  type: 'object',
  fields: [
    defineField({name: 'ru', title: 'Русский', type: 'blockContent'}),
    defineField({name: 'uz', title: "O'zbekcha", type: 'blockContent'}),
    defineField({name: 'en', title: 'English', type: 'blockContent'}),
  ],
})
