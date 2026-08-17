import {defineArrayMember, defineField, defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [defineArrayMember({type: 'image', options: {hotspot: true}})],
    }),
    defineField({
      name: 'text1',
      title: 'Text (column 1)',
      type: 'localeBlockContent',
    }),
    defineField({
      name: 'text2',
      title: 'Text (column 2)',
      description: 'Optional. Renders as a second column alongside Text 1 on desktop.',
      type: 'localeBlockContent',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'About'}
    },
  },
})
