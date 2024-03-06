import { Outlet } from "react-router-dom";
import Header from "./1 header/Header";

import Footer from "./5 footer/Footer";

import { useEffect, useState } from "react";

function AppLayout() {
  const [showScroll, setshowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.screenY);
      if (window.screenY > 20) {
        setshowScroll(false);
      } else {
        setshowScroll(true);
      }
    });
  }, []);

  return (
    <div>
      <div id="up" className="container">
        <Header />
        <Outlet />
      </div>
      <div className="container1">
        <Footer />
      </div>
      {showScroll && (
        <a style={{ opacity: showScroll ? 1 : 0, transition: "3s" }} href="#up">
          <button className="icon-arrow-up-alt1 scroll2top"></button>
        </a>
      )}
    </div>
  );
}

export default AppLayout;
