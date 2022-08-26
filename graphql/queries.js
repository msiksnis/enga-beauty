import { gql } from "@apollo/client";

export const GET_NEXT_AUTH_USER_BY_EMAIL = gql`
  query GET_NEXT_AUTH_USER_BY_EMAIL($email: String!) {
    user: nextAuthUser(where: { email: $email }, stage: DRAFT) {
      id
      password
    }
  }
`;

export const GET_USER_PROFILE_BY_ID = gql`
  query GET_USER_PROFILE_BY_ID($id: ID!) {
    user: nextAuthUser(where: { id: $id }) {
      name
      email
      bio
    }
  }
`;

export const TESTIMONIALS = gql`
  query {
    testimonials {
      id
      name
      text
      rating
    }
  }
`;
