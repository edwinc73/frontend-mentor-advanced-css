import "./App.css";
import image from "/src/assets/images/image-equilibrium.jpg";
import icon from "/src/assets/images/icon-ethereum.svg";
import avatar from "/src/assets/images/image-avatar.png";
import timeIcon from "/src/assets/images/icon-clock.svg";
import previewIcon from "/src/assets/images/icon-view.svg";
function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-darkMain">
        <div className="w-[360px] justify-center items-center flex-col font-outfit text-white bg-card rounded-2xl p-6 shadow-2xl">
          <button
            aria-label="view image"
            className="relative rounded-lg overflow-hidden"
          >
            <img
              src={image}
              alt="Equilibrium #3429"
              className=" w-[312px] h-[312px]"
            />
            <span className="w-full h-full flex justify-center items-center bg-secondary bg-opacity-50 img-hover cursor-pointer opacity-0 transition duration-150 ease-in-out absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              <img src={previewIcon} alt="view image" className="" />
            </span>
          </button>
          <h1 className="font-outfit text-2xl font-semibold mt-6 cursor-pointer link-hover transition duration-150 ease-in-out w-fit">
            Equilibrium #3429
          </h1>
          <p className="text-primary font-light opacity-70 text-lg mt-4">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="flex justify-between mt-4">
            <div className="text-secondary flex gap-2">
              <img
                src={icon}
                alt="etherium"
                className="w-[9px] object-contain"
              />
              0.041 ETH
            </div>
            <div className="flex items-center gap-2">
              <img src={timeIcon} alt="time Icon" />
              <p className="text-primary opacity-90">3 days left</p>
            </div>
          </div>
          <hr className="accent-dark my-4" />
          <span className="flex gap-1 items-center">
            <img
              src={avatar}
              alt="avatar"
              className="w-9 border rounded-full mr-3"
            />
            <span className="text-primary opacity-70">Creation of</span>
            <a
              href="/"
              className="link-hover transition duration-150 ease-in-out"
            >
              Jules Wyvern
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
