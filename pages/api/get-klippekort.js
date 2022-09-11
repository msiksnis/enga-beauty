import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";

const pedicureKlippekortFemaleQuery = groq`
*[_type == "klippekort" && category == "fotpleie" && gender == "dame"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

const pedicureKlippekortMaleQuery = groq`
*[_type == "klippekort" && category == "fotpleie" && gender == "herre"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

const manicureKlippekortFemaleQuery = groq`
*[_type == "klippekort" && category == "håndpleie" && gender == "dame"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

const manicureKlippekortMaleQuery = groq`
*[_type == "klippekort" && category == "håndpleie" && gender == "herre"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

export default async function handler(req, res) {
  const pedicureKlippekortFemale = await sanityClient.fetch(
    pedicureKlippekortFemaleQuery
  );
  const pedicureKlippekortMale = await sanityClient.fetch(
    pedicureKlippekortMaleQuery
  );
  const manicureKlippekortFemale = await sanityClient.fetch(
    manicureKlippekortFemaleQuery
  );
  const manicureKlippekortMale = await sanityClient.fetch(
    manicureKlippekortMaleQuery
  );

  res
    .status(200)
    .json({
      pedicureKlippekortFemale,
      pedicureKlippekortMale,
      manicureKlippekortFemale,
      manicureKlippekortMale,
    });
}
