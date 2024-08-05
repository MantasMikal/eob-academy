import { AiOutlineTeam } from "react-icons/ai";

export default {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  icon: AiOutlineTeam,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "linkedIn",
      title: "Linked In",
      type: "string",
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "string",
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "string",
    }
  ],

  preview: {
    select: {
      title: "name",
    },
    prepare({ title = "Team member" }) {
      return {
        title: title,
      };
    },
  },
};
