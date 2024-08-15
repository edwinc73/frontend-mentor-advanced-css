import "./Footer.scss";

import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";

const socLinks = [
  { img: { src: facebook, alt: "facebook" }, link: "/" },
  { img: { src: twitter, alt: "twitter" }, link: "/" },
  { img: { src: pinterest, alt: "pinterest" }, link: "/" },
  { img: { src: instagram, alt: "instagram" }, link: "/" },
];

const footerNavLinks = [
  { name: "About", link: "/" },
  { name: "Careers", link: "/" },
  { name: "Events", link: "/" },
  { name: "Products", link: "/" },
  { name: "Support", link: "/" },
];

const Footer = () => {
  return (
    <footer className=" bg-black">
      <div className="py-12 px-5 md:px-6 lg:px-8 xl:px-10 max-w-7xl mx-auto flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:order-1 gap-5">
        <div className="order-0 flex justify-center items-center lg:justify-start lg:items-center">
          <img src={logo} alt="loopstudios logo" />
        </div>
        <ul
          className="order-3 lg:order-1 flex space-x-4 justify-center items-center lg:justify-end lg:items-center"
          role="menubar"
        >
          {socLinks.map((item) => (
            <li
              key={item.img.alt}
              role="menuitem"
              className="relative footer_soclink"
            >
              <a href="/">
                <img src={item.img.src} alt={item.img.alt} />
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex-col order-1 lg:order-0 lg:flex-row items-center lg:ml-[-0.75rem] flex lg:space-x-4 lg:justify-start lg:items-center">
          {footerNavLinks.map((item) => (
            <li
              key={item.name}
              className="font-alta text-white p-3 footer__navitem text-sm transition duration-200 cursor-pointer"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className="order-3 flex lg:order-0 justify-center lg:justify-end lg:items-center">
          <p className=" text-gray-400 font-alta lg:text-right text-center">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
