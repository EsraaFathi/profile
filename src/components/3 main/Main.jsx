import { useState } from "react";
import "./Main.css";
import { AllProjects } from "./AllProjects";

import { AnimatePresence, motion } from "framer-motion";
import Video from "../video.jsx";
// import { useNavigate } from "react-router-dom";

// const cssProjects=[
//   {title:"one nnnnnnn",subtitle:" subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle",
//   category:"css", imgpath:"./LOG1.jpeg"},
// ]
// const JSProjects=[
//   {title:"one nnnnnnn",subtitle:" subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle",
//   category:"css", imgpath:"./LOG1.jpeg"},
// ]
// const ReactProjects=[
//   {title:"one nnnnnnn",subtitle:" subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle",
//   category:"css", imgpath:"./LOG1.jpeg"},
// ]
// const NodeProjects=[
//   {title:"one nnnnnnn",subtitle:" subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle",
//   category:"css", imgpath:"./LOG1.jpeg"},
// ]
// const AngularProjects=[
//   {title:"one nnnnnnn",subtitle:" subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle",
//   category:"css", imgpath:"./LOG1.jpeg"},
// ]

export default function Main() {
  const [showMore, setShowMore] = useState(false);
  const [showVideo, setshowVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [projectarr, setprojectarr] = useState(AllProjects);

  const [currentActive, setcurrentActive] = useState("all");

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
  const handleShow = (item) => {
    // projectarr.find((x)=>
    //   x.id==id
    // )
    console.log(item);
    setSelectedVideo(item);
    setshowVideo(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    showVideo(false);
  };
  // const navigate = useNavigate();
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
        </section>

        <section className="  flex right-secction ">
          <AnimatePresence>
            {projectarr.map((item) => {
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
                  {/* <img src={item.imgpath} alt=""  
                  className=""  
                  onClick={()=>{
                    setshowVideo(true)
                   }}/> */}

                  <video
                    className="videocard"
                    poster={item.imgpath}
                    type="video/mp4"
                    onClick={() => {
                      handleShow(item);
                      // setshowVideo(true)
                    }}
                  >
                    <source src={item.videoPath} />
                  </video>

                  {selectedVideo && showVideo && selectedVideo === item && (
                    <div className="videoBG  flex">
                      <div className="  containerVID">
                        <div className=" editBGvid">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 2 }}
                            className="sizetitle"
                          >
                            {item.title}
                          </motion.div>

                          <button className="icon-x  editicon " onClick={closeModal} />
                        </div>

                        <div>
                          <Video item={item} />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className=" box">
                    <div className="title">{item.title}</div>
                    <p className="subtitle">
                      {/* {item.subtitle} */}
                      {showMore ? text : `${text.substring(0, 85)}`}
                    </p>
                    <div className="flex icons">
                      <div style={{ gap: "11px" }} className="flex">
                        <a href={item.web} target="-blank">
                          <div className="icon-link"></div>
                        </a>

                        <a href={item.git} target="-blank">
                          <div className="icon-github"> </div>
                        </a>
                        {/* <div className="icon-github" onClick={()=>{navigate('https://github.com/EsraaFathi/Crud-System.git')}}> </div> */}
                      </div>

                      <span>
                        <p className="link flex" onClick={() => setShowMore(!showMore)}>
                          {showMore ? " less" : " more"}

                          <span style={{ alignSelf: "end" }} className="icon-arrow_forward">
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
      </main>
    </>
  );
}
