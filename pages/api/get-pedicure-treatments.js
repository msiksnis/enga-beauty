import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";

const pedicureTreatmentsFemaleQuery = groq`
*[_type == "treatment" && category == "fotpleie" && gender == "dame"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

const pedicureTreatmentsMaleQuery = groq`
*[_type == "treatment" && category == "fotpleie" && gender == "herre"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

export default async function handler(req, res) {
  const pedicureFemale = await sanityClient.fetch(
    pedicureTreatmentsFemaleQuery
  );
  const pedicureMale = await sanityClient.fetch(pedicureTreatmentsMaleQuery);

  res.status(200).json({ pedicureFemale, pedicureMale });
}
