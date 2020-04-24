export default {
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "description",
      title: "Body",
      type: "blockContent"
    },
    {
      name: "location",
      title: "Location",
      type: "string"
    },
    {
      name: "launchDates",
      title: "Launch Dates",
      type: "array",
      of: [{type: 'string'}]
    },
    {
      name: "duration",
      title: "Duration",
      type: "string"
    },
    {
      name: "ages",
      title: "Ages",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      description: "Caption is not required.",
      type: "figure"
    }
  ],
  preview: {
    select: {
      title: "title",
      image: "image"
    },
    prepare({ title = "Unnamed", image }) {
      return {
        title: title,
        media: image
      };
    }
  }
};
