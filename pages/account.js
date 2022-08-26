import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { GET_USER_PROFILE_BY_ID } from "../graphql/queries";
import { getSession } from "next-auth/react";
import { client } from "./api/auth/[...nextauth]";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const { user } = await client.request(GET_USER_PROFILE_BY_ID, {
    id: session.userId,
  });

  return {
    props: {
      user,
    },
  };
}

export default function AccountPage({ user }) {
  const { handleSubmit, register } = useForm({ defaultValues: user });

  const onSubmit = async ({ name, bio }) => {
    try {
      const res = await fetch("/api/update-account", {
        method: "POST",
        body: JSON.stringify({ name, bio }),
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      toast.success("Account updated successfully");
    } catch (err) {
      toast.error(err.message || "Something went wrong. Try again!");
      console.log(err);
    }
  };

  return (
    <div className="mt-44">
      <h1>My Account</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            placeholder="name"
            id="name"
          />
        </div>

        <div>
          <label htmlFor="bio">Bio</label>
          <br />
          <textarea
            name="bio"
            {...register("bio")}
            placeholder="Short bio"
            id="bio"
            rows={7}
          />
        </div>
        <div>
          <button type="submit">Save profile</button>
        </div>
      </form>
    </div>
  );
}
