import { MdLibraryBooks } from "react-icons/md";

export default {
  name: "coursesPage",
  title: "Courses",
  type: "document",
  icon: MdLibraryBooks,
  fields: [
    {
      name: "pageTitle",
      title: "Page Title",
      type: "string"
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "logo",
      title: "Logo",
      type: "figure"
    },
    {
      name: "courseList",
      title: "Courses",
      type: "array",
      of: [{ type: "course" }]
    }
  ],
  preview: {
    prepare() {
      return {
        title: "Courses"
      };
    }
  }
};
