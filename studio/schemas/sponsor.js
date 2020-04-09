export default {
  name: "sponsor",
  title: "Sponsor",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string'
    },
    {
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
    },
    {
      name: "qouteHeading",
      title: "Qoute Heading",
      description: "Only sponsors with qoutes appear in the slider",
      type: "string"
    },
    {
      name: "qouteBody",
      title: "Qoute Body",
      type: "text"
    },
    {
      name: "image",
      title: "Logo",
      description: "Caption is not required.",
      type: "figure"
    }
  ],
  preview: {
    select: {
      name: "name",
      image: "image"
    },
    prepare({ name = "Unnamed", image }) {
      return {
        title: name,
        media: image
      };
    }
  }
};
