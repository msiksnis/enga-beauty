import { gql } from "@apollo/client";

export const CREATE_TESTIMONIAL = gql`
  mutation CreateTestimonial($name: String!, $text: String!, $rating: Int!) {
    createTestimonial(
      data: {
        name: $name
        text: $text
        rating: $rating
        # status: "Published"
      }
    ) {
      id
      name
      text
      rating
    }
  }
`;
