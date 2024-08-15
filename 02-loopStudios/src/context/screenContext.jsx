import { createContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import PropTypes from "prop-types";

export const ScreenContext = createContext(null);

export function ScreenContextProvider({ children }) {
  const state = useMediaQuery({ query: `(max-width: 1023px)` });

  const [isMobile, setIsMobile] = useState(state);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(state);
    };
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  });

  return (
    <ScreenContext.Provider value={isMobile}>{children}</ScreenContext.Provider>
  );
}

ScreenContextProvider.propTypes = {
  children: PropTypes.object,
};
