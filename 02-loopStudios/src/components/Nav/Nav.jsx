import logo from "../../assets/images/logo.svg";
import "./Nav.scss";

const navLinks = [
  {
    name: "About",
    url: "/",
  },
  {
    name: "Careers",
    url: "/",
  },
  {
    name: "Events",
    url: "/",
  },
  {
    name: "Products",
    url: "/",
  },
  {
    name: "Support",
    url: "/",
  },
];

const Nav = () => {
  return (
    <header className="absolute top-0 left-0 right-0 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
      <nav className="w-full h-36  flex justify-between items-center">
        <a href="/" className="cursor-pointer z-10">
          <img src={logo} className="h-6" alt="loopStudios logo" />
        </a>
        <ul
          role="menubar"
          className="flex justify-between items-center space-x-4"
        >
          {navLinks.map(({ name, link }) => (
            <li role="menuitem" key={name}>
              <a
                className="text-white font-josefins font-normal nav__item transition duration-200 cursor-pointer p-3 z-10"
                href={link}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
