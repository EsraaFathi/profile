/* eslint-disable no-unused-vars */
import React from "react";
import "./Hero.css";
import laptopAnimation from "../../../public/animation/laptop.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

export default function Hero() {
  const phoneNumber = "201093833112";
  const message = "Hello! I would like to contact you.";

  // Framer Motion Variants for Character Animation
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Delay for each character
        duration: 0.5,
      },
    }),
  };

  const titleText = "Khaled Mohamed ";

  return (
    <>
      <section className="hero flex">
        <div className="left-section">
          {/* <div className="">
            <motion.img
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ damping: 6, type: "spring", stiffness: 100 }}
              src="/LOG1.png"
              className="avatar"
              alt="Khaled_Mohamed Avatar"
            />
            <span className="icon-verified"></span>
          </div> */}

          {/* Title Section */}
          <motion.h2
            initial="hidden"
            animate="visible"
            className="title"
            style={{ display: "flex", gap: "2px" }} // Adjust spacing between characters
          >
            {titleText.split("").map((char, i) => (
              <motion.span key={i} custom={i} variants={titleVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Subtitle Section */}
          <p className="subtitle">
            As a junior full-stack (MEARN) developer from ITI, I am passionate
            about web development, coding, and problem-solving. I have gained
            valuable experience through internships at intensive training
            programs at ITI (SOFTWARE FUNDAMENTALS and MEARN STACK).
          </p>

          {/* Download CV Button */}
          <a href="/Khaled_Mohamed_CV.pdf" download="Khaled_Mohamed_CV.pdf">
            <button>Download CV</button>
          </a>
        </div>

        {/* Right Section */}
        <div className="right-section animationlaptop">
          <Lottie
            onLoadedImages={() => {}}
            animationData={laptopAnimation}
            loop={true}
          />
        </div>
      </section>
    </>
  );
}
