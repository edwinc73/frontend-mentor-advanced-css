import "./FAQ.scss";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import arrowDown from "../../assets/images/icon-arrow.svg";

import { useState } from "react";
import Button from "../Button";
import { faq } from "./faq";
import PropTypes from "prop-types";

function Faq() {
  return (
    <Section id="faq-section" className="pt-24 pb-36">
      <SectionTitle
        title="Frequently Asked Questions"
        body="Here are some of our FAQs. If you have any other questions
you’d like answered please feel free to email us."
      ></SectionTitle>
      <hr className="max-w-xl mx-auto mt-16" />

      <div className="max-w-xl mx-auto flex flex-col gap-5 mt-5">
        {faq.map((item) => {
          return (
            <FaqItem
              question={item.question}
              answer={item.answer}
              key={item.id}
            ></FaqItem>
          );
        })}
      </div>
      <div className="w-fit mx-auto mt-12">
        <Button>More Info</Button>
      </div>
    </Section>
  );
}

export default Faq;

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        role="button"
        tabIndex="0"
        className="flex flex-col"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <div className="font-rubik flex w-full">
          <div className="flex items-center justify-between w-full pr-4 hover:text-secondary-red transition-colors duration-100 ease-in-out">
            <h4 className="font-normal text-lg">{question}</h4>
            {open ? (
              <img
                src={arrowDown}
                alt="open faq"
                className="h-3 icon-hover rotate-180"
              />
            ) : (
              <img src={arrowDown} alt="open faq" className="h-3" />
            )}
          </div>
        </div>
        {open && (
          <p className="font-rubik text-[1.05rem] leading-loose tracking-wide text-gray-500 mt-8 mb-4">
            {answer}
          </p>
        )}
      </div>
      <hr />
    </>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};
