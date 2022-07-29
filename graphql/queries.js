import { gql } from "@apollo/client";

export const Testimonials = gql`
  query {
    testimonials {
      id
      name
      text
      rating
    }
  }
`;
