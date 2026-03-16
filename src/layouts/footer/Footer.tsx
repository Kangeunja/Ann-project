import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-info">
          COPYRIGHT © 2016 Designview. All rights reserved
        </div>

        <div className="footer-icon__wrap">
          <button className="footer-icon youtube"></button>
          <button className="footer-icon facebook"></button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
