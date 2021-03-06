// import Footer from "./Footer";
import Header from "./Header/Header";
import { useRouter } from "next/router";
import ToTop from "./ToTop";
import Footer from "./Footer/Footer";

export default function Page({ children }) {
  const router = useRouter();

  return (
    <>
      <ToTop />
      <Header />
      {children}
      <div className={`${router.pathname === "/contact" ? "hidden" : ""}`}>
        <Footer />
      </div>
    </>
  );
}
