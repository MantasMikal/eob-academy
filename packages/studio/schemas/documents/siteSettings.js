import { MdSettings } from "react-icons/md";

export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  __experimental_actions: ["update", 'create', 'delete', "publish"],
  icon: MdSettings,
  fields: [
    {
      title: "Open graph",
      name: "openGraph",
      description:
        "These will be the default meta tags on all pages that have not set their own",
      type: "openGraph",
    },
  ],
  preview: {
    prepare({ title = "Site settings" }) {
      return {
        title,
      };
    },
  },
};
