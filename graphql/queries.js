import { gql } from "@apollo/client";

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
