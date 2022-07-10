export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
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
