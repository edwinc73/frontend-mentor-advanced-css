import closeButton from "../../assets/images/icon-close.svg";
import { navLinks } from "../../navLinks.js";

import { motion } from "framer-motion";
import { useContext } from "react";
import { NavContext } from "../../context/NavContext.jsx";

const SideNav = () => {
  const navContext = useContext(NavContext);

  const handleClick = (e) => {
    if (e.target.id == "sidenav__bg") {
      navContext.closeNav();
    }
  };

  return (
    <motion.div
      className="nav__sidenav w-full absolute left-0 right-0 top-0 flex justify-between items-start min-h-screen bg-black bg-opacity-50"
      id="sidenav__bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClick}
    >
      <div className="flex bg-white justify-between items-center w-100 h-24 w-full px-6 md:px-12">
        <div
          tabIndex="0"
          className={`${
            navContext.sideNav ? "hidden" : ""
          }h-4 w-4 flex justify-center items-center xl:hidden toggler-button`}
          role="button"
          aria-label="Toggle menu"
          onClick={() => navContext.closeNav()}
        >
          <img src={closeButton} className="w-full h-full" alt="close menu" />
        </div>
        <motion.ul
          className="flex space-x-3 gap-3 mt-1"
          initial={{
            opacity: 0,
            transform: "translateX(200px)",
          }}
          animate={{
            opacity: 1,
            transform: "translateX(0)",
          }}
          exit={{
            opacity: 0,
            transform: "translateX(200px)",
          }}
        >
          {navLinks.map((item) => (
            <li className="font-league font-bold" key={`mobile-${item.name}`}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default SideNav;
