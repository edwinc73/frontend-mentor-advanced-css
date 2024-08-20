import "./FAQ.scss";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import arrowDown from "../../assets/images/icon-arrow.svg";
import { useState } from "react";
import Button from "../Button";

function Faq() {
  return (
    <Section id="faq-section">
      <SectionTitle
        title="Frequently Asked Questions"
        body="Here are some of our FAQs. If you have any other questions
you’d like answered please feel free to email us."
      ></SectionTitle>
      <hr className="max-w-xl mx-auto mt-16" />

      <div className="max-w-xl mx-auto flex flex-col gap-5 mt-5">
        {faq.map((item) => {
          return (
            <>
              <FaqItem question={item.question} answer={item.answer}></FaqItem>
              <hr />
            </>
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
          <img src={arrowDown} alt="open faq" className="h-3" />{" "}
        </div>
      </div>
      {open && (
        <p className="font-rubik text-[1.05rem] leading-loose tracking-wide text-gray-500 mt-8 mb-4">
          {answer}
        </p>
      )}
    </div>
  );
};

const faq = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit. More Info 35,000+ already joined Stay up-to-date with what we’re doing Contact Us Features Pricing Contact.",
  },
];
