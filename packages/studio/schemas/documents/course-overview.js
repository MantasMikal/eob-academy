import { FaHashtag } from "react-icons/fa";

/**
 * Category for posts
 */
export default {
  name: "courseOverview",
  title: "Overview",
  type: "document",
  icon: FaHashtag,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
