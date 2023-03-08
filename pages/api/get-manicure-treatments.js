import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";

const manicureTreatmentsFemaleQuery = groq`
*[_type == "treatment" && category == "handpleie" && gender == "dame"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

const manicureTreatmentsMaleQuery = groq`
*[_type == "treatment" && category == "handpleie" && gender == "herre"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

export default async function handler(req, res) {
  const manicureFemale = await sanityClient.fetch(
    manicureTreatmentsFemaleQuery
  );
  const manicureMale = await sanityClient.fetch(manicureTreatmentsMaleQuery);

  res.status(200).json({ manicureFemale, manicureMale });
}
