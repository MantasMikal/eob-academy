export default {
  type: "object",
  title: "Mission Statement",
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
};
