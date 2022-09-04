export const fetchReviews = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-reviews`
  );

  const data = await res.json();
  const reviews = data.reviews;

  return reviews;
};
