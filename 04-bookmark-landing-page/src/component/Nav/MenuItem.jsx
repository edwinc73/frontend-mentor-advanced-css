export const MenuItem = ({ children, colorClass, font }) => (
  <li role="menuitem" className="nav__menuitem">
    <a
      href="/"
      className={`uppercase font-rubik text-sm py-3 ${colorClass} ${font} tracking-wider hover:text-secondary-red transition duration-100 ease-in-out`}
    >
      {children}
    </a>
  </li>
);
