export default {
  name: "industryRoles",
  title: "Industry roles",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Industry break down page url",
      name: "url",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Body",
      name: "description",
      type: "blockContent",
    },
    {
      title: "Roles",
      name: "roles",
      type: "array",
      of: [{ type: "industryRole" }],
    },
  ],
};
