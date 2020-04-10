export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'venues',
      title: 'Venues',
      type: 'array',
      of: [{ type: 'venue' }]
    }
  ],
  preview: {
    prepare () {
      return {
        title: 'Contact'
      }
    }
  }
}
