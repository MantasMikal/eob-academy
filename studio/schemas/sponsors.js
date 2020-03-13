import { MdGroup } from "react-icons/md";

export default {
  name: "sponsors",
  title: "Sponsors",
  type: "document",
  icon: MdGroup,
  fields: [
    {
      name: "sponsorList",
      title: "Sponsors",
      type: "array",
      of: [{ type: "sponsor" }]
    },
    {
      name: "videos",
      title: "Videos",
      type: "array",
      of: [{ type: "video" }]
    }
  ],
  preview: {
    prepare() {
      return {
        title: "Sponsors"
      };
    }
  }
};
