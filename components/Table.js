export default function Table({ treatment, price }) {
  return (
    <table className="w-full mt-2">
      <tr className="flex justify-between mx-6 md:mx-0 montserrat font-semibold">
        <td>{treatment}</td>
        <td className="flex items-end font-semibold">{price}kr</td>
      </tr>
    </table>
  );
}
