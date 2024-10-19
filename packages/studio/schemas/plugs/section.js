import { FaList } from "react-icons/fa";

export default {
  name: "section",
  title: "Section",
  type: "object",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "contentBlock" }, { type: "grid" }],
      preview: {
        prepare() {
          return {
            title: "Content",
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
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title = "Untitled" }) {
      return {
        title,
        media: FaList,
      };
    },
  },
};
