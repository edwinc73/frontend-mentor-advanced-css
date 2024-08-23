import Nav from "./components/Nav/Nav.jsx";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};
