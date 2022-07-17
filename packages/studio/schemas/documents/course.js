import { FiFileText } from "react-icons/fi";

export default {
  name: "course",
  title: "Course",
  type: "document",
  icon: FiFileText,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      description: "Will be used on the thumbnail and page title",
      title: "Subtitle",
      type: "text",
    },
    {
      name: "category",
      title: "Course category",
      type: "reference",
      to: [{ type: "courseCategory" }],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Some frontend will require a slug to be set to be able to show the post",
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
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "launchDate",
      title: "Launch Date",
      type: "string",
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
    },
    {
      name: "ages",
      title: "Ages",
      type: "string",
    },

    {
      name: "overview",
      title: "Overview",
      type: 'array',
      of: [{ type: "courseOverview" }]
    },
    {
      name: "publishedAt",
      title: "Published at",
      description:
        "You can use this field to schedule post where you show them",
      type: "datetime",
    },
    {
      name: "mainImage",
      description: 'Will be used on thumbnails',
      title: "Main image",
      type: "image",
    },
    {
      name: "heroImage",
      description: 'Will be used on the course page',
      title: "Hero image",
      type: "image",
    },
    {
      title: "Open graph",
      name: "openGraph",
      description:
        "SEO Optimisation",
      type: "openGraph",
    }
  ],
  orderings: [
    {
      title: "Publishing date new–>old",
      name: "publishingDateAsc",
      by: [
        { field: "publishedAt", direction: "asc" },
        { field: "title", direction: "asc" },
      ],
    },
    {
      title: "Publishing date old->new",
      name: "publishingDateDesc",
      by: [
        { field: "publishedAt", direction: "desc" },
        { field: "title", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      image: "mainImage",
    },
    prepare({ title = "No title", publishedAt, image }) {
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
          : "Missing publishing date",
        media: image,
      };
    },
  },
};
