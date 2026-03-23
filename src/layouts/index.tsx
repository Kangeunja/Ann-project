import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ScrollToTop from "./scrollTo/ScrollToTop";

const Layout = () => {
  return (
    <div className="layout">
      <ScrollToTop />
      <Header />
      <main className="content-wrap">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
