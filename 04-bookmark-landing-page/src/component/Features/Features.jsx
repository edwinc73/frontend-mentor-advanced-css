import Section from "../Section";
import "./Features.scss";

import SectionTitle from "../SectionTitle";
import { useState } from "react";
import Button from "../Button";
import { tabContent } from "./tabContent";
import { FeatureTabs } from "./FeatureTabs";

const TabContent = ({ currentContent, currentTab }) => {
  return (
    <div
      role="tabpanel"
      className="features__tabItem lg:max-w-6xl md:max-w-2xl mx-auto mt-20 flex flex-col lg:flex-row gap-20 lg:gap-0"
    >
      <div className="features__image relative feature__highlight mx-auto lg:w-6/12 h-full ">
        <img
          loading="lazy"
          src={currentContent.img}
          className={`lg:h-[24rem] z-20 ${
            currentTab > 0
              ? " lg:translate-x-20 -translate-y-1 lg:translate-y-2"
              : "lg:-translate-x-6"
          } `}
          alt=""
        />
      </div>
      <div className="lg:pl-28 max-w-[37rem] mx-auto features__text_container lg:w-6/12 flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-6 text-center lg:text-left">
        <h2 className=" text-[1.4rem] font-rubik text-neutral-dark font-bold text-[2rem]">
          {currentContent.subTitle}
        </h2>
        <p className="font-rubik text-sm leading-[1.6rem] max-w-[19rem] md:max-w-[25rem] lg:max-w-[36rem] lg:text-lg tracking-wide text-gray-500">
          {currentContent.body}
        </p>
        <div className="hidden lg:block">
          <Button type="blue" label={`more info about ${currentContent.title}`}>
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
};

function Features() {
  const [currentTab, setCurrentTab] = useState(0);
  const currentContent = tabContent[currentTab];
  return (
    <Section id="features-section" className="py-16 px-8">
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
