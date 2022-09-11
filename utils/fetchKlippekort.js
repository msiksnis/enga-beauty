export const fetchKlippekortPedicureFemale = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-klippekort`
  );

  const data = await res.json();
  const klippekortPedicureFemale = data.pedicureKlippekortFemale;

  return klippekortPedicureFemale;
};

export const fetchKlippekortPedicureMale = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-klippekort`
  );

  const data = await res.json();
  const klippekortPedicureMale = data.pedicureKlippekortMale;

  return klippekortPedicureMale;
};

export const fetchKlippekortManicureFemale = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-klippekort`
  );

  const data = await res.json();
  const klippekortManicureFemale = data.manicureKlippekortFemale;

  return klippekortManicureFemale;
};

export const fetchKlippekortManicureMale = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-klippekort`
  );

  const data = await res.json();
  const klippekortManicureMale = data.manicureKlippekortMale;

  return klippekortManicureMale;
};
