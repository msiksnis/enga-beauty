export default function Table({ treatment, price }) {
  return (
    <table className="w-full mt-2">
      <tbody>
        <tr className="md:mx-10 lg:mx-0 flex justify-between mx-6">
          <td className="poppins font-normal">{treatment}</td>
          <td className="poppins flex items-end ml-2 font-normal">{price}kr</td>
        </tr>
      </tbody>
    </table>
  );
}
