import { Outlet } from "react-router-dom";
import Header from "./1 header/Header";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

import Footer from "./5 footer/Footer";
import "./2 hero/Hero.css";
// import Lottie from "lottie-react";

import { useEffect, useState } from "react";

function AppLayout() {
  const [showScroll, setshowScroll] = useState(false);
  const phoneNumber = "201110496272";
  const message = "Hello! I would like to contact you.";
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
      <div className="flex">
        <div className="all-icons flex flex-col mylinks  mylinksdisplay sideIcon">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="iconcolor" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/khaled-mohamed08/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="iconcolor" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/KhaledMohamed08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="iconcolor" />
          </a>

          {/* Email */}
          <a
            href="mailto:khaledmohamed.96@outlook.com?subject=Hello&body=I would like to connect with you."
            title="Send an Email"
          >
            <MdOutlineEmail className="iconcolor" />
          </a>
        </div>

        <div id="up" className="container">
          <Header />
          <Outlet />
        </div>
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
