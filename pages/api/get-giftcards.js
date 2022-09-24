import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";

const giftcardsQuery = groq`
*[_type == "giftcard"] {
    _id,
    "imageUrl": giftcardImage.asset->url
  } | order(_createdAt desc)
`;

export default async function handler(req, res) {
  const giftcards = await sanityClient.fetch(giftcardsQuery);

  res.status(200).json({ giftcards });
}
