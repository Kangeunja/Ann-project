import "../header/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-wrap">
          <div className="logo"></div>
          <p>내 이름은 빨간머리앤</p>
        </div>

        <div className="menu-wrap">
          <p>Exhibition</p>
          <p>Program</p>
          <p>The works</p>
          <p>Information</p>
          <p>Shop</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
