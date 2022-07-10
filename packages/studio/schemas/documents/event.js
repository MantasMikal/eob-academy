import { FaCalendar } from "react-icons/fa";

export default {
  name: "event",
  title: "Event",
  type: "document",
  icon: FaCalendar,
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
      title: "Start date",
      description: "The date this event starts",
      name: "dateFrom",
      type: "date",
    },
    {
      title: "End date",
      description: "The date this event ends",
      name: "dateTo",
      type: "date",
    },
    {
      title: "Time slot",
      description: "The time slot this event takes place. E.g. 16:00 - 17:00",
      name: "timeSlot",
      type: "string",
    },
    {
      name: "isFeatured",
      title: "Is Featured",
      description: "Will add post to the Featured Events widget",
      type: "boolean",
    },
    {
      name: "category",
      title: "Categories",
      description:
        "Can be more than one. First you have to create categories (Sidebar -> Categories)",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
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
      description: "SEO Optimisation",
      type: "openGraph",
    },
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
