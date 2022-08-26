import { gql } from "graphql-request";
import { getSession } from "next-auth/react";
import { UPDATE_NEXT_AUTH_USER } from "../../graphql/mutations";
import { client } from "./auth/[...nextauth]";

export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    const { name, bio } = JSON.parse(req.body);

    const { user } = await client.request(UPDATE_NEXT_AUTH_USER, {
      userId: session.userId,
      name,
      bio,
    });

    res.json(user);
  } else {
    res.send({
      error: "You must be sign in to update your account.",
    });
  }
};
