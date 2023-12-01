import { FaFile } from "react-icons/fa";

/**
 * Files
 */
export default {
  name: "pdf",
  title: "File",
  type: "document",
  icon: FaFile,
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
    {
      name: "pdfAsset",
      type: "file",
      title: "File",
    },
  ],
};
