import { RiTeamLine } from 'react-icons/ri'

export default {
  name: 'teamsPage',
  title: 'Teams',
  type: 'document',
  icon: RiTeamLine,
  fields: [
    {
      name: 'title',
      title: 'Page title',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'teams',
      title: 'Displayed Teams',
      type: 'array',
      of: [{ type: "reference", to: { type: "team" } }]
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare ({ title = 'Untitled' }) {
      return {
        title: title,
        media: RiTeamLine
      }
    }
  }
}
