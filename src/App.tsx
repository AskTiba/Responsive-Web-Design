const App = () => {
  return (
    <header className="bg-[#f8f8f8] py-[2em]">
      <div className="container w-[92%] mx-auto flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-[2rem] font-[Lora] font-[400] text-[#143774]">
            Living the simple life.
          </h1>
          <p className="text-[#1792d2] text-[.75rem] -mt-[.5em]">
            A blog exploring minimalism in life.
          </p>
        </div>
        <nav className="">
          <ul className="flex gap-[1em] justify-center">
            <li className="">
              <a href="#" className="underline">
                Home
              </a>
            </li>
            <li className="">
              <a href="#">About Me</a>
            </li>
            <li className="">
              <a href="#">Recent Posts</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default App;
