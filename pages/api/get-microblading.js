import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";

const microbladingQuery = groq`
*[_type == "treatment" && category == "microblading"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

export default async function handler(req, res) {
  const microblading = await sanityClient.fetch(microbladingQuery);

  res.status(200).json({ microblading });
}
