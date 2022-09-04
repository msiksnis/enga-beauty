import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";

const reviewsQuery = groq`
*[_type == "review"] {
    _id,
    ...
  } | order(_createdAt desc)
`;

export default async function handler(req, res) {
  const reviews = await sanityClient.fetch(reviewsQuery);

  res.status(200).json({ reviews });
}
