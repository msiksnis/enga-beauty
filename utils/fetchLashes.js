export async function fetchLashes() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-lashes`);

  const data = await res.json();
  const lashes = data.lashes;

  return lashes;
}
