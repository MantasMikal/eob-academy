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
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "departments",
      title: "Departments",
      type: "array",
      of: [{ type: "reference", to: { type: "department" } }],
    },
    // {
    //   name: "teamMembers",
    //   title: "Team Members",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "teamMember" } }],
    // },
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
