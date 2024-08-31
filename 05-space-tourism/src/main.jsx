import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import { Layout } from "./Layout.jsx";
import App from "./App.jsx";
import Crew from "./pages/Crew/Crew.jsx";
import Technology from "./pages/Technology/Technology.jsx";
import Destination from "./pages/Destination/Destination.jsx";
import { AnimatePresence, motion, cubicBezier } from "framer-motion";

const PageTransitionWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{
          transformPerspective: "200px",
          transform: "translateY(-12%) rotateX(25deg) translateZ(0)",
          width: "150%",
          opacity: 0,
        }}
        animate={{
          transform: "perspective(0) translateY(-0) rotateX(0) translateZ(0)",
          width: "100%",
          opacity: 1,
        }}
        exit={{ x: "0" }}
        transition={{
          duration: 1,
          ease: cubicBezier(0.35, 0.17, 0.3, 0.86),
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <PageTransitionWrapper>
            <App />
          </PageTransitionWrapper>
        }
      />
      <Route
        path="destination"
        element={
          <PageTransitionWrapper>
            <Destination />
          </PageTransitionWrapper>
        }
      />
      <Route
        path="crew"
        element={
          <PageTransitionWrapper>
            <Crew />
          </PageTransitionWrapper>
        }
      />
      <Route
        path="technology"
        element={
          <PageTransitionWrapper>
            <Technology />
          </PageTransitionWrapper>
        }
      />
    </Route>
  </Routes>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
