export async function fetchPedicureFemale() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-pedicure-treatments`
  );

  const data = await res.json();
  const pedicureFemale = data.pedicureFemale;

  return pedicureFemale;
}

export async function fetchPedicureMale() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-pedicure-treatments`
  );

  const data = await res.json();
  const pedicureMale = data.pedicureMale;

  return pedicureMale;
}
