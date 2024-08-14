import vrImage from "../../assets/images/desktop/image-interactive.jpg";

const ARLeader = () => {
  return (
    <section className="max-w-7xl mx-auto py-36 px-4 md:px-6 lg:px-8 xl:px-10">
      <div className="flex items-end">
        <img src={vrImage} alt="" />
        <div className="p-24 pb-0 pr-0 bg-white ml-[-10rem] ">
          <h2 className="text-6xl font-josefins font-light uppercase tracking-wider leading-[0.92]">
            The leader in interactive VR
          </h2>

          <p className="mt-8 font-alta text-base tracking-wide text-gray-500">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ARLeader;
