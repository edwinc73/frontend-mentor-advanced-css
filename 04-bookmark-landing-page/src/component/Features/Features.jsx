import Section from "../Section";
import "./Features.scss";
import img1 from "../../assets/images/illustration-features-tab-1.svg";
import img2 from "../../assets/images/illustration-features-tab-2.svg";
import img3 from "../../assets/images/illustration-features-tab-3.svg";

import SectionTitle from "../SectionTitle";
import { useState } from "react";
import Button from "../Button";

const tabContent = [
  {
    id: 0,
    title: "Simple Bookmarking",
    subTitle: "Bookmark in one click",
    body: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    img: img1,
  },
  {
    id: 1,
    title: "Speedy Searching",
    subTitle: "Intelligent search",
    body: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    img: img2,
  },
  {
    id: 2,
    title: "Easy Sharing",
    subTitle: "Share your bookmarks",
    body: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    img: img3,
  },
];

const FeatureTabs = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="features__tabs flex justify-center mt-12">
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

const TabTitle = ({ id, title, currentTab, setCurrentTab }) => {
  return (
    <button
      aria-label={`${title} feature`}
      onClick={() => {
        setCurrentTab(id);
      }}
      className={` w-64 features__tabItem ${
        currentTab == id ? "active text-neutral-dark font-semibold" : ""
      } font-rubik text-gray-600 border-b-[1px] py-6 px-10 hover:text-secondary-red hover:font-semibold transition-colors duration-200 ease-in-out`}
    >
      {title}
    </button>
  );
};

const TabContent = ({ currentContent, currentTab }) => {
  return (
    <div className="features__tabItem mt-20 flex">
      <div className="features__image relative right highlight before:top-[8rem] w-6/12 h-full ">
        <img
          src={currentContent.img}
          className={`h-[24rem] z-20 ${
            currentTab > 0 ? "translate-x-20 translate-y-2" : "-translate-x-6"
          } `}
          alt=""
        />
      </div>
      <div className="pl-28 max-w-[37rem] features__text_container w-6/12 flex flex-col justify-center gap-6">
        <h2 className="font-rubik text-neutral-dark font-bold text-[2rem]">
          {currentContent.subTitle}
        </h2>
        <p className="font-rubik text-lg tracking-wide text-gray-500">
          {currentContent.body}
        </p>
        <Button type="blue">More Info</Button>
      </div>
    </div>
  );
};

function Features() {
  const [currentTab, setCurrentTab] = useState(0);
  const currentContent = tabContent[currentTab];
  return (
    <Section id="features-section">
      <SectionTitle
        title="Features"
        body="Our aim is to make it quick and easy for you to access your
favourite websites. Your bookmarks sync between your devices so you can
access them on the go."
      ></SectionTitle>
      <FeatureTabs
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      ></FeatureTabs>
      <TabContent
        currentContent={currentContent}
        currentTab={currentTab}
      ></TabContent>
    </Section>
  );
}

export default Features;
