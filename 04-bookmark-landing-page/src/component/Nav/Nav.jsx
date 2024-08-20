import "./Nav.scss";
import logo from "../../assets/images/logo-bookmark.svg";
import Button from "../Button";
import { MenuItem } from "./MenuItem";

function Nav() {
  return (
    <nav className="mx-auto max-w-6xl py-10 flex justify-between items-center">
      <a href="./" className="nav__link">
        <img src={logo} alt="bookmark logo" />
      </a>

      <ul className="nav__menubar flex gap-12 items-center" role="menubar">
        <MenuItem font="text-normal" colorClass="text-neutral-dark">
          features
        </MenuItem>
        <MenuItem font="text-normal" colorClass="text-neutral-dark">
          Pricing
        </MenuItem>
        <MenuItem font="text-normal" colorClass="text-neutral-dark">
          contact
        </MenuItem>
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
