import image from "../assets/elephants1.jpg";
const Practice3 = () => {
  return (
    <div className="container">
      <header className="">
        <h1 className="my-[.5em]">
          Let's start <span className="text-[#B7832F]">getting a little</span>{" "}
          more fancy
        </h1>
        <img src={image} alt="" />
      </header>
      <section className="columns">
        <div className="col col-1">
          <h2 className="">Lorem, ipsum dolor.</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            saepe consequatur vitae rem culpa amet expedita dignissimos,
            perferendis beatae quas doloremque recusandae delectus minima porro
            corrupti nesciunt veniam pariatur dolor officiis nihil voluptatem
            eum voluptatum. Rerum vitae perferendis cum ratione?
          </p>
        </div>
        <div className="col col-2">
          <h2 className="">Lorem, ipsum.</h2>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            assumenda, deserunt in doloribus unde dolorum error facilis
            nesciunt. Rerum magni, veritatis eligendi quasi distinctio ipsam
            laudantium quaerat ad provident excepturi saepe, laborum eos
            incidunt sunt expedita aliquam harum qui voluptatem!
          </p>
          <p className="mt-[1em]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            nisi, vitae dolore atque est et a nihil repudiandae quas iste
            laudantium porro, hic consectetur pariatur deserunt facere, velit
            quos odit fuga. Deleniti.
          </p>
        </div>
        <div className="col col-1 col-dark">
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ipsa
            ab aspernatur corporis optio cupiditate. Sint culpa quae sit saepe
            tempora maxime laudantium omnis aut, iusto dicta praesentium ipsa.
            Veritatis natus cumque molestias consectetur voluptatibus provident
            ipsam? Vitae perferendis ab laboriosam provident eum. Nemo, dolore!
          </p>
        </div>
      </section>
      <section className="columns">
        <div className="col col-3">
          <h2 className="">Lorem ipsum dolor sit amet consectetur.</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi
            velit, necessitatibus alias recusandae deleniti, amet magnam nulla,
            autem quasi natus est cum quod. Assumenda amet hic animi,
            voluptatum, voluptate modi itaque eveniet illum reprehenderit
            quaerat quasi debitis temporibus? Blanditiis rem quisquam nulla hic
            molestiae sequi aut itaque illum accusamus?
          </p>
        </div>
        <div className="col col-1 col-dark">
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            laborum ipsa maiores sunt. Porro harum nisi rem soluta praesentium
            dolorem nostrum tempora molestias exercitationem non.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Practice3;
