export default {
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
};
