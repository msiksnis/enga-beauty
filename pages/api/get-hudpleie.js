import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";

const hudpleieQuery = groq`
*[_type == "treatment" && category == "hudpleie"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

export default async function handler(req, res) {
  const hudpleie = await sanityClient.fetch(hudpleieQuery);

  res.status(200).json({ hudpleie });
}
