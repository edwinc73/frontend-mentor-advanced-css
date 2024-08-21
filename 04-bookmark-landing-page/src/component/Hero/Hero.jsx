import "./Hero.scss";
import Section from "../Section";
import Button from "../Button";
import heroImage from "../../assets/images/illustration-hero.svg";

function Hero() {
  return (
    <Section id="hero-section" className="py-16 pt-12 -mx-8 lg:mx-auto lg:px-0">
      <div className="lg:max-w-6xl md:max-w-2xl mx-auto h-fit flex flex-col px-3 lg:px-0 lg:flex-row justify-between items-center gap-14 lg:gap-0">
        <div className="order-1 lg:order-0 lg:mt-0 flex flex-col text-center gap-6 lg:gap-10 justify-start lg:text-left min-w-[40%]">
          <h1 className="text-[2rem] lg:text-5xl font-bold text-neutral-dark leading-tight">
            A Simple Bookmark Manager
          </h1>
          <p className="text-gray-500 mx-auto lg:mx-0 text-reular lg:max-w-lg max-w-[19rem] md:max-w-[25rem] text-sm lg:text-lg tracking-wide font-rubik">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instant. Try it for
            free.
          </p>
          <div className="flex gap-4 mt-2 lg:mt-0 justify-center lg:justify-start">
            <Button type="blue" label="download for chrome">
              Get it on Chrome
            </Button>
            <Button type="light" label="download for firefox">
              Get it on Firefox
            </Button>
          </div>
        </div>
        <div className="hero__img lg:order-2 relative w-full h-full hero__highlight lg:mr-[-21rem] lg:translate-x-16">
          <img
            src={heroImage}
            alt="bookmark systems design"
            className="h-full z-20"
          />
        </div>
      </div>
    </Section>
  );
}

export default Hero;
