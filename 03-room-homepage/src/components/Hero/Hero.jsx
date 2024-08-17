import { motion } from "framer-motion";

import arrow from "../../assets/images/icon-arrow.svg";

import leftIcon from "../../assets/images/icon-angle-left.svg";
import rightIcon from "../../assets/images/icon-angle-right.svg";
import { useContext, useState } from "react";
import { ScreenContext } from "../../context/screenContext";
import { mobileHeroImages, desktopHeroImages } from "./mobileHeroImages";

export default function Hero() {
  const isMobile = useContext(ScreenContext);
  const [index, setIndex] = useState(0);
  const imageObj = isMobile
    ? mobileHeroImages[index]
    : desktopHeroImages[index];
  const imagesLength = mobileHeroImages.length;

  const handleClick = (e) => {
    const value = e.currentTarget.id == "right" ? 1 : -1;
    setIndex((prev) => {
      if (prev + value >= imagesLength) {
        return 0;
      } else if (prev + value < 0) {
        return imagesLength - 1;
      } else {
        return value + prev;
      }
    });
  };

  return (
    <section
      id="hero-section"
      className="w-full xl:flex xl:max-w-[1440px] mx-auto xl:max-h-[534px] xl:min-h-[534px]"
    >
      <article className="hero__gallery z-2 relative w-screen xl:w-fit">
        <div className="w-full h-full block bg-gray-700 xl:w-[841px] xl:max-h-[534px]  overflow-hidden">
          <motion.img
            className="min-w-full object-cover"
            key={imageObj.src}
            src={imageObj.src}
            alt={imageObj.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
        <div className="hero__control absolute right-0 bottom-0 xl:right-[-10rem] flex">
          <div
            className="hover:bg-[#454545] transition duration-100 cursor-pointer left w-14 h-14 xl:w-20 xl:h-20 bg-black flex items-center justify-center"
            onClick={handleClick}
            id="left"
          >
            <img className="w-3" src={leftIcon} alt="left icon" />
          </div>
          <div
            className=" hover:bg-[#454545] transition duration-100 cursor-pointer right w-14 h-14 xl:w-20 xl:h-20 flex items-center justify-center bg-black"
            onClick={handleClick}
            id="right"
          >
            <img className="w-3" src={rightIcon} alt="right icon" />
          </div>
        </div>
      </article>
      <motion.div
        key={imageObj.body}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full px-6 py-12 md:px-12 md:py-20 xl:px-[6.1rem] xl:mt-[-24px] xl:flex xl:justify-center xl:flex-col"
      >
        {index === 0 ? (
          <h1 className="font-league font-semibold xl:font-bold text-[2.5rem] xl:text-[2.8rem] leading-10 xl:leading-[2.8rem] tracking-tight xl:tracking-[-0.09rem]">
            {imageObj.title}
          </h1>
        ) : (
          <h2 className="font-league font-semibold xl:font-bold text-[2.5rem] xl:text-[2.8rem] leading-10 xl:leading-[2.8rem] tracking-tight xl:tracking-[-0.09rem]">
            {imageObj.title}
          </h2>
        )}
        <p className="font-league mt-4 xl:mt-5 text-gray-500 text-[15px] tracking-[0.01rem]">
          {imageObj.body}
        </p>
        <button className="hover:opacity-50 transition duration-100 mt-10 xl:mt-5 flex items-center font-league font-bold tracking-[0.725rem] uppercase">
          {imageObj.cta}
          <img className="ml-4 pb-1" src={arrow} alt="arrow" />
        </button>
      </motion.div>
    </section>
  );
}
