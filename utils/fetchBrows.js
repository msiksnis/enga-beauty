export async function fetchBrows() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-brows`);

  const data = await res.json();
  const brows = data.brows;

  return brows;
}
