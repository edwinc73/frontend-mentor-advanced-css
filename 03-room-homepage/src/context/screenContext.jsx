import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "@react-hook/media-query";

export const ScreenContext = createContext(null);

export const ScreenContextProvider = ({ children }) => {
  const isDesktop = useMediaQuery("only screen and (min-width: 1024px)");
  const [isMobile, setIsMobile] = useState(!isDesktop);

  useEffect(() => {
    setIsMobile(!isDesktop);
  }, [isDesktop]);

  return (
    <ScreenContext.Provider value={isMobile}>{children}</ScreenContext.Provider>
  );
};

ScreenContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
