import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";

const browsQuery = groq`
*[_type == "treatment" && category == "bryn"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

export default async function handler(req, res) {
  const brows = await sanityClient.fetch(browsQuery);

  res.status(200).json({ brows });
}
