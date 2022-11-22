import Card from "./Card";

export default function Giftcards({ giftcards }) {
  return (
    <div className="mt-24 mb-20 grid gap-5 px-4 md:grid-cols-2 lg:mt-52 lg:mb-40 lg:grid-cols-3 lg:px-20">
      {giftcards.map((giftcard) => (
        <Card
          key={giftcard._id}
          image={giftcard.imageUrl}
          title={giftcard.title}
          price={giftcard.price}
          directLink={giftcard.directLink}
        />
      ))}
    </div>
  );
}
