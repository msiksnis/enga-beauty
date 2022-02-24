import Footer from "./Footer";
import Header from "./Headers/Header";

export default function Page({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
