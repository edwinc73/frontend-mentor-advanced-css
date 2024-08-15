import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { ScreenContext } from "../../context/screenContext";

export const ContentCard = ({ name, img }) => {
  const isMobile = useContext(ScreenContext);

  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);
  return (
    <article className="creations__content__card relative cursor-pointer">
      <div className="img-overlay transition">
        <img
          src={isMobile ? img.src.mobile : img.src.desktop}
          alt={img.alt}
          className="w-full"
        />
      </div>
      <h3
        className="absolute bottom-6 left-6 right-6 font-josefins text-3xl
      uppercase font-light min-h-[2lh]word-spacing
      leading-tight h-[4.5rem] text-white transition"
        dangerouslySetInnerHTML={{ __html: name }}
      ></h3>
    </article>
  );
};

ContentCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.object,
};
