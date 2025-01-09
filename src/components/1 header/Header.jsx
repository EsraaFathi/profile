import { useState } from "react";
import "./Header.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme == "light") {
      document.body.classList.remove("dark");

      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");

      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <>
      <header className=" flex">
        <div />
        <button
          onClick={() => {
            setshowModal(true);
          }}
          className="menue icon-th-menu flex"
        ></button>

        <nav>
          <ul className="flex">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/hero">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/certificates">Certificates</NavLink>
            </li>

            {/* <li>
    <NavLink to="/hero">

    Experience
    </NavLink>
    </li> */}
            {/* <li><a href="">Education</a></li> */}

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => {
            localStorage.setItem(
              "currentMode",
              theme == "dark" ? "light" : "dark"
            );
            setTheme(localStorage.getItem("currentMode"));
          }}
          className="mode flex"
        >
          <span className="icon-moon-stroke"></span>
        </button>
        {/*  */}
        {showModal && (
          <div className=" fixed">
            <ul className="modal ">
              <li>
                <button
                  className="icon-x"
                  onClick={() => {
                    setshowModal(false);
                  }}
                />
              </li>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/hero">About</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/skills">Skills</NavLink>
              </li>
              <li>
                <NavLink to="/certificates">Certificates</NavLink>
              </li>

              {/* <li>
    <NavLink to="/hero">

    Experience
    </NavLink>
    </li> */}
              {/* <li><a href="">Education</a></li> */}

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
