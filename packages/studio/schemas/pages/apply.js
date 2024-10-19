export default {
  name: "applyPage",
  title: "Apply Page",
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
      name: "featuredCourses",
      title: "Featured courses",
      type: "featuredCourses",
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
        title: "Apply",
      };
    },
  },
};
