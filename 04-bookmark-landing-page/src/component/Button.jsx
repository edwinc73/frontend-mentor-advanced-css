import PropTypes from "prop-types";
import "./Button.scss";

function Button({ label, children, type = "blue", className = "" }) {
  // types can be red blue light
  return (
    <button
      aria-label={label}
      className={`${type} ${className} px-4 lg:px-6 lg:min-w-32 py-3 font-rubik font-medium rounded-md text-sm shadow-lg border-2 transition duration-150 ease-in-out w-fit tracking-wide`}
    >
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  type: PropTypes.oneOf(["red", "blue", "light"]),
  label: PropTypes.string,
  children: PropTypes.node,
};
