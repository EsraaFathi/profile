/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Main.css";
import { AllProjects } from "./AllProjects";

import { AnimatePresence, motion } from "framer-motion";

export default function Main() {
  const [projectarr, setprojectarr] = useState(AllProjects);

  const [currentActive, setcurrentActive] = useState("all");
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [showAll, setShowAll] = useState(false); // State for "Show More" functionality

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);
    const cssProjects = AllProjects.filter((item) => {
      const filterArr2 = item.category.filter((item2) => {
        return item2 === buttonCategory;
      });

      return filterArr2[0] === buttonCategory;
    });
    setprojectarr(cssProjects);
  };

  const toggleShowMore = (id) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const displayedProjects = showAll ? projectarr : projectarr.slice(0, 3);

  return (
    <>
      <main className="flex main">
        <section className=" flex left-section ">
          <button
            onClick={() => {
              setcurrentActive("all");

              setprojectarr(AllProjects);
            }}
            className={currentActive === "all" ? "active" : null}
          >
            all projects
          </button>
          <button
            onClick={() => {
              handleClick("css");
            }}
            className={currentActive === "css" ? "active" : null}
          >
            HTML & CSS
          </button>
          <button
            onClick={() => {
              handleClick("js");
            }}
            className={currentActive === "js" ? "active" : null}
          >
            Javascript
          </button>
          <button
            onClick={() => {
              setcurrentActive("React");
              const ReactProjects = AllProjects.filter((item) => {
                // by using find()
                const filterArr2 = item.category.find((item2) => {
                  return item2 === "react";
                });

                return filterArr2 === "react";
              });

              setprojectarr(ReactProjects);
            }}
            className={currentActive === "React" ? "active" : null}
          >
            React js
          </button>
          <button
            onClick={() => {
              handleClick("node");
            }}
            className={currentActive === "node" ? "active" : null}
          >
            Node & Express
          </button>
          <button
            onClick={() => {
              handleClick("angular");
            }}
            className={currentActive === "angular" ? "active" : null}
          >
            Angular
          </button>
          <button
            onClick={() => {
              handleClick("vue");
            }}
            className={currentActive === "vue" ? "active" : null}
          >
            Vue js
          </button>
          <button
            onClick={() => {
              handleClick("wordpress");
            }}
            className={currentActive === "wordpress" ? "active" : null}
          >
            Wordpress
          </button>
        </section>
        <div className="show">
          <section className="  flex right-secction ">
            <AnimatePresence>
              {displayedProjects.map((item) => {
                const text = item.subtitle;
                return (
                  <motion.article
                    key={item.imgpath}
                    layout
                    initial={{ transform: "scale(0)" }}
                    animate={{ transform: "scale(1)" }}
                    exit={{ transform: "scale(0)" }}
                    transition={{ type: "spring", damping: 8, stiffness: 50 }}
                    className=" card"
                  >
                    <img src={item.imgpath} alt="" className="videocard" />

                    <div className=" box">
                      <div className="title">{item.title}</div>
                      <p className="subtitle">
                        {expandedProjectId === item.id
                          ? item.subtitle
                          : `${item.subtitle.substring(0, 85)}`}
                      </p>
                      <div className="flex icons">
                        <div style={{ gap: "11px" }} className="flex">
                          <a href={item.web} target="-blank">
                            <div className="icon-link"></div>
                          </a>
                          {currentActive === "wordpress" ? (
                            <img
                              src="./wordpress.png"
                              alt=""
                              className="wordpress"
                            />
                          ) : (
                            <a href={item.git} target="-blank">
                              <div className="icon-github"> </div>
                            </a>
                          )}
                        </div>

                        <span>
                          <p
                            className="link flex"
                            onClick={() => toggleShowMore(item.id)}
                          >
                            {expandedProjectId === item.id ? "less" : "more"}
                            <span
                              style={{ alignSelf: "end" }}
                              className="icon-arrow_forward"
                            >
                              {" "}
                            </span>
                          </p>
                        </span>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </section>
          {projectarr.length > 3 && (
            <button className="show-more-btn" onClick={toggleShowAll}>
              {showAll ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      </main>
    </>
  );
}
