function Title({ section, num, title }) {
  return (
    <div
      className={`${section}__title text-white mx-auto md:ml-0 lg:text-left lg:text-2xl lg:mb-300`}
    >
      <span className="opacity-25 font-bold font-barlowCondense tracking-[0.15rem] lg:tracking-wider">
        {num}
      </span>
      <span className="uppercase font-barlowCondense tracking-[0.15rem] ml-300 ">
        {title}
      </span>
    </div>
  );
}

export default Title;
