import { MdApps } from "react-icons/md";

export default {
  name: "category",
  title: "Category",
  type: "document",
  icon: MdApps,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "color",
      type: "color",
      title: "Choose badge color"
    }
  ]
};
