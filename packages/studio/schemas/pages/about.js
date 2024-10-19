export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  liveEdit: false,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      title: "Open graph",
      name: "openGraph",
      description:
        "SEO Optimisation",
      type: "openGraph",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "About",
      };
    },
  },
};
