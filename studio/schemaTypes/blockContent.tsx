import {defineArrayMember, defineType} from 'sanity'

const H1Style = (props: {children?: React.ReactNode}) => (
  <p style={{fontSize: 'inherit', fontWeight: 'bold', margin: 0}}>{props.children}</p>
)

const DividerBlock = () => (
  <div style={{padding: '0.5em 0'}}>
    <hr style={{border: 'none', borderTop: '1px dashed #ccc', margin: 0}} />
  </div>
)

export const blockContent = defineType({
  name: 'blockContent',
  title: 'Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1', component: H1Style},
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
    defineArrayMember({
      type: 'object',
      name: 'divider',
      title: 'Divider',
      fields: [{name: 'isDivider', type: 'boolean', hidden: true, initialValue: true}],
      preview: {
        prepare() {
          return {title: '— Divider —'}
        },
      },
      components: {
        block: DividerBlock,
      },
    }),
  ],
})
