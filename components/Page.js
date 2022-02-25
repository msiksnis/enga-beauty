import Footer from "./Footer";
import Header from "./Header/Header";

export default function Page({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
