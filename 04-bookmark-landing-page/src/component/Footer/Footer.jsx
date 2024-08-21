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
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between justify-center items-center lg:items-start gap-12 lg:gap-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 justify-center items-center lg:justify-start lg:items-start">
          <a href="./" className="nav__link">
            <img src={logo} alt="bookmark logo" />
          </a>
          <ul
            role="menubar"
            className="flex lg:ml-14 gap-8 lg:gap-14 flex-col lg:flex-row items-center"
          >
            {footerLinks.map((item) => {
              return (
                <MenuItem
                  key={item.name}
                  font="font-light text-sm tracking-wide text-center lg:text-left"
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
