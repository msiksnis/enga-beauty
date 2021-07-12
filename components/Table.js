export default function Table({ treatment, price }) {
  return (
    <table className="w-full">
      <tr className="flex justify-between mx-6 md:mx-0 border-b border-gray-200 montserrat">
        <td>{treatment}</td>
        <td className="flex items-end font-medium">{price}kr</td>
      </tr>
    </table>
  );
}
