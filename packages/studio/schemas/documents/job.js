import { FiBriefcase } from "react-icons/fi";

export default {
  name: "job",
  title: "Job",
  type: "document",
  icon: FiBriefcase,
  liveEdit: false,
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
      description:
        "Some frontend will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "hidden",
      title: "Is hidden",
      description: "Will not show the post on the website. (The post will still be visible)",
      type: "boolean",
    },
    {
      name: "publishedAt",
      title: "Published at",
      description:
        "You can use this field to schedule post where you show them",
      type: "datetime",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    },
    {
      name: "mainImage",
      description: 'Will be used on thumbnails',
      title: "Main image",
      type: "image",
    },
    {
      name: "headerImage",
      description: 'Will be used on the page header',
      title: "Header image",
      type: "image",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
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
  initialValue: {
    hidden: false
  },
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
