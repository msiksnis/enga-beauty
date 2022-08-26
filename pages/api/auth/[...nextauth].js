import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hash } from "bcrypt";
import { GraphQLClient } from "graphql-request";
import { GET_NEXT_AUTH_USER_BY_EMAIL } from "../../../graphql/queries";
import { CREATE_NEXT_AUTH_USER_BY_EMAIL } from "../../../graphql/mutations";
import { useMutation, useQuery } from "@apollo/client";

export const client = new GraphQLClient(process.env.ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
});

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      authorize: async ({ email, password }) => {
        const { user } = await client.request(GET_NEXT_AUTH_USER_BY_EMAIL, {
          email,
        });

        if (!user) {
          const { newUser } = await client.request(
            CREATE_NEXT_AUTH_USER_BY_EMAIL,
            {
              email,
              password: await hash(password, 12),
            }
          );

          return {
            id: newUser.id,
            username: email,
            email,
          };
        }

        const isValid = await compare(password, user.password);

        if (!isValid) {
          throw new Error("Wrong credentials. Try again.");
        }

        return {
          id: user.id,
          username: email,
          email,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.userId = token.sub;
      return Promise.resolve(session);
    },
  },
});
