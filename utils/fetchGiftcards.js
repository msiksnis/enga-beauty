export async function fetchGiftcards() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-giftcards`
  );

  const data = await res.json();
  const giftcards = data.giftcards;

  return giftcards;
}
