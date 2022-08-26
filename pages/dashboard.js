import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  const loading = status === "loading";

  if (loading) return null;

  return (
    <div className="mt-44 min-h-screen">
      {session ? (
        <p>
          <span>Signed in as {session?.user?.email}</span>
          <Link href="/account">
            <a>My Account</a>
          </Link>
          <button onClick={signOut}>Sign out</button>
        </p>
      ) : (
        <>
          <button onClick={signIn}>Sign in</button>
        </>
      )}
    </div>
  );
}
