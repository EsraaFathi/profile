import React from 'react';
import './Hero.css'
import Lottie from 'lottie-react';
import laptopAnimation from'../../../public/animation/laptop.json'
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <>
    <section className="hero flex ">
<div className="left-section ">

<div className=" parent-avatar ">
  <motion.img 
  initial={{transform:"scale(0)"}}
  animate={{transform:"scale(1)"}}
  transition={{damping:6, type:"spring",stiffness:100}}
  src="/LOG1.png" className='avatar' alt="" />
  <span className='icon-verified'></span>
</div>

<motion.h1 
initial={{scale:0}}
animate={{scale:1}}
transition={{duration:2}}
className="title">
Esraa Fathy Ahmed
</motion.h1>
<p className="subtitle">
As a jenior full stack (MEARN)developer from ITI, I am passionate about web development, coding and problem-         
solving. I have gained valuable experience through internships at intensive training programs at ITI .(SOFTWARE    
FUNDEMENTALS and MEARN STACK) 

</p>

<div className="all-icons flex">
  <div className="icon icon-whatsapp"></div>
  <div className="icon icon-linkedin"></div>
  <div className="icon icon-github"></div>
  <div className="icon icon-facebook"></div>
</div>
</div>


{/*  */}
<div className="right-section animationlaptop  ">
<Lottie  
          onLoadedImages={() => {
            
          }
          }
          animationData={laptopAnimation} loop={true} />
</div>
    </section>
    </>
  );
}
