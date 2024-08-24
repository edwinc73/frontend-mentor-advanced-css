import { useState } from "react";
import data from "/public/data.json";

function Destination() {
  const { destinations } = data;
  const [destination, setDestination] = useState("Moon");

  const curData = destinations.find((item) => item.name == destination);
  console.log(curData);

  return (
    <section
      id="destination-section"
      className="background-image w-screen h-full"
    >
      <article className="max-w-[1440px] text-center gap-300 mx-auto flex flex-col items-center lg:pt-[160px] h-full md:pb-1600 px-300 lg:px-[165px] pt-[112px] pb-300">
        <div className="destination__title text-white mx-auto">
          <span className="opacity-25 font-bold">01</span>
          <span className="uppercase font-barlowCondense tracking-[0.15rem] ml-300 ">
            pick your destination
          </span>
        </div>
        <div className="destination__img max-w-[150px] flex justify-center items-center">
          <img src={curData.images.png} alt={curData.name} className="" />
        </div>
        <ul className="destination__tabs font-barlowCondense tracking-[0.15rem] flex justify-evenly text-white gap-400">
          {destinations.map(({ name }) => {
            return (
              <li
                key={name}
                className={`pb-100 border-b-2 ${
                  destination == name ? "border-white" : "border-transparent"
                } lg:border-b-2 hover:border-white transition duration-100 ease-in-out`}
              >
                {name}
              </li>
            );
          })}
        </ul>
        <div className="destination__name text-white">
          <h2 className="font-bellefair uppercase text-4xl">{curData.name}</h2>
        </div>
        <div className="destination__body text-blueLight">
          <p className="font-barlow text-[15px]">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
        </div>
        <hr className="opacity-25" />
        <div className="destination__distance">
          <span className="font-barlowCondense text-blueLight text-sm tracking-[0.15rem] uppercase">
            AVG. Distance
          </span>
          <p className="text-white font-bellefair uppercase text-2xl">
            {curData.distance}
          </p>
        </div>
        <div className="destination__travel">
          <span className="font-barlowCondense text-blueLight text-sm tracking-[0.15rem] uppercase">
            EST. travel time
          </span>
          <p className="text-white font-bellefair uppercase text-2xl">
            {curData.travel}
          </p>
        </div>
      </article>
    </section>
  );
}

export default Destination;
