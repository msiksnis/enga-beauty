import { useMutation } from "@apollo/client";
import { CREATE_TESTIMONIAL } from "../../graphql/mutations";
import { TESTIMONIALS } from "../../graphql/queries";
import useForm from "../../lib/useForm";

export default function CreateTestimonial() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    name: "",
    text: "",
    rating: 5,
  });

  const [createTestimonial, { loading, error, data }] = useMutation(
    CREATE_TESTIMONIAL,
    {
      variables: inputs,
      refetchQueries: [{ query: TESTIMONIALS }],
    }
  );

  return (
    <div className="mx-4 mb-40 lg:mx-20 xl:mx-40">
      <div className="font-poppins flex justify-center pb-10 text-2xl">
        Create a New Review
      </div>
      <form
        onSubmit={async (e) => {
          e.preventDefault(), console.log(inputs);
          await createTestimonial();
          clearForm();
        }}
      >
        <fieldset disabled={loading}>
          <div className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="flex w-full flex-1 rounded border border-gray-300 p-2 outline-none focus:border-gray-800 focus:ring-gray-800 sm:text-sm"
                placeholder="Name"
                value={inputs.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <textarea
                id="text"
                name="text"
                rows={3}
                required
                className="flex w-full flex-1 rounded border border-gray-300 p-2 outline-none focus:border-gray-800 focus:ring-gray-800 sm:text-sm"
                placeholder="What customer say"
                value={inputs.text}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                type="number"
                name="rating"
                id="rating"
                className="flex w-full flex-1 rounded border border-gray-300 p-2 outline-none focus:border-gray-800 focus:ring-gray-800 sm:text-sm"
                placeholder="Rating from 1 to 5"
                value={inputs.rating}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className="font-poppins w-full rounded border border-gray-900 bg-gray-900 px-8 py-2 uppercase text-white transition duration-300 ease-in-out hover:bg-white hover:text-gray-900 disabled:opacity-60 disabled:hover:bg-gray-900 disabled:hover:text-white md:max-w-[300px] md:text-base"
                // onClick={resetForm}
              >
                Create
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
