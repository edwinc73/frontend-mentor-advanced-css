import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { ScreenContextProvider } from "./context/screenContext.jsx";
import { NavContextProvider } from "./context/NavContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScreenContextProvider>
      <NavContextProvider>
        <App />
      </NavContextProvider>
    </ScreenContextProvider>
  </StrictMode>
);
