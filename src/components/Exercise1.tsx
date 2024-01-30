import image from "../assets/boardwalk.png"

const exercise1 = () => {
  return (
    <>
      <div className="w-[450px] mx-auto ">
        <h1 className="text-[48px] font-[700] text-center text-[#2e7ad3] my-[35px]">
          An awesome blog
        </h1>

        <div className="p-[25px] bg-[#f1f1f1] mt-[35px]">
          <h2 className="text-[32px] text-[#104c90] font-[700] mb-[20px]">
            An awesome blog post
          </h2>
          <img src={image} className="" />
          <p className="mt-[25px]">
            Lorem ipsum dolor sit,{" "}
            <a href="" className="">
              amet consectetur
            </a>{" "}
            adipisicing elit. Suscipit rem sed deleniti perspiciatis numquam
            assumenda, omnis nemo natus cum, dolorem ipsum, quas sit.
          </p>
          <p className="mt-[9px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            <a href="">Blanditiis voluptatibus</a> assumenda neque? Sunt harum
            ducimus , dolore voluptatum facilis eos a id, , dolores maxime
            nostrum voluptas hic!
          </p>
          <p className="my-0">
            <a href="" className="my-0">
              Read more...
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default exercise1;
