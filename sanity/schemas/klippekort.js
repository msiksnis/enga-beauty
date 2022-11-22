export default {
  name: "klippekort",
  title: "Klippekort",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().warning("Required field"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().warning("Required field"),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().warning("Required field"),
    },
    {
      name: "directLink",
      title: "Direct Purchase Link",
      type: "string",
    },
    {
      name: "shortDescription",
      title: "Short description",
      type: "string",
    },
    {
      name: "fullDescription",
      title: "Full description",
      type: "text",
    },
    {
      name: "gender",
      title: "Gender",
      type: "string",
      options: {
        list: [
          { title: "Dame", value: "dame" },
          { title: "Herre", value: "herre" },
          { title: "Unisex", value: "unisex" },
        ], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
      },
      validation: (Rule) => Rule.required().warning("Required field"),
    },
    {
      name: "promotedTreatment",
      title: "Promoted Treatment",
      description: "Toggle to promote this treatment",
      type: "boolean",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Fotpleie", value: "fotpleie" },
          { title: "Håndpleie", value: "håndpleie" },
          { title: "Vipper og Bryn", value: "vipperOgBryn" },
        ], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
      },
      validation: (Rule) => Rule.required().warning("Required field"),
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
  ],
};
