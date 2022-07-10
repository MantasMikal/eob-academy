import { FaHashtag } from "react-icons/fa";

/**
 * Category for posts
 */
export default {
  name: "courseCategory",
  title: "Category",
  type: "document",
  icon: FaHashtag,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
