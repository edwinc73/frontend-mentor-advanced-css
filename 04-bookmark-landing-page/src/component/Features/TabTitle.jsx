export const TabTitle = ({ id, title, currentTab, setCurrentTab }) => {
  return (
    <button
      role="tab"
      aria-selected={currentTab == id}
      aria-label={`${title} feature`}
      onClick={() => {
        setCurrentTab(id);
      }}
      className="features__tabTitle relative w-full flex justify-center items-center"
    >
      <hr className="top-line hidden w-full absolute left-0 right-0 top-0" />
      <span
        className={`lg:w-64 features__tabItem ${
          currentTab == id ? "active text-neutral-dark font-medium" : ""
        } font-rubik text-gray-500 font-medium py-5 lg:py-6 px-2 lg:px-10 border-b-[4px] border-white hover:text-secondary-red hover:font-medium transition-colors duration-200 ease-in-out`}
      >
        {title}
      </span>
      <hr className="w-full absolute left-0 right-0 bottom-0" />
    </button>
  );
};
