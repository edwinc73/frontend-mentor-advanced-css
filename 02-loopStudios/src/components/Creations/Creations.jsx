import { ContentCard } from "./ContentCard";
import { creationsContent } from "../../creationContent";

import "./Creations.scss";
import { useContext } from "react";
import { ScreenContext } from "../../context/screenContext";

const Creations = () => {
  const isMobile = useContext(ScreenContext);
  return (
    <section
      id="creations-section"
      className="max-w-7xl mx-auto pt-12 pb-24 px-5  md:px-6 lg:px-8 xl:px-10"
    >
      <div className="creations__title flex justify-center lg:justify-between items-center">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-josefins font-light uppercase ">
          Our Creations
        </h2>
        <button className="hidden lg:block uppercase bg-white border border-black text-black px-9 py-2 h-fit font-alta text-sm tracking-[0.4rem] hover:bg-white hover:text-black transition">
          see all
        </button>
      </div>
      <div className="creations__content grid grid-cols-1 lg:grid-cols-4 gap-8 mt-14 lg:mt-20">
        {creationsContent.map(({ name, img }) => (
          <ContentCard key={name} name={name} img={img}></ContentCard>
        ))}
      </div>
      {isMobile && (
        <div className="flex justify-center items-center mt-8 w-full ">
          <button className="lg:block uppercase bg-white border border-black text-black px-9 py-2 h-fit font-alta text-sm tracking-[0.4rem] hover:text-black transition">
            see all
          </button>
        </div>
      )}
    </section>
  );
};

export default Creations;
