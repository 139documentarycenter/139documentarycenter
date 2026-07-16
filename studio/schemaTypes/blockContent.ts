import {defineArrayMember, defineType} from 'sanity'

export const blockContent = defineType({
  name: 'blockContent',
  title: 'Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
          {title: 'Underline', value: 'underline'},
        ],
        annotations: [
          {
            name: 'link',
            title: 'Link',
            type: 'object',
            icon: () => '🔗',
            fields: [
              {
                name: 'href',
                title: 'URL',
                type: 'url',
                validation: (rule) =>
                  rule.uri({scheme: ['http', 'https', 'mailto', 'tel']}),
              },
              {
                name: 'blank',
                title: 'Open in new tab',
                type: 'boolean',
                initialValue: true,
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
