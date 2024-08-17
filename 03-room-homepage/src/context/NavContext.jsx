import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const NavContext = createContext(null);

export const NavContextProvider = ({ children }) => {
  const [sideNav, setOpenNav] = useState(false);
  const closeNav = () => {
    setOpenNav(false);
  };

  const openNav = () => {
    setOpenNav(true);
  };
  return (
    <NavContext.Provider value={{ sideNav, closeNav, openNav }}>
      {children}
    </NavContext.Provider>
  );
};

NavContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
