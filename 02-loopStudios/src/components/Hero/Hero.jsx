import bgImage from "../../assets/images/desktop/image-hero.jpg";
import "./Hero.scss";

const Hero = () => {
  return (
    <section id="hero-section" className="min-w-[100vw]">
      <div className=" hero__bg w-screen h-full">
        <img
          src={bgImage}
          alt="immersive go kart"
          className="w-screen z-[-1]"
        />
        <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto px-4 h-full md:px-6 lg:px-8 xl:px-10 w-full flex justify-start items-center">
          <h1 className="font-josefins border-2 text-7xl uppercase text-white font-light p-10 text-wrap tracking-wider leading-[0.92] min-w-[40rem]">
            Immersive
            <br /> experiences <br />
            that deliver
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
