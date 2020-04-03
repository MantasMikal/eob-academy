export default {
  type: "object",
  name: "slideshow",
  title: "Slideshow",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title"
    },
    {
      type: "array",
      name: "slides",
      title: "Slides",
      of: [{ type: "figure" }, { type: "contentBlock" }, { type: "video" }, { type: "grid" }],
      options: {
        layout: "grid"
      }
    }
  ]
};
