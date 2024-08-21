import { useFormik } from "formik";
import * as Yup from "yup";
import "./Contact.scss";
import { useEffect } from "react";
import errorIcon from "../../assets/images/icon-error.svg";

function Contact() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log("submitted", values);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Whoops, make sure it's an email")
        .required("Please enter your email"),
    }),
  });

  return (
    <section id="contact-section" className="bg-primary-blue">
      <div className="mx-auto lg:max-w-6xl md:max-w-2xl py-16 px-8 flex flex-col gap-8 w-screen h-full font-rubik text-white text-center">
        <p className=" uppercase tracking-[0.35rem] text-xs font-medium">
          35,000+ already joined
        </p>
        <h4 className="text-2xl lg:text-4xl font-medium max-w-[34rem] mx-auto">
          Stay up-to-date with what we're doing
        </h4>
        <form
          noValidate
          onSubmit={formik.handleSubmit}
          className="flex justify-center flex-col md:flex-row items-center gap-4 h-fit"
        >
          <div className="flex flex-col relative md:w-fit w-full">
            <input
              autoComplete="on"
              placeholder="Enter your email address"
              name="email"
              type="email"
              onBlur={formik.handleBlurf}
              onChange={formik.handleChange}
              value={formik.values.email}
              className={`py-3 text-neutral-dark px-3 font-rubik font-light z-[1] h-12 text-sm md:min-w-80 w-full rounded-md  ${
                formik.errors.email ? "ring-2 ring-secondary-red" : ""
              }`}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-[0.7rem] italic text-left bg-secondary-red w-full ring-2 ring-secondary-red font-regular rounded-md pt-6 z-[0] absolute -bottom-5 pl-3">
                {formik.errors.email}
              </div>
            ) : null}
            {formik.errors.email && formik.touched.email ? (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 z-[6]">
                <img src={errorIcon} alt="error" className="" />
              </div>
            ) : null}
          </div>
          <button
            aria-label="submit email"
            type="submit"
            className={`${
              formik.errors.email ? "mt-5 md:mt-0" : ""
            } red px-6 min-w-32 w-full py-3 font-rubik font-medium rounded-md text-sm shadow-lg border-2 transition duration-150 ease-in-out md:w-fit tracking-wide `}
          >
            Contact us
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
