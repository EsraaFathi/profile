import React from "react";
import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

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
              href="https://www.linkedin.com/in/khaled-mohamed08/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="iconcolor" />
            </a>

            {/* GitHub */}
            {/* <a
              href="https://github.com/KhaledMohamed08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="iconcolor" />
            </a> */}

            {/* Email */}
            <a
              href="mailto:khaledmohamed.96@outlook.com?subject=Hello&body=I would like to connect with you."
              title="Send an Email"
            >
              <MdOutlineEmail className="iconcolor" />
            </a>
          </div>
        </section>

        <p> {`<Follow Me  @ Khaled_Mohamed>`} </p>
      </footer>
    </>
  );
}
