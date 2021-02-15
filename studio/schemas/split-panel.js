import { FiGrid } from "react-icons/fi";

export default {
  name: "splitPanel",
  title: "Split Panel",
  type: "object",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "figure" }, { type: "video" }, { type: "contentBlock" }],
      preview: {
        select: {
          image: "content",
        },
        prepare({ image }) {
          return {
            media: image[0],
          };
        },
      },
    },
    {
      title: "Descripion",
      name: "descripion",
      type: "string",
      description:
        "Optional: Add description to easily remember what is inside the grid. This is for your convenience",
    },
    {
      title: "Reverse",
      name: "reverse",
      type: "boolean",
      description:
        "Reverses the content",
    },
  ],
  preview: {
    select: {
      description: "descripion",
    },
    prepare({ description = "Split Panel" }) {
      return {
        title: description,
        media: FiGrid,
      };
    },
  },
};
