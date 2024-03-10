import Footer from "./Footer";
import deco from "../assets/deco.jpg";
import food from "../assets/food.jpg";
import life from "../assets/life.jpg";
import work from "../assets/work.jpg";
import about from "../assets/about-me.jpg";

const HomePage = () => {
  return (
    <>
      <div className="container container-flex">
        <main className="main">
          <article className="article-featured">
            <h2 className="article-title">Finding simplicity in life</h2>
            <img src={life} alt="" className="-order-[3]" />
            <p className="article-info">July 23, 2019 | 3 comments</p>
            <p className="article-body">
              Life can get complicated really quickly, but it doesn't have to
              be! There are many ways to simplify your life,{" "}
              <span className="underline text-[#1792d2]">
                a few of which we've explored in the past.
              </span>{" "}
              This week we're taking a bit of a approach though, in how you can
              find simplicity in the life you already living.
            </p>
            <a href="" className="">
              continue reading
            </a>
          </article>

          <article className="article-recent">
            <div className="article-recent-main">
              <h2 className="article-title">Keeping cooking simple</h2>
              <p className="article-body">
                Food is a very important part of everyone's life. If you want to
                be healthy, you have to eat healthy. One of the easiest ways to
                do that is to keep your cooking nice and simple.{" "}
              </p>
              <a href="" className="">
                continue reading
              </a>
            </div>

            <div className="article-recent-secondary">
              <img src={food} alt="" className="" />
              <p className="article-info">July 19, 2019 | 3 comments</p>
            </div>
          </article>

          <article className="article-recent">
            <div className="article-recent-main">
              <h2 className="article-title">Simplicity and work</h2>
              <p className="article-body">
                Work is often a major source of stress. People get frustrated,
                it ruins their relationship with others and it leads to burnout.
                By keeping your work life as simple as possible, it will help
                balance everything out.{" "}
              </p>
              <a href="" className="">
                continue reading
              </a>
            </div>

            <div className="article-recent-secondary">
              <img src={work} alt="" className="" />
              <p className="article-info">July 12, 2019 | 3 comments</p>
            </div>
          </article>

          <article className="article-recent">
            <div className="article-recent-main">
              <h2 className="article-title">Simple decorations</h2>
              <p className="article-body">
                A home isn't a home until you've decorated a little. People
                either don't decorate, or they go overboard and it doesn't have
                the impact they were hoping for. Staying simple will help draw
                the eye where you want it to and make things pop like never
                before.{" "}
              </p>
              <a href="" className="">
                continue reading
              </a>
            </div>

            <div className="article-recent-secondary">
              <img src={deco} alt="" className="" />
              <p className="article-info">July 3, 2019 | 3 comments</p>
            </div>
          </article>
        </main>
        <aside className="sidebar">
          <div className="sidebar-widget">
            <h2 className="widget-title">About me</h2>
            <img src={about} alt="" className="mt-2" />
            <p className="widget-body">
              I find life better, and I'm happier, when things are nice and
              simple.
            </p>
          </div>

          <div className="sidebar-widget">
            <h2 className="widget-title">Recent posts</h2>
            <div className="widget-recent-post">
              <h3 className="widget-recent-post-title">
                Keeping cooking simple
              </h3>
              <img src={food} alt="" className="widget-image" />
            </div>
            <div className="widget-recent-post">
              <h3 className="widget-recent-post-title">Simplicity and work </h3>
              <img src={work} alt="" className="widget-image" />
            </div>
            <div className="widget-recent-post">
              <h3 className="widget-recent-post-title">Simple decorations</h3>
              <img src={deco} alt="" className="widget-image" />
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
