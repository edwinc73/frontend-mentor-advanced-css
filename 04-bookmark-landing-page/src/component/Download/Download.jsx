import Section from "../Section";
import SectionTitle from "../SectionTitle";
import "./Download.scss";
import chromeIcon from "../../assets/images/logo-chrome.svg";
import firefoxIcon from "../../assets/images/logo-firefox.svg";
import operaIcon from "../../assets/images/logo-opera.svg";
import Button from "../Button";
import dotLine from "../../assets/images/bg-dots.svg";

const downloadContent = [
  { id: 0, version: "62", name: "Chrome", icon: chromeIcon },
  { id: 1, version: "55", name: "Firefox", icon: firefoxIcon },
  { id: 2, version: "46", name: "Opera", icon: operaIcon },
];

const DownloadCard = ({ item }) => {
  const { id, name, icon, version } = item;
  return (
    <div
      className={`h-[23rem] w-72 bg-white shadow-lg flex flex-col justify-end items-center rounded-xl py-6 gap-6 ${
        id == 0 ? "mt-0" : id == 1 ? "mt-10" : "mt-20"
      }`}
    >
      <img src={icon} className="w-24" alt={`${name} icon`} />
      <div className=" text-center font-rubik ">
        <h3 className="font-semibold text-neutral-dark text-xl">
          Add to {name}
        </h3>
        <p className="font-rubik text-gray-400 text-sm mt-2 tracking-wide">
          Minimum version {version}
        </p>
      </div>
      <img src={dotLine} className="w-full" alt="dotted line" />
      <div className="button-container w-full flex justify-center flex-col px-6 items-center">
        <Button label={`install ${name}`} className="w-full" type="blue">
          Add & Install Extension
        </Button>
      </div>
    </div>
  );
};

function Download() {
  return (
    <Section id="download-section" className="pt-44 pb-16">
      <SectionTitle
        body="We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize."
        title="Download the extension"
      ></SectionTitle>
      <div className="download__cards flex justify-center gap-8 mt-12">
        {downloadContent.map((item) => {
          return <DownloadCard item={item} key={item.id}></DownloadCard>;
        })}
      </div>
    </Section>
  );
}

export default Download;
