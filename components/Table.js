export default function Table({ treatment, price }) {
  return (
    <table className="mt-2 w-full">
      <div className="border-b border-gray-200/60 py-1">
        <tr className="font-poppins mx-6 flex justify-between md:mx-10 lg:mx-0">
          <td className="font-light">{treatment}</td>
          <td className="ml-2 flex items-end">{price}kr</td>
        </tr>
      </div>
    </table>
  );
}
