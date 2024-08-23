import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Layout } from "./Layout.jsx";
import App from "./App.jsx";
import Crew from "./pages/Crew/Crew.jsx";
import Technology from "./pages/Technology/Technology.jsx";
import Destination from "./pages/Destination/Destination.jsx";
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>oops</div>,
    children: [{ path: "/", element: <App /> },{ path: "/destination", element: <Destination /> },{ path: "/Crew", element: <Crew /> },{ path: "/technology", element: <Technology /> }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
