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
      <hr className="opacity-0 lg:opacity-100 top-line max-w-xl mx-auto mt-16" />

      <div className="max-w-xl mx-auto flex flex-col gap-5 mt-5">
        {faq.map((item) => {
          return (
            <FaqItem
              question={item.question}
              answer={item.answer}
              key={item.id}
              id={item.id}
            ></FaqItem>
          );
        })}
      </div>
      <div className="w-fit mx-auto mt-12">
        <Button type="blue" label="more faq">
          More Info
        </Button>
      </div>
    </Section>
  );
}

export default Faq;

const FaqItem = ({ question, answer, id }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        role="button"
        aria-expanded={open}
        tabIndex="0"
        aria-controls={`faq-section${id}`}
        className="flex flex-col"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <div className="font-rubik flex w-full">
          <div className="flex items-center justify-between w-full pr-4 hover:text-secondary-red transition-colors duration-100 ease-in-out">
            <h3 className="font-normal lg:text-lg text-normal">{question}</h3>
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
          <div id={`faq-section${id}`}>
            <p className="font-rubik text-[1rem] lg:text-[1.05rem] leading-relaxed lg:leading-loose tracking-wide text-gray-600 mt-8 mb-4">
              {answer}
            </p>
          </div>
        )}
      </div>
      <hr />
    </>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  id: PropTypes.number,
};
