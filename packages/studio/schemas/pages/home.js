import { MdMenu } from "react-icons/md";

export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  icon: MdMenu,
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      type: 'object',
      name: 'missionStatement',
      fields: [
        {
          title: 'Purpose',
          name: 'purpose',
          type: 'text',
        },
        {
          title: 'Mission',
          name: 'mission',
          type: 'text',
        },
        {
          title: 'Vision',
          name: 'vision',
          type: 'text',
        },
      ]
    },
    {
      name: "mainCourses",
      title: "Main courses",
      type: "array",
      of: [{ type: "reference", to: { type: "courseCategory" } }],
    },
    {
      name: "fullTimeCourses",
      title: "Full-time & Short Courses",
      type: "array",
      of: [{ type: "reference", to: { type: "course" } }],
    },
    {
      title: "Open graph",
      name: "openGraph",
      description:
        "SEO Optimisation",
      type: "openGraph",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title = "Home Page" }) {
      return {
        title: title,
      };
    },
  },
};
