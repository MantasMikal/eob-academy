export default {
  name: "sponsor",
  title: "Sponsor",
  type: "document",
  liveEdit: true,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: 'string',
      options: {
        list: [
          { title: "Student Voices", value: "student-voices" },
          {
            title: "Parent and Career Voices",
            value: "parent-and-career-voices",
          },
          { title: "Professional Voices", value: "professional-voices" },
        ],
      },
    },
    {
      name: "url",
      title: "URL",
      type: "string",
    },
    {
      name: "isHidden",
      title: "Hide in Partners & Supporters",
      type: "boolean",
      description:
        "The sponsor will be hidden in the partners & supporters section of the website, but visible in the testimonials section.",
    },
    {
      name: "isPartner",
      title: "Is Partner?",
      type: "boolean",
      description: "The sponsor will appear under 'Partners' across the site.",
    },
    {
      name: "quoteHeading",
      title: "Quote Heading",
      description: "Only sponsors with quotes appear in the slider",
      type: "string",
    },
    {
      name: "quoteBody",
      title: "Quote Body",
      type: "text",
    },
    {
      name: "people",
      title: "People",
      type: "text",
    },
    {
      name: "image",
      title: "Logo",
      description: "Caption is not required.",
      type: "image",
    },
  ],
  preview: {
    select: {
      name: "name",
      image: "image",
    },
    prepare({ name = "Unnamed", image }) {
      return {
        title: name,
        media: image,
      };
    },
  },
};
