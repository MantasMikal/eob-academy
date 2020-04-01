export default {
  name: "gallery-media",
  title: "Gallery Media",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Not used anywhere (yet). Enter this to find images easier",
      type: "string"
    },
    {
      name: "isFeatured",
      title: "Is Featured",
      description: "Will add to homepage gallery",
      type: "boolean"
    },
    {
      name: "publishedAt",
      title: "Published at",
      description: "You can use this field to schedule post where you show them",
      type: "datetime"
    },

    {
      name: "media",
      title: "Media",
      type: "figure"
    }
  ],
  orderings: [
    {
      title: "Publishing date new–>old",
      name: "publishingDateAsc",
      by: [
        { field: "publishedAt", direction: "asc" },
        { field: "title", direction: "asc" }
      ]
    },
    {
      title: "Publishing date old->new",
      name: "publishingDateDesc",
      by: [
        { field: "publishedAt", direction: "desc" },
        { field: "title", direction: "asc" }
      ]
    }
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      image: "media"
    },
    prepare({ title = "Untitled", publishedAt, image }) {
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
          : "Missing publishing date",
        media: image
      };
    }
  }
};
