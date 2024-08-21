import PropTypes from "prop-types";

function Section({ children, id, className }) {
  return (
    <section id={id} className={`max-w-6xl py-16 px-8 lg:${className} mx-auto`}>
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
