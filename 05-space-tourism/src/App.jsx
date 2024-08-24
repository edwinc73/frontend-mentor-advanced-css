import { Link } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <section id="home-section" className="background-image w-screen h-full">
        <div className="max-w-[1440px] mx-auto  flex lg:items-end lg:pt-[160px] h-full min-h-screen md:pb-1600 px-500 lg:px-[165px] pt-1600 pb-300 ">
          <div className="home__container w-full flex flex-col lg:flex-row xl:justify-between items-center gap-800">
            <article className="home__description flex flex-col gap-300 w-full text-center lg:text-left max-w-lg">
              <span className="font-barlowCondense text-blueLight tracking-[0.15rem] md:tracking-wide md:text-2xl">
                SO, YOU WANT TO TRAVEL TO
              </span>
              <h1 className="text-[5rem] md:text-6xl font-bellefair uppercase text-white">
                Space
              </h1>
              <p className="text-blueLight font-barlow lg:text-lg">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </article>
            <div className="home__cta w-full h-full lg:h-fit flex items-center justify-center lg:items-end lg:justify-end">
              <Link to="/destination">
                <button className="bg-white text-blueDark hover:text-opacity-50 relative h-[144px] w-[144px] md:h-[272px] md:w-[272px] uppercase before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:z-0 before:hover:opacity-5 before:opacity-0 before:transition before:duration-100 before:ease-in-out before:rounded-full before:-translate-y-1/2 before:h-[320px] before:w-[320px] md:before:h-[448px] md:before:w-[448px] before:bg-white rounded-full font-bellefair text-lg md:text-3xl">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
{
  /* <>00 Home 01 Destination 02 Crew 03 Technology</> */
}
// So, you want to travel to
//       Space Let’s face it; if you want to go to space, you might as well
//       genuinely go to outer space and not hover kind of on the edge of it. Well
//       sit back, and relax because we’ll give you a truly out of this world
//       experience-contain Explore
