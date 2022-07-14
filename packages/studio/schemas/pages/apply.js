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
