import "./index.css";
import logo from "./lotus.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} className="navbar-logo" alt="logo" />
      <ul className="nav-list">
        <li className="nav-item">
          <a className="nav-link" href="">
            <h6>01</h6>
            About me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            <h6>02</h6>
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            <h6>03</h6>
            Contacts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
