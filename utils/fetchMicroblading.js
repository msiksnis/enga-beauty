export async function fetchMicroblading() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-microblading`
  );

  const data = await res.json();
  const microblading = data.microblading;

  return microblading;
}
