export default {
  name: "gallery",
  title: "Gallery item",
  type: "document",
  liveEdit: true,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Published at",
      description:
        "You can use this field to schedule post where you show them",
      type: "datetime",
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
  orderings: [
    {
      title: "Publishing date new–>old",
      name: "publishingDateAsc",
      by: [
        { field: "publishedAt", direction: "asc" },
        { field: "title", direction: "asc" },
      ],
    },
    {
      title: "Publishing date old->new",
      name: "publishingDateDesc",
      by: [
        { field: "publishedAt", direction: "desc" },
        { field: "title", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      image: "image",
    },
    prepare({ title = "No title", image }) {
      return {
        title,
        media: image
      };
    },
  },
};
