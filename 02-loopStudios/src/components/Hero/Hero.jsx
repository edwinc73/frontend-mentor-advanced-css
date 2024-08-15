import bgImage from "../../assets/images/desktop/image-hero.jpg";
import "./Hero.scss";

const Hero = () => {
  return (
    <section id="hero-section" className="min-w-[100vw]">
      <div className=" hero__bg w-screen h-screen lg:h-full">
        <img
          src={bgImage}
          alt="immersive go kart"
          className="w-screen z-[-1] lg:h-[700px] h-screen object-cover"
        />
        <div className="absolute top-0 left-0 right-0 h-[700px] max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 w-full flex justify-start items-center">
          <h1 className="font-josefins border-2 text-2xl lg:text-7xl uppercase text-white font-light p-10 tracking-wider word-spacing lg:word-spacing-unset leading-[0.92] lg:max-w-[45rem]">
            Immersive experiences that deliver
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
