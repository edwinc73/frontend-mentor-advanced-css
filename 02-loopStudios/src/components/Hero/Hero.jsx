import { useContext } from "react";
import bgImage from "../../assets/images/desktop/image-hero.jpg";
import mobileBgImage from "../../assets/images/mobile/image-hero.jpg";
import "./Hero.scss";
import { ScreenContext } from "../../context/screenContext";

const Hero = () => {
  const isMobile = useContext(ScreenContext);
  return (
    <section id="hero-section" className="min-w-[100vw]">
      <div className=" hero__bg w-screen lg:h-full h-[80vh]">
        <img
          src={isMobile ? mobileBgImage : bgImage}
          alt="immersive go kart"
          className="z-[-1] h-[80vh] lg:h-[700px] w-full object-cover  select-none"
        />

        <div className="absolute top-0 left-0 right-0 h-[80vh] lg:h-[700px] max-w-7xl mx-auto px-5 md:px-6 lg:px-8 xl:px-10 w-full flex justify-start items-center">
          <h1 className="select-none font-josefins border-white border-2 text-4xl md:text-5xl lg:text-7xl uppercase text-white font-light p-10 md:tracking-wider word-spacing md:word-spacing-unset leading-12 w-full sm:max-w-[25rem] md:max-w-[32rem] lg:max-w-[45rem]">
            Immersive experiences that deliver
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
