import vrImage from "../../assets/images/desktop/image-interactive.jpg";

const ARLeader = () => {
  return (
    <section
      id="ARLeader-section"
      className="max-w-7xl mx-auto lg:py-36 mt-20 py-12 px-5 md:px-6 lg:px-8 xl:px-10"
    >
      <div className="lg:flex items-end">
        <img src={vrImage} className="mx-auto " alt="person using VR headset" />
        <div className="text-center lg:text-left pt-12 lg:pt-24 lg:pl-24 pb-0 pr-0 bg-white lg:ml-[-10rem] outline-white outline-3 ">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-josefins font-light uppercase tracking-wider leading-12">
            The leader in interactive VR
          </h2>

          <p className="mt-3 lg:mt-8 font-alta text-base tracking-wide text-gray-500 max-w-lg mx-auto">
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
