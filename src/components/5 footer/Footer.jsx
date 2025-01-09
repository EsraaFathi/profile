// /* eslint-disable no-unused-vars */
// import React from "react";
// // import "./Footer.css";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   const phoneNumber = "201110496272";
//   const message = "Hello! I would like to contact you.";
//   return (
//     <>
//       <footer className="flex">
//         <section>
//           <div className="all-icons flex">
//             <a
//               href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//                 message
//               )}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <div className="icon all-icons icon-whatsapp"></div>
//             </a>
//             <Link to="https://www.linkedin.com/in/esraa-fathy-14673a283/">
//               <div className="icon  all-icons icon-linkedin"></div>
//             </Link>
//             <Link to="https://github.com/EsraaFathi">
//               <div className="icon all-icons icon-github"></div>
//             </Link>
//             <Link to="https://www.facebook.com/esraa.fathy.33865854/">
//               {" "}
//               <div className="icon all-icons icon-facebook"></div>
//             </Link>
//           </div>
//         </section>

//         <p>Made by {`<Esraa Fathy @2023>`} </p>
//       </footer>
//     </>
//   );
// }
import React from "react";
import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { TbCircleNumber5 } from "react-icons/tb";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import { SiFreelancer } from "react-icons/si";
// import { NavLink } from "react-router-dom";

export default function Footer() {
  const phoneNumber = "201110496272";
  const message = "Hello! I would like to contact you.";
  return (
    <>
      <footer className="flex">
        <section className="displayfooter">
          <div className="all-icons flex  mylinks ">
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
        </section>

        <p>Made by {`<Esraa Fathy @2023>`} </p>
      </footer>
    </>
  );
}
