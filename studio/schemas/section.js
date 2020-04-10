import { TiDocumentText } from 'react-icons/ti'

export default {
    name: 'section',
    title: 'Section',
    type: 'object',
    icon: TiDocumentText,
    liveEdit: false,
    // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
    // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent'
      }
    ]
  }
  