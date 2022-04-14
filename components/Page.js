import Footer from "./Footer";
import Header from "./Header/Header";
import { useRouter } from "next/router";

export default function Page({ children }) {
  const router = useRouter();

  return (
    <>
      <Header />
      {children}
      <div className={`${router.pathname === "/contact" ? "hidden" : ""}`}>
        <Footer />
      </div>
    </>
  );
}
