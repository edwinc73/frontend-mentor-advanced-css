import { ContentCard } from "./ContentCard";
import { creationsContent } from "../../creationContent";

import "./Creations.scss";

const Creations = () => {
  return (
    <section
      id="creations-section"
      className="max-w-7xl mx-auto py-36 px-4 md:px-6 lg:px-8 xl:px-10"
    >
      <div className="creations__title flex justify-between ">
        <h2 className="text-6xl font-josefins font-light uppercase tracking-wider leading-[0.92]">
          Our Creations
        </h2>
        <button className="uppercase bg-black border border-black text-white px-10 font-alta text-sm tracking-[0.4rem] hover:bg-white hover:text-black transition">
          see all
        </button>
      </div>
      <div className="creations__content grid grid-cols-4 gap-8 mt-20">
        {creationsContent.map(({ name, img }) => (
          <ContentCard key={name} name={name} img={img}></ContentCard>
        ))}
      </div>
    </section>
  );
};

export default Creations;
