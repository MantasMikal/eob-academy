import { MdMenu } from 'react-icons/md'

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: MdMenu,
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      description: 'Extra sections for the homepage',
      of: [{ type: 'section' }]
    },
    {
      name: 'aboutSection',
      title: 'About Section',
      type: 'array',
      of: [{ type: 'card' }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title = 'Home Page' }) {
      return {
        title: title
      }
    }
  }
}
