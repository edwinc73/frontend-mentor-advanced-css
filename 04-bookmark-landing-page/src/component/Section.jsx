import PropTypes from "prop-types";

function Section({ children }) {
  return <section className="max-w-6xl p-6 mx-auto">{children}</section>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
