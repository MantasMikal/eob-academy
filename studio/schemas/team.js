import { RiTeamLine } from 'react-icons/ri'

export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  icon: RiTeamLine,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Some frontend will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Short description',
      type: 'text'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'location'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'discord',
      title: 'Discord channel URL',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'figure'
    }
  ],
  preview: {
    select: {
      title: 'title',
      image: 'logo'
    },
    prepare ({ title = 'Unnamed', image }) {
      return {
        title: title,
        media: image
      }
    }
  }
}
