import PropTypes from "prop-types";

function SectionTitle({ title, body }) {
  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-3xl font-rubik text-center font-semibold text-neutral-dark mx-auto">
        {title}
      </h2>
      <p className="text-lg tracking-wide font-rubik max-w-[34rem] text-gray-500 text-center mx-auto">
        {body}
      </p>
    </div>
  );
}

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
