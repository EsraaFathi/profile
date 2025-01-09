import { Link, Outlet } from "react-router-dom";
import Header from "./1 header/Header";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { TbCircleNumber5 } from "react-icons/tb";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import { SiFreelancer } from "react-icons/si";

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
            href="https://www.linkedin.com/in/esraa-fathy-14673a283/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="iconcolor" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/EsraaFathi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="iconcolor" />
          </a>

          {/* Khamsat */}
          <a
            href="https://khamsat.com/user/israa_fathy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbCircleNumber5 className="iconcolor" />
          </a>

          {/* Mostaql */}
          <a
            href="https://mostaql.com/u/Israa_Fathy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFillRecordCircleFill className="iconcolor" />
          </a>

          {/* Freelancer */}
          <a
            href="https://www.freelancer.com/u/esraafa2411"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiFreelancer className="iconcolor" />
          </a>

          {/* Upwork */}
          <a
            href="https://www.upwork.com/freelancers/~0198105425acf9c172"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiUpwork className="iconcolor" />
          </a>

          {/* Email */}
          <a
            href="mailto:esraafa2411@gmail.com?subject=Hello&body=I would like to connect with you."
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
