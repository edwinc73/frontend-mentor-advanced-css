import { useState } from "react";
import Title from "../../component/Title";
import data from "/public/data.json";
import { AnimatePresence, motion } from "framer-motion";

function Crew() {
  const { crew } = data;
  const [member, setMember] = useState("Douglas Hurley");

  const curMember = crew.find((item) => item.name === member);

  return (
    <section
      id="crew-section"
      className="background-image w-screen h-full min-h-screen overflow-clip"
    >
      <div className="max-w-[1440px] min-h-screen text-center gap-300 mx-auto flex flex-col items-center md:pt-[134px] lg:pt-[160px] h-full md:pb-300 px-300 md:px-500 lg:px-[165px] pt-[112px] pb-300 lg:pb-600">
        {/* title */}
        <Title section="crew" num="02" title="MEET YOUR CREW" />
        {/* content */}
        <AnimatePresence>
          <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-400 flex-grow lg:text-left relative max-h-[1024px]">
            {/* explaination  */}

            <motion.div
              key={curMember.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="crew__explaination flex flex-col gap-300 pt-500 lg:pt-0 flex-grow lg:max-w-1/2 lg:w-[530px]"
            >
              <div className="crew_rankandname">
                <div className="crew__role font-bellefair uppercase text-white opacity-50 text-xl md:text-2xl mb-100 lg:mb-200">
                  {curMember.role}
                </div>
                <div className="crew__name text-white -mb-100 lg:-mb-100">
                  <h2 className="font-bellefair uppercase text-[1.5rem] leading-tight md:text-[2.5rem] lg:text-4xl">
                    {curMember.name}
                  </h2>
                </div>
              </div>
              <div className="crew__bio text-blueLight max-w-[27rem] lg:max-w-[34rem] min-h-[162px] md:min-h-[117px]">
                <p className="font-barlow text-[15px] md:text-base lg:text-xl leading-[1.8rem]">
                  {curMember.bio}
                </p>
              </div>
              <div className="crew__pagination flex  mx-auto lg:absolute lg:bottom-0">
                {crew.map((item, index) => {
                  return (
                    <button
                      aria-label={`crew ${index + 1}`}
                      key={"pagination-item" + item.name}
                      onClick={() => {
                        setMember(item.name);
                      }}
                      className={`p-50 lg:px-[20px] hover:opacity-50 cursor-pointer transition duration-100 ease-in-out focus:outline-blueLight outline-none outline-offset-4 outline-2 focus:opacity-75 ${
                        item.name == curMember.name
                          ? "opacity-100 hover:opacity-100 focus:opacity-100"
                          : "opacity-20"
                      }`}
                    >
                      <span className="w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full bg-white block"></span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
            {/* image */}

            <motion.div
              key={curMember.images.webp}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="crew__img overflow-hidden fade-img max-h-[350px] md:max-h-[463px] lg:max-h-[676px] px-[28px] md:px-[165px] lg:px-[0] translate-y-500 lg:max-w-1/2 lg:w-[530px] img-filter translate-x-500"
            >
              <img
                className="w-full h-full object-cover lg:min-h-[300px]"
                src={curMember.images.webp}
                alt={curMember.name + ", the " + curMember.role}
              />
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Crew;
