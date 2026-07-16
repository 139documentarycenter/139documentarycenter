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
      name: 'text',
      title: 'Text',
      type: 'blockContent',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'About'}
    },
  },
})
