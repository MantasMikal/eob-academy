export default {
  name: "teamPage",
  title: "Team Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: [{ type: "reference", to: { type: "teamMember" } }],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      title: "Open graph",
      name: "openGraph",
      description: "SEO Optimisation",
      type: "openGraph",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Team",
      };
    },
  },
};
