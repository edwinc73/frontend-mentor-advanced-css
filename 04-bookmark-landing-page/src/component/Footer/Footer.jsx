import "./Footer.scss";
import logo from "../../assets/images/logo-bookmark-footer.svg";
import { MenuItem } from "../Nav/MenuItem";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";

const footerLinks = [
  { name: "features", link: "/" },
  { name: "pricing", link: "/" },
  { name: "contact", link: "/" },
];

function Footer() {
  return (
    <footer className="bg-neutral-dark text-white py-8">
      <div className="max-w-6xl mx-auto flex justify-between">
        <div className="flex">
          <a href="./" className="nav__link">
            <img src={logo} alt="bookmark logo" />
          </a>
          <ul className="flex ml-14 gap-14 ">
            {footerLinks.map((item) => {
              return (
                <MenuItem
                  key={item.name}
                  font="font-light"
                  colorClass="text-white"
                >
                  {item.name}
                </MenuItem>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-14">
          <a
            href="/"
            className="footer_socLinks transition-colors duration-100 ease-in-out"
          >
            <img src={facebook} alt="facebook logo" />
          </a>
          <a
            href="/"
            className="footer_socLinks transition-colors duration-100 ease-in-out"
          >
            <img src={twitter} alt="twitter logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
