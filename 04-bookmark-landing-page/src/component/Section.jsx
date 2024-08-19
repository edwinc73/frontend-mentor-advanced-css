import PropTypes from "prop-types";

function Section({ children, id }) {
  return (
    <section id={id} className="max-w-6xl px-0 py-16 mx-auto">
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};

export default Section;
