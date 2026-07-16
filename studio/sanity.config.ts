import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: '139documentarycenter',

  projectId: 'jvmgvacm',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Events (Archive)')
              .child(S.documentTypeList('event').title('Events')),
            S.listItem()
              .title('Venues')
              .child(S.documentTypeList('venue').title('Venues')),
            S.listItem()
              .title('People')
              .child(S.documentTypeList('person').title('People')),
            S.divider(),
            S.listItem()
              .title('About')
              .child(S.document().schemaType('about').documentId('about')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
