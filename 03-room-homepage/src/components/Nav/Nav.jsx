import { useContext } from "react";
import menuButton from "../../assets/images/icon-hamburger.svg";
import SideNav from "./SideNav";
import { navLinks } from "../../navLinks.js";
import { motion } from "framer-motion";

import "./Nav.scss";

import logo from "../../assets/images/logo.svg";
import { NavContext } from "../../context/NavContext.jsx";

const InlineNav = () => {
  return (
    <motion.ul
      className="nav__inlineNav hidden xl:flex order-1 items-center gap-4"
      id="sidenav__bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="menubar"
    >
      {navLinks.map((item) => (
        <li
          className="nav__navItem before:transition before:duration-100 font-league font-semibold px-2 py-2 text-white"
          key={`desktop-${item.name}`}
          role="menuitem"
        >
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </motion.ul>
  );
};

export default function Nav() {
  const navContext = useContext(NavContext);
  return (
    <header>
      <nav className="z-10 px-6 md:px-12 xl:p xl:max-w-[1440px] xl:mx-auto h-24 md:h-36 flex justify-center xl:justify-start items-center absolute top-0 left-0 right-0 w-full gap-11">
        {navContext.sideNav ? <SideNav /> : <InlineNav />}
        <div
          className={`${
            navContext.sideNav ? "hidden" : ""
          } h-5 w-5 z-1 absolute left-6 md:left-12 flex justify-center items-center xl:hidden toggler-button`}
          role="button"
          aria-label="Toggle menu"
          tabIndex="0"
          onClick={() => {
            navContext.openNav();
          }}
        >
          <img src={menuButton} className="" alt="burger menu" />
        </div>
        <div className="logo " role="button" tabIndex={0}>
          <a href="/">
            <img className="md:w-16 " src={logo} alt="room logo" />
          </a>
        </div>
      </nav>
    </header>
  );
}
