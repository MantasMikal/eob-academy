// TODO
// There's a typo in quotes

export default {
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title = 'Untitled' }) {
      return {
        title: title
      }
    }
  }
}
