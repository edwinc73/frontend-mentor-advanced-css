import { NavLink } from "react-router-dom";

const NavItem = ({ link, name, id }) => {
  return (
    <li className="py-400">
      <NavLink to={link}>
        <span className="font-barlowCondense tracking-wide font-bold mr-150">
          {id}
        </span>
        <span className="font-barlowCondense uppercase tracking-wide">
          {name}
        </span>
      </NavLink>
    </li>
  );
};

function Nav() {
  return (
    <nav className="absolute pl-800 top-0 left-0 right-0 text-white flex justify-between items-center">
      <div className="flex w-full gap-800 items-center mt-500">
        <NavLink href="/" className="logo-container">
          <img src="Logo.svg" alt="space tourism logo" />
        </NavLink>
        <hr className="border-1 w-full opacity-25 -mr-400 z-10" />
      </div>
      <ul
        role="menubar"
        className="flex justify-end items-center gap-600 pr-800 mt-500 pl-1600 lg:h-1200 bg-white bg-opacity-5 backdrop-blur-md"
      >
        <NavItem link="/" name="home" id="00"></NavItem>
        <NavItem link="/destination" name="destination" id="01"></NavItem>
        <NavItem link="/crew" name="crew" id="02"></NavItem>
        <NavItem link="/technology" name="technology" id="03"></NavItem>
      </ul>
    </nav>
  );
}

export default Nav;
