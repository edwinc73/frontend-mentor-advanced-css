import PropTypes from "prop-types";

export const ContentCard = ({ name, img }) => (
  <article className="creations__content__card relative cursor-pointer">
    <div className="img-overlay transition">
      <img src={img.src} alt={img.alt} className="w-full" />
    </div>
    <h3
      className="absolute bottom-6 left-6 right-6 font-josefins text-3xl
      uppercase font-light min-h-[2lh]word-spacing
      leading-tight h-[4.5rem] text-white transition"
      dangerouslySetInnerHTML={{ __html: name }}
    ></h3>
  </article>
);

ContentCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.object,
};
