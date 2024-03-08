import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="container">
      <main className="main">
        <article className="artical-feature">
          <h2 className="article-title"></h2>
          <img src="" alt="" className="" />
          <p className="article-info"></p>
          <p className="article-body"></p>
          <a href="" className=""></a>
        </article>

        <article className="artical-recent">
          <div className="artical-recent-main">
            <h2 className="article-title"></h2>
            <p className="article-body"></p>
            <a href="" className=""></a>
          </div>

          <div className="artical-recent-secondary">
            <img src="" alt="" className="" />
            <p className="article-info"></p>
          </div>
        </article>

        <article className="artical-recent"></article>

        <article className="artical-recent"></article>
      </main>
      <aside className="aside"></aside>

      <Footer />
    </div>
  );
};

export default HomePage;
