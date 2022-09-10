import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";

const lashesQuery = groq`
*[_type == "treatment" && category == "vippe"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

export default async function handler(req, res) {
  const lashes = await sanityClient.fetch(lashesQuery);

  res.status(200).json({ lashes });
}
