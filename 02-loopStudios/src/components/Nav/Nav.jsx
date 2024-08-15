import logo from "../../assets/images/logo.svg";
import burgerIcon from "../../assets/images/icon-hamburger.svg";
import closeIcon from "../../assets/images/icon-close.svg";

import "./Nav.scss";
import { useState } from "react";

const navLinks = [
  {
    name: "About",
    url: "/",
  },
  {
    name: "Careers",
    url: "/",
  },
  {
    name: "Events",
    url: "/",
  },
  {
    name: "Products",
    url: "/",
  },
  {
    name: "Support",
    url: "/",
  },
];

const MenuBar = () => (
  <ul
    role="menubar"
    className="hidden md:flex justify-between items-center space-x-4 text-white"
  >
    {navLinks.map(({ name, link }) => (
      <li className="z-50" role="menuitem" key={name}>
        <a className="" href={link}>
          {name}
        </a>
      </li>
    ))}
  </ul>
);

const SideNav = () => {
  return (
    <ul className="nav_sidenav w-screen h-screen fixed top-0 left-0 flex flex-col px-5 justify-center gap-6 bg-black z-40">
      {navLinks.map(({ name, link }) => (
        <li
          className="z-50 text-white list-none text-3xl font-josefins uppercase"
          role="menuitem"
          key={name}
        >
          <a className="" href={link}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 max-w-7xl mx-auto px-5 md:px-6 lg:px-8 xl:px-10">
      <nav className="w-full lg:h-36 h-24 flex justify-between items-center">
        <a href="/" className="cursor-pointer z-50">
          <img src={logo} className="h-6 " alt="loopStudios logo" />
        </a>
        <button
          className="flex md:hidden cursor-pointer z-[100] justify-center items-center h-6 w-6"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {open ? (
            <img src={closeIcon} alt="menu" />
          ) : (
            <img src={burgerIcon} alt="menu" />
          )}
        </button>
        {open ? <SideNav /> : <MenuBar />}
      </nav>
    </header>
  );
};

export default Nav;
