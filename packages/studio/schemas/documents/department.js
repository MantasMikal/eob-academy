import { FaBuilding } from "react-icons/fa";

/**
 * Department
 */
export default {
  name: "department",
  title: "Department",
  type: "document",
  icon: FaBuilding,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "teamMembers",
      title: "Team members",
      type: "array",
      of: [{ type: "reference", to: { type: "teamMember" } }],
    },
  ],
};
