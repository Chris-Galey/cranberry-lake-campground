import Alert from "./mainLayout/alert/Alert";
import Header from "./mainLayout/header/Header";
import Footer from "./mainLayout/footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Alert />
      <Header />
      {children}
      <Footer />
    </>
  );
}
