export default {
  name: 'coursePromoPage',
  title: 'Course Promo Page',
  type: 'document',
  liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'mainImage',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      title: 'PDF',
      name: 'pdf',
      type: 'file',
    },
    {
      title: 'Phone',
      name: 'phone',
      type: 'string',
    },
    {
      title: 'Address',
      name: 'address',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    }
  ],
  preview: {
    prepare () {
      return {
        title: 'Course Promo Page'
      }
    }
  }
}
