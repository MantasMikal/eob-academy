export default {
  name: "sponsor",
  title: "Sponsor",
  type: "document",
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
      name: 'isPartner',
      title: 'Is Partner?',
      type: 'boolean',
      description: "The sponsor will appear under 'Partners' across the site.",
    },
    {
      name: "quoteHeading",
      title: "Quote Heading",
      description: "Only sponsors with quotes appear in the slider",
      type: "string"
    },
    {
      name: "quoteBody",
      title: "Quote Body",
      type: "text"
    },
    {
      name: 'people',
      title: 'People',
      type: 'text'
    },
    {
      name: "image",
      title: "Logo",
      description: "Caption is not required.",
      type: "image"
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
