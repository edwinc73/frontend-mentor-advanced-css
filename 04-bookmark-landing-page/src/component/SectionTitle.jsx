import PropTypes from "prop-types";

function SectionTitle({ title, body }) {
  return (
    <div className="flex flex-col gap-3 text-center ">
      <h2 className="text-3xl font-rubik font-semibold text-neutral-dark">
        {title}
      </h2>
      <p className="text-base font-rubik max-w-[30rem] text-gray-500">{body}</p>
    </div>
  );
}

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
