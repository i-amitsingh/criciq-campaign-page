import React, { useRef } from "react";
import "./index.css";

import Nav from "./components/Nav";
import HeroSlide from "./pages/Hero";

const App: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <>
      <Nav />
      <main
        id="main"
        className="snap-y snap-proximity h-screen overflow-y-scroll scroll-smooth no-scrollbar"
        ref={mainRef}
      >
        <HeroSlide />
      </main>
    </>
  );
};

export default App;
