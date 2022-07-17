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
      type: "object",
      name: "missionStatement",
      fields: [
        {
          title: "Purpose",
          name: "purpose",
          type: "text",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Mission",
          name: "mission",
          type: "text",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Vision",
          name: "vision",
          type: "text",
          validation: (Rule) => Rule.required(),
        },
      ],
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
      type: "object",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'Industry break down page url',
          name: 'url',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Body",
          name: "description",
          type: "blockContent",
        },
      ],
    },
    {
      name: "featuredCourses",
      title: "Featured courses",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "courses",
          title: "Courses",
          type: "array",
          of: [{ type: "reference", to: { type: "course" } }],
          validation: (Rule) => Rule.required(),
        },
      ],
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
