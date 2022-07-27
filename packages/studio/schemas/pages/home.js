import { MdMenu } from "react-icons/md";

export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  icon: MdMenu,
  liveEdit: true,
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      type: "missionStatement",
      name: "missionStatement",
      title: "Mission Statement",
    },
    {
      name: "mainCourses",
      title: "Main courses",
      type: "array",
      of: [{ type: "reference", to: { type: "courseCategory" } }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "industryRoles",
      title: "Industry roles",
      type: "industryRoles",
    },
    {
      name: "featuredCourses",
      title: "Featured courses",
      type: "featuredCourses",
    },
    {
      title: "Open graph",
      name: "openGraph",
      description: "SEO Optimisation",
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
