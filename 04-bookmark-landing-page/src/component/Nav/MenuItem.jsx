export const MenuItem = ({ children, colorClass, font }) => (
  <li role="none" className="nav__menuitem">
    <a
      href="/"
      className={`uppercase font-rubik tracking-[0.25rem] lg:tracking-wider text-lg lg:text-sm py-3 ${colorClass} ${font} tracking-wider hover:text-secondary-red transition duration-100 ease-in-out`}
      role="menuitem"
    >
      {children}
    </a>
  </li>
);
