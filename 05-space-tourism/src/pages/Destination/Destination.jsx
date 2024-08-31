import { useState } from "react";
import data from "/public/data.json";
import Title from "../../component/Title";
import { AnimatePresence, motion, cubicBezier } from "framer-motion";

function Destination() {
  const { destinations } = data;
  const [destination, setDestination] = useState("Moon");

  const curData = destinations.find((item) => item.name == destination);

  return (
    <section
      id="destination-section"
      className="background-image w-screen h-full min-h-screen"
    >
      <AnimatePresence>
        <div className="max-w-[1440px] min-h-screen text-center gap-300 mx-auto flex flex-col items-center lg:flex md:pt-[134px] lg:pt-[160px] md:pb-300 px-300 md:px-500 lg:px-[165px] pt-[112px] pb-300 lg:pb-600">
          {/* title */}
          <Title section="destination" num="01" title="pick your destination" />
          {/* content */}
          <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-400 flex-grow h-full max-h-[1024px] ">
            {/* image */}
            <motion.div
              key={curData.images.webp}
              initial={{ opacity: 0, translateX: "-100px" }}
              animate={{ opacity: 1, translateX: "0" }}
              exit={{ opacity: 0, translateX: "100px" }}
              transition={{
                duration: 0.3,
                easings: cubicBezier(0.68, -0.55, 0.27, 1.55),
              }}
              className="destination__img max-w-[150px] lg:h-full md:max-w-[300px] lg:max-w-[480px] flex justify-center items-center py-[26.5px] md:py-[42px] lg:px-[1.85rem]"
            >
              <img
                src={curData.images.webp}
                alt={curData.name}
                className="w-full h-full object-contains lg:min-w-[250px]"
              />
            </motion.div>
            {/* explaination  */}
            <motion.article
              key={curData.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col lg:text-left gap-300 md:gap-500 lg:pl-600 justify-center"
            >
              <div
                role="tablist"
                className="destination__tabs tracking-[0.15rem] flex justify-center lg:justify-start text-white gap-400"
              >
                {destinations.map(({ name }) => {
                  return (
                    <button
                      role="tab"
                      aria-selected={curData.name == name}
                      aria-label={`see ${name}`}
                      key={name}
                      onClick={() => {
                        setDestination(name);
                      }}
                      className={`pb-100 border-b-2 ${
                        destination == name
                          ? "border-white"
                          : "border-transparent text-blueLight"
                      } lg:border-b-2 hover:border-white transition duration-100 ease-in-out cursor-pointer uppercase font-barlowCondense`}
                    >
                      {name}
                    </button>
                  );
                })}
              </div>
              <div className="destination__name text-white -mb-100 lg:-mb-300">
                <h2 className="font-bellefair uppercase text-4xl leading-tight md:text-5xl">
                  {curData.name}
                </h2>
              </div>
              <div className="destination__body text-blueLight max-w-[32rem] lg:max-w-[28rem]">
                <p className="font-barlow text-[15px] md:text-base lg:text-xl leading-[1.8rem]">
                  {curData.description}
                </p>
              </div>
              <hr className="opacity-25 w-full max-w-[32rem] lg:max-w-[28rem]" />
              <div className="flex flex-col md:flex-row items-center md:items-start  gap-300 max-w-[32rem] lg:max-w-[28rem]">
                <div className="destination__distance w-[245px]">
                  <span className="font-barlowCondense text-blueLight text-sm tracking-[0.15rem] uppercase">
                    AVG. Distance
                  </span>
                  <p className="text-white font-bellefair uppercase text-2xl">
                    {curData.distance}
                  </p>
                </div>
                <div className="destination__travel w-[245px]">
                  <span className="font-barlowCondense text-blueLight text-sm tracking-[0.15rem] uppercase">
                    EST. travel time
                  </span>
                  <p className="text-white font-bellefair uppercase text-2xl ">
                    {curData.travel}
                  </p>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </AnimatePresence>
    </section>
  );
}

export default Destination;
