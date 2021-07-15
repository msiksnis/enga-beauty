export default function Table({ treatment, price }) {
  return (
    <table className="w-full mt-2">
      <tbody>
        <tr className="flex justify-between mx-6 md:mx-10 lg:mx-0">
          <td className="font-normal poppins">{treatment}</td>
          <td className="flex items-end font-normal poppins ml-2">{price}kr</td>
        </tr>
      </tbody>
    </table>
  );
}
