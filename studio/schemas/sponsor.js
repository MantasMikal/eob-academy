// TODO
// There's a typo in quotes

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
      description: "Wether the sponsor should appear under 'Partners' section in the footer",
    },
    {
      name: "qouteHeading",
      title: "Quote Heading",
      description: "Only sponsors with quotes appear in the slider",
      type: "string"
    },
    {
      name: "qouteBody",
      title: "Quote Body",
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