export default {
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    {
      name: "reviewAuthor",
      title: "Author of the review",
      type: "string",
    },
    {
      name: "comment",
      title: "Comment",
      type: "text",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
  ],
};
