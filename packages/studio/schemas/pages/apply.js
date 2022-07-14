export default {
  name: "applyPage",
  title: "Apply Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "courses",
      title: "Featured Courses",
      type: "array",
      of: [{ type: "reference", to: { type: "course" } }],
    }
  ],
  preview: {
    prepare() {
      return {
        title: "About",
      };
    },
  },
};
