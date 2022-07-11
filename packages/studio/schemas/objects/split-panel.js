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
      description: 'Split panel content. Maximum two items',
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
      title: 'Vertical alignment',
      name: 'vAlign',
      type: 'string',
      options: {
        list: [
          {title: 'Top', value: 'top'},
          {title: 'Middle', value: 'center'},
          {title: 'Bottom', value: 'bottom'}
        ],
        layout: 'radio'
      }
    },
    {
      title: "Descripion",
      name: "descripion",
      type: "string",
      description:
        "Optional: Add description to easily remember what is inside the grid. This is for your convenience",
    },
    {
      title: "Center text on small screens",
      name: "centerMobile",
      type: "boolean",
      description:
        "Centers all text on smaller screens",
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
