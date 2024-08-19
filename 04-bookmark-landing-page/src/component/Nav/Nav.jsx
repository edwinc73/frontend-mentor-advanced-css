import "./Nav.scss";
import logo from "../../assets/images/logo-bookmark.svg";
import Button from "../Button";

const MenuItem = ({ children }) => (
  <li role="menuitem" className="nav__menuitem">
    <a
      href="/"
      className="uppercase font-rubik text-sm py-3 text-neutral-dark font-normal tracking-wider"
    >
      {children}
    </a>
  </li>
);

function Nav() {
  return (
    <nav className="mx-auto max-w-6xl py-10 flex justify-between items-center">
      <a href="./" className="nav__link">
        <img src={logo} alt="bookmark logo" />
      </a>

      <ul className="nav__menubar flex gap-12 items-center" role="menubar">
        <MenuItem>features</MenuItem>
        <MenuItem>Pricing</MenuItem>
        <MenuItem>contact</MenuItem>
        <li>
          <Button type="red" label="Login">
            LOGIN
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
