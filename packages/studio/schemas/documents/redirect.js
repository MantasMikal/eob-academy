import { FaLink } from "react-icons/fa";
export default {
  name: "redirect",
  title: "Redirect",
  type: "document",
  icon: FaLink,
  fields: [
    {
      name: "from",
      title: "From",
      description: 'Must follow this format: "/path/to/page"',
      type: "string",
    },
    {
      name: "to",
      title: "To",
      description:
        'Must follow this format: "/path/to/page" or "https://example.com"',
      type: "string",
    },
    {
      name: "permanent",
      title: "Permanent",
      description:
        "if true will use the 308 status code which instructs clients/search engines to cache the redirect forever, if false will use the 307 status code which is temporary and is not cached.",
      type: "boolean",
    },
  ],
  initialValue: {
    permanent: false
  },
  preview: {
    select: {
      title: "from",
      to: "to",
    },
    prepare({ title = "No title", to }) {
      return {
        title: `${title} -> ${to}`,
      };
    },
  },
};
