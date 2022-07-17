export default {
  name: "industryRole",
  title: "Role",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Icon",
      name: "icon",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Url",
      name: "url",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
