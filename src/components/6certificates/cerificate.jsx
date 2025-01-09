/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./certificate.css";
import { AllCertificates } from "./allcertificates";

import { AnimatePresence, motion } from "framer-motion";

export default function Certificates() {
  const [projectarr, setprojectarr] = useState(AllCertificates);

  return (
    <>
      <main className=" main">
        <h1 className="header ">Certificates</h1>
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
                  <img src={item.imgpath} alt="" className="videocard" />

                  <div className=" box">
                    <div className="title">{item.title}</div>
                    {item.to && item.from ? (
                      <>
                        <p className="date">From :{item.from}</p>
                        <div className="flex flexCer">
                          <p className="date"> To:{item.to}</p>

                          <a href={item.web} target="-blank">
                            <div className="icon-link"></div>
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex flexCer">
                          <p className="date">
                            Completion Date: {item.completion}
                          </p>
                          <a href={item.web} target="-blank">
                            <div className="icon-link"></div>
                          </a>
                        </div>
                      </>
                    )}

                    <span></span>
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
