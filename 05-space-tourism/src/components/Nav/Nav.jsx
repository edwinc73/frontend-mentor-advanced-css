import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

const NavItem = ({ link, name, id }) => {
  return (
    <li className="py-0 lg:py-[35px] border-e-2 border-b-0 lg:border-b-2 lg:border-e-0 border-transparent hover:border-white transition duration-100 ease-in-out">
      <NavLink to={link}>
        <span className="font-barlowCondense tracking-wide font-bold mr-150">
          {id}
        </span>
        <span className="font-barlowCondense uppercase tracking-wide">
          {name}
        </span>
      </NavLink>
    </li>
  );
};

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="absolute p-300 lg:pl-800 top-0 left-0 right-0 text-white flex justify-between items-center">
      <div className="flex w-full gap-800 items-center lg:mt-500 ">
        <NavLink href="/" className="logo-container">
          <img
            src="Logo.svg"
            alt="space tourism logo"
            className="w-500 lg:w-full"
          />
        </NavLink>
        <hr className="hidden xl:block border-1 w-full opacity-25 -mr-400 z-10" />
      </div>
      <button
        className="navbar-toggler relative lg:hidden"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => {
          setOpenNav((prev) => !prev);
        }}
      >
        <div className={`burger-menu ${openNav && "close-icon"}`}>
          <span className="bar menu-bar1"></span>
          <span className="bar menu-bar2"></span>
          <span className="bar menu-bar3"></span>
        </div>
      </button>
      <ul
        role="menubar"
        className="lg:flex hidden lg:justify-end w-full lg:items-center gap-600 pr-800 lg:mt-500 lg:pl-1600 lg:h-1200 bg-white bg-opacity-5 backdrop-blur-md"
      >
        <NavItem link="/" name="home" id="00"></NavItem>
        <NavItem link="/destination" name="destination" id="01"></NavItem>
        <NavItem link="/crew" name="crew" id="02"></NavItem>
        <NavItem link="/technology" name="technology" id="03"></NavItem>
      </ul>
      {openNav && (
        <div className="pt-[133px] fixed top-0 pl-400 right-0 w-4/6 h-screen bg-white bg-opacity-5 backdrop-blur-md z-20">
          <ul
            className="gap-400 flex flex-col
          "
            role="menubar"
          >
            <NavItem link="/" name="home" id="00"></NavItem>
            <NavItem link="/destination" name="destination" id="01"></NavItem>
            <NavItem link="/crew" name="crew" id="02"></NavItem>
            <NavItem link="/technology" name="technology" id="03"></NavItem>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
