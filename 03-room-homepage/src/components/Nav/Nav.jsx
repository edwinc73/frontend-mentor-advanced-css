import { useState } from "react";
import menuButton from "../../assets/images/icon-hamburger.svg";
import logo from "../../assets/images/logo.svg";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header>
      <nav className="z-10 px-6 h-20 flex justify-center items-center absolute top-0 left-0 right-0 w-full">
        <div
          className="z-10 h-5 w-5 absolute left-6 flex justify-center items-center md:hidden toggler-button"
          role="button"
          aria-label="Toggle menu"
          onClick={() => {
            setOpenNav((prev) => !prev);
          }}
        >
          <img src={menuButton} className="z-10" alt="burger menu" />
        </div>
        <div className="logo z-10">
          <a href="/">
            <img src={logo} alt="room logo" />
          </a>
        </div>
      </nav>
    </header>
  );
}
