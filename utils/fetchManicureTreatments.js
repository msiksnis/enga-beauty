export async function fetchManicureFemale() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-manicure-treatments`
  );

  const data = await res.json();
  const manicureFemale = data.manicureFemale;

  return manicureFemale;
}

export async function fetchManicureMale() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-manicure-treatments`
  );

  const data = await res.json();
  const manicureMale = data.manicureMale;

  return manicureMale;
}
