import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <h1>Cleano Diapers</h1>
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home🏠</li>
          <li>About Us👥</li>
          <li>Contact Us📞</li>
          <li>Cart🛒</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
