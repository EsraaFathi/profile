import React from "react";
import "./Footer.css";
// import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="flex">
        {/* <ul className="flex">
          <li>
            <NavLink to="/hero">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>

           <li>
    <NavLink to="/hero">

    Experience
    </NavLink>
    </li> 
          <li><a href="">Education</a></li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul> */}
        <section>
          <div className="all-icons flex">
            <div className="icon icon-whatsapp"></div>
            <div className="icon icon-linkedin"></div>
            <div className="icon icon-github"></div>
            <div className="icon icon-facebook"></div>
          </div>
        </section>

        <p>Made by {`<Esraa Fathy @2023>`} </p>
      </footer>
    </>
  );
}
