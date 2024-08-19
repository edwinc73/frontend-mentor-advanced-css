import PropTypes from "prop-types";

function Section({ children, id, className = "py-16" }) {
  return (
    <section id={id} className={`max-w-6xl px-0 ${className} mx-auto`}>
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
};

export default Section;
