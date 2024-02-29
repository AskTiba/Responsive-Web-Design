import img from "../assets/boardwalk.png";

const Exercise2 = () => {
  return (
    <>
      <main className="">
        <div className="">
          <header className="bg-[#145858]">
            <div className="wrapper">
              <h1 className="text-white">CSS is a lot of fun</h1>
            </div>
          </header>
          <section className="text-[#555]">
            <div className="wrapper">
              <h2 className="font-[700]">Section One Title</h2> 
              <img src={img} alt="" className="mt-5" />
              <p className="mt-5">
                Lorem ipsum dolor sit amet{" "}
                <a href="" className="">
                  consectetur adipisicing
                </a>{" "}
                elit. In perferendis dolorem maxime, alias tempora facere.
              </p>
            </div>
          </section>
          <section className="bg-[#145858] text-white">
            <div className="wrapper">
              <h2 className="font-[700]">Section Two Title</h2>
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore qui maiores quisquam explicabo nesciunt harum laudantium
                aperiam sapiente error, quas, temporibus sit modi, ad
                dignissimos.
              </p>
              <p className="">
                Lorem{" "}
                <a href="" className="">
                  ipsum dolor
                </a>{" "}
                sit amet consectetur adipisicing elit. Sapiente, doloribus.
                Tempora ratione sed fugit modi molestias veritatis consectetur
                assumenda, quibusdam nulla ad iure maxime alias.
              </p>
              <div className="flex gap-10">
                <button className="button bg-[#f7b318] text-white hover:bg-green-600 hover:text-black ">
                  Contact us
                </button>
                <button className="button hover:bg-blue-600 hover:text-white ">
                  More info
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Exercise2;
