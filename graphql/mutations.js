import { gql } from "@apollo/client";

export const CREATE_NEXT_AUTH_USER_BY_EMAIL = gql`
  mutation CREATE_NEXT_AUTH_USER_BY_EMAIL($email: String!, $password: String!) {
    newUser: createNextAuthUser(data: { email: $email, password: $password }) {
      id
    }
  }
`;

export const UPDATE_NEXT_AUTH_USER = gql`
  mutation UPDATE_NEXT_AUTH_USER($userId: ID!, $name: String, $bio: String) {
    user: updateNextAuthUser(
      data: { name: $name, bio: $bio }
      where: { id: $userId }
    ) {
      id
      name
      email
      bio
    }
  }
`;

export const CREATE_TESTIMONIAL = gql`
  mutation CreateTestimonial($name: String!, $text: String!, $rating: Int!) {
    createTestimonial(data: { name: $name, text: $text, rating: $rating }) {
      id
      name
      text
      rating
    }
  }
`;
