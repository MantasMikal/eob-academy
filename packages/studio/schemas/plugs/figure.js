export default {
  name: "figure",
  title: "Figure",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      title: "Alternative text (for screen readers)",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "isZoomable",
      title: "Can be zoomed?",
      type: "boolean",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "maxWidth",
      title: "Maximum width",
      description: "The maximum width of the image in pixels or %, em, vw etc.",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "border",
      title: "Border",
      type: "boolean",
      description:
        "Adds border around the image",
      options: {
        isHighlighted: true,
      },
    },
  ],
  initialValue: {
    isZoomable: false,
  },
};
