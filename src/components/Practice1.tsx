const practice1 = () => {
  return (
    <>
      <div className="bg-[#000] text-white w-[580px] my-0 mx-auto p-[45px] border-2 border-[#ffd700]">
        <h1 className="text-[24px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam.
        </h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur,{" "}
          <span className="text-[#ffd700] font-medium">adipisicing elit</span>.
          Soluta quia ad praesentium delectus dolore accusamus. Consectetur
          placeat mollitia,{" "}
          <strong className="bg-[yellow] text-[#000] px-2 mr-1">
            quo id dolores
          </strong>
          llam necessitatibus quis doloribus.
        </p>
        <p className="links mt-5">
          <a
            href="https://tailwind-workshop.vercel.app/introduction"
            className="button mr-3"
          >
            Contact me
          </a>
          <a href="" className="button">
            Learn more about me
          </a>
        </p>
      </div>
    </>
  );
};

export default practice1;
