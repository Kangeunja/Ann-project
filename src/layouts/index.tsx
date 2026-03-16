import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="content-wrap">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
