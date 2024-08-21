import "./Nav.scss";
import logo from "../../assets/images/logo-bookmark.svg";
import menu from "../../assets/images/icon-hamburger.svg";
import close from "../../assets/images/icon-close.svg";

import sideNavLogo from "../../assets/images/logo-bookmark-sideNav.svg";

import Button from "../Button";
import { MenuItem } from "./MenuItem";
import { useState } from "react";

const NavItems = ({ colorClass }) => {
  return (
    <>
      <MenuItem font="text-normal" colorClass={colorClass}>
        features
      </MenuItem>
      <MenuItem font="text-normal" colorClass={colorClass}>
        Pricing
      </MenuItem>
      <MenuItem font="text-normal" colorClass={colorClass}>
        contact
      </MenuItem>
    </>
  );
};

function Nav() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="mx-auto max-w-6xl py-10 px-6 lg:px-0 flex justify-between items-center relative z-10">
      <a href="./" className="nav__link">
        <img src={openNav ? sideNavLogo : logo} alt="bookmark logo" />
      </a>
      <button
        className="lg:hidden flex "
        onClick={() => {
          setOpenNav(true);
        }}
        aria-label="open menu"
      >
        s{!openNav && <img src={menu} alt="burger menu" />}
      </button>
      {/* side nav */}
      {openNav ? (
        <div className="py-10 px-6 justify-start bg-neutral-dark bg-opacity-90 items-center fixed top-0 left-0 h-screen w-screen ">
          <div className="w-fit">
            <a href="./" className="nav__link z-40 relative mr-auto">
              <img
                src={sideNavLogo}
                className="h-[25px] w-fit"
                alt="bookmark logo"
              />
            </a>
          </div>
          <button
            className="lg:hidden flex fixed top-11 right-6"
            onClick={() => {
              setOpenNav(false);
            }}
            aria-label="close menu"
          >
            <img src={close} alt="close menu" />
          </button>
          <ul
            className="mt-10 flex flex-col items-center gap-4"
            role="menubar"
            aria-label="menubar 2"
          >
            <hr className="border-1 opacity-50 w-full" />
            <MenuItem font="text-normal" colorClass="text-white">
              features
            </MenuItem>
            <hr className="border-1 opacity-50 w-full" />

            <MenuItem font="text-normal" colorClass="text-white">
              Pricing
            </MenuItem>
            <hr className="border-1 opacity-50 w-full" />

            <MenuItem font="text-normal" colorClass="text-white">
              contact
            </MenuItem>
            <hr className="border-1 opacity-50 w-full" />
            <li className="w-full mt-1" role="menuitem">
              <button className="px-6 min-w-32 w-full py-3 font-rubik font-medium rounded-md text-sm shadow-lg border-2 transition duration-150 ease-in-out tracking-wide text-black">
                LOGIN
              </button>
            </li>
          </ul>
        </div>
      ) : null}
      {/* inlineNav */}
      <ul
        className="hidden lg:flex nav__menubar gap-12 items-center"
        role="menubar"
        aria-label="menubar 1"
      >
        <NavItems colorClass="text-neutral-dark" />
        <li role="menuitem">
          <Button type="red" label="Login">
            LOGIN
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
