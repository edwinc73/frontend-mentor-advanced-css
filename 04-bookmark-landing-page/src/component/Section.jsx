import PropTypes from "prop-types";

function Section({ children }) {
  return <section className="p-6">{children}</section>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
