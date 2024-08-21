import { TabTitle } from "./TabTitle";
import { tabContent } from "./tabContent";

export const FeatureTabs = ({ currentTab, setCurrentTab }) => {
  return (
    <div
      role="tablist"
      className="features__tabs lg:max-w-6xl md:max-w-2xl mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start mt-8 lg:mt-12"
    >
      {tabContent.map((item) => (
        <TabTitle
          currentTab={currentTab}
          key={item.id}
          id={item.id}
          title={item.title}
          setCurrentTab={setCurrentTab}
        ></TabTitle>
      ))}
    </div>
  );
};
