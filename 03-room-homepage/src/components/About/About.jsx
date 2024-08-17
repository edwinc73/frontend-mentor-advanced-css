import aboutImg from "../../assets/images/image-about-dark.jpg";
import aboutImg2 from "../../assets/images/image-about-light.jpg";

export default function About() {
  return (
    <section
      id="about-section"
      className="xl:flex xl:max-w-[1440px] mx-auto xl:max-h-[266px]"
    >
      <img
        src={aboutImg}
        alt="minimal dark furniture"
        className="w-screen xl:max-w-[420px]"
      />
      <div className="px-6 py-12 md:px-12 md:py-20 xl:py-16  xl:px-12 xl:flex xl:justify-center xl:items-start xl:flex-col max-w-[42em]">
        <h2 className="font-league uppercase font-bold text-sm xl:text-base leading-10 tracking-[0.42rem] xl:mt-2">
          About our furniture
        </h2>
        <p className="font-league mt-3 xl:mt-2 text-gray-500 text-[15px] tracking-[0.02rem]">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img
        src={aboutImg2}
        alt="minimal white furniture"
        className="w-screen xl:max-w-[440px]"
      />
    </section>
  );
}
