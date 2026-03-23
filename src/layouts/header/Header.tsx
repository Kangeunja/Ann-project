import { useNavigate } from "react-router-dom";
import "../header/Header.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-wrap" onClick={() => navigate("/")}>
          <div className="logo"></div>
          <p>내 이름은 빨간머리앤</p>
        </div>

        <div className="menu-wrap">
          <p onClick={() => navigate("/exhibition")}>Exhibition</p>
          <p onClick={() => navigate("/program")}>Program</p>
          <p onClick={() => navigate("/theWorks")}>The works</p>
          <p onClick={() => navigate("/information")}>Information</p>
          {/* <p onClick={() => navigate("/shop")}>Shop</p> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
