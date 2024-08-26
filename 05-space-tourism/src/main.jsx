import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
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

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>oops</div>,
    children: [
      {
        path: "/",
        element: (
          <PageTransitionWrapper>
            <App />
          </PageTransitionWrapper>
        ),
      },
      {
        path: "/destination",
        element: (
          <PageTransitionWrapper>
            <Destination />
          </PageTransitionWrapper>
        ),
      },
      {
        path: "/Crew",
        element: (
          <PageTransitionWrapper>
            <Crew />
          </PageTransitionWrapper>
        ),
      },
      {
        path: "/technology",
        element: (
          <PageTransitionWrapper>
            <Technology />
          </PageTransitionWrapper>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
