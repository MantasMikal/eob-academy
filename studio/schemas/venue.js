import { FaBuilding } from 'react-icons/fa'
export default {
  name: 'venue',
  title: 'Venue',
  type: 'object',
  icon: FaBuilding,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'location'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title = 'No title' }) {
      return {
        title
      }
    }
  }
}
