export default {
  name: "giftcard",
  title: "Giftcard",
  type: "document",
  fields: [
    {
      name: "giftcardImage",
      title: "Giftcard's Image",
      type: "image",
      options: {
        hotspot: false,
      },
    },
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
  ],
};
