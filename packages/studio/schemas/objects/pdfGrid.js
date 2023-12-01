export default {
  name: "pdfGrid",
  title: "PDF Grid",
  type: "object",
  fields: [
    {
      title: "PDFs",
      name: "pdfs",
      type: "array",
      of: [{ type: "pdf" }],
    },
  ],
  preview: {
    prepare({ title = "PDF Grid" }) {
      return {
        title,
      };
    },
  },
};
