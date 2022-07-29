export default function TestBanner({ bannerises }) {
  return (
    <div className="mt-44">
      {bannerises.map((banneris) => {
        <div key={banneris.id}>
          <p>{banneris.name}</p>
          <p>{banneris.description}</p>
        </div>;
      })}
    </div>
  );
}
