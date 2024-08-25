import { useState } from "react";
import Title from "../../component/Title";
import data from "/public/data.json";

function Technology() {
  const { technology } = data;
  const [curTech, setCurTech] = useState(technology[0]);

  return (
    <section
      id="Technology-section"
      className="background-image w-screen h-full min-h-screen overflow-clip"
    >
      <div className="max-w-[1440px] min-h-screen text-center gap-1000 mx-auto flex flex-col items-center md:pt-[134px] lg:pt-[160px] h-full md:pb-300 px-300 md:px-500 lg:pl-[165px] pt-[112px] pb-300 lg:pb-600">
        {/* title */}
        <Title section="technology" num="03" title="Space launch 101" />
        {/* content */}
        <div className="flex flex-col lg:w-full lg:flex-row lg:justify-start items-center  gap-400 flex-grow lg:text-left relative max-h-[1024px]">
          {/* image */}
          <div className="technology__img lg:order-2 lg:w-1/2 w-screen max-h-[258px] md:max-h-[357px] lg:max-h-[600px] h-[600px] overflow-clip -mx-300 md:-mx-500 relative lg:flex lg:justify-center lg:items-center">
            <img
              src={curTech.images.portrait}
              className="object-cover w-full absolute bottom-0 md:-bottom-2/3 left-0 right-0 lg:top-0 lg:bottom-0 lg:relative"
              alt={curTech.description}
            />
          </div>
          {/* explaination  */}
          <article className="technology__explaination lg:order-1 flex flex-col lg:flex-row lg:items-center gap-300 lg:gap-800 lg:pt-0 flex-grow lg:w-1/2 lg:pr-400">
            {/* pagination */}
            <div className="technology__pagination flex lg:flex-col gap-200 lg:gap-400 mx-auto lg:bottom-0">
              {technology.map((item, index) => {
                return (
                  <button
                    aria-label={`terminology ${index + 1}`}
                    key={"pagination-item" + item.name}
                    onClick={() => {
                      setCurTech(item);
                    }}
                    className={`w-500 h-500 md:w-[56px] md:h-[56px] lg:w-[80px] lg:h-[80px] font-bellefair text-xl md:text-[24px] lg:text-3xl flex justify-center items-center  rounded-full border-white border-[1px] cursor-pointer hover:border-opacity-100 transition duration-100 ease-in-out focus:outline-blueLight outline-none outline-offset-4 outline-4 focus:border-opacity-100 ${
                      item.name == curTech.name
                        ? "text-blueDark bg-white border-opacity-0"
                        : "text-white bg-transparent border-opacity-25"
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-col gap-300 lg:pt-0 flex-grow lg:w-1/2">
              <div className="technology_rankandname flex flex-col gap-200">
                <div className="technology__role font-bellefair uppercase text-white opacity-50 text-xl md:text-2xl mb-100 lg:mb-200">
                  THE TERMINOLOGY…
                </div>
                <div className="technology__name text-white -mb-100 lg:-mb-100">
                  <h2 className="font-bellefair uppercase text-[1.5rem] leading-tight md:text-[2.5rem] lg:text-4xl">
                    {curTech.name}
                  </h2>
                </div>
              </div>
              <div className="technology__description text-blueLight max-w-[27rem] md:max-w-[31rem] lg:max-w-[34rem] lg:mt-100">
                <p className="font-barlow text-[15px] md:text-base lg:text-xl leading-[1.8rem]">
                  {curTech.description}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Technology;
