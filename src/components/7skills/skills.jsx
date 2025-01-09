import React from "react";
import "./skills.css";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { RiAngularjsFill } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
const Skills = () => {
  return (
    <>
      <div className="skillsContainer">
        <h1 className="header ">Skills</h1>

        <div className="skills">
          <div>
            <FaHtml5 className="skillIcon" />
            <p>Html5</p>
          </div>
          <div className="">
            <IoLogoCss3 className="skillIcon" />
            <p>Css3</p>
          </div>
          <div className="">
            <IoLogoJavascript className="skillIcon" />
            <p>Javascript</p>
          </div>
          <div className="">
            <SiTailwindcss className="skillIcon" />
            <p>Tailwind</p>
          </div>
          <div className="">
            <FaBootstrap className="skillIcon" />
            <p>Bootstrap</p>
          </div>
        </div>
        <div className="skills">
          <div className="">
            <RiReactjsFill className="skillIcon" />
            <p>React js</p>
          </div>
          <div className="">
            <RiAngularjsFill className="skillIcon" />
            <p>Angular</p>
          </div>
          <div className="">
            <FaVuejs className="skillIcon" />
            <p>Vue js</p>
          </div>
          <div className="">
            <FaNodeJs className="skillIcon" />
            <p>Node js</p>
          </div>{" "}
          <div className="">
            <SiMongodb className="skillIcon" />
            <p>Mongodb</p>
          </div>{" "}
        </div>
        <div className="skills">
          <div className="">
            <FaWordpress className="skillIcon" />
            <p>Vue js</p>
          </div>{" "}
          <div className="">
            <FaGithub className="skillIcon" />
            <p>Github</p>
          </div>
          <div className="">
            <SiExpress className="skillIcon" />
            <p>Express js</p>
          </div>
          <div className="">
            <SiRedux className="skillIcon" />
            <p>Redux </p>
          </div>
          <div className="">
            <SiShadcnui className="skillIcon" />
            <p>Shadcn/ui </p>
          </div>
        </div>
        <div className="skills">
          <div className="">
            <IoLogoFirebase className="skillIcon" />
            <p>Firebase</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
