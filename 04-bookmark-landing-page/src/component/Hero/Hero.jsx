import "./Hero.scss";
import Section from "../Section";
import Button from "../Button";
import heroImage from "../../assets/images/illustration-hero.svg";

function Hero() {
  return (
    <Section>
      <div className="mx-auto max-w-6xl h-fit flex justify-between ">
        <div className="flex flex-col gap-10 justify-start text-left min-w-[40%]">
          <h1 className="text-5xl font-bold text-neutral-dark leading-tight">
            A Simple Bookmark Manager
          </h1>
          <p className="text-gray-500 max-w-lg text-lg tracking-wide font-rubik">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instant. Try it for
            free.
          </p>
          <div className="flex gap-4">
            <Button type="blue" label="download for chrome">
              Get it on Chrome
            </Button>
            <Button type="light" label="download for firefox">
              Get it on Firefox
            </Button>
          </div>
        </div>
        <div className="hero__img relative w-full h-full highlight mr-[-21rem] translate-x-10">
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
