/* eslint-disable no-unused-vars */
import React from "react";
import Lottie from "lottie-react";

import conyactAnimation from "../../../public/animation/contact.json";

import doneAnimation from "../../../public/animation/done.json";
import "./Contact.css";
import { ValidationError, useForm } from "@formspree/react";
export default function Contact() {
  const [state, handleSubmit] = useForm("xeqbwlwl");

  return (
    <>
      <section className="contactus">
        <h1 className="title">
          <span className="icon-email"></span>
          Contact Us
        </h1>

        <p className="subtitle">
          I'm pleased to message me on my email. Feel free to reach out anytime
          at [khaledmohamed.96@outlook.com] or leave your message here.
        </p>

        <div style={{ justifyContent: "space-between" }} className=" flex">
          <form onSubmit={handleSubmit} className="">
            <div className="flex">
              <label htmlFor="email">Email Adress</label>
              <input
                autoComplete="off"
                // placeholder="Email Adress"
                required
                type="email"
                id="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div style={{ marginTop: "24px" }} className="flex">
              <label htmlFor="textarea">Your Message</label>
              <textarea
                required
                // placeholder="Type your message"
                name="textarea"
                className="textarea"
                id="textarea"
              ></textarea>
              <ValidationError
                prefix="Textarea"
                field="textarea"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="submit"
            >
              {state.submitting ? "submitting..." : "submit"}
            </button>
            {state.succeeded && (
              <p
                className="flex"
                style={{ fontSize: "18px", marginTop: "1.7rem" }}
              >
                <Lottie
                  style={{ height: "55px" }}
                  animationData={doneAnimation}
                  loop={false}
                />
                Your message sent successfully !
              </p>
            )}
          </form>
          <div className=" flex animation">
            <Lottie
              className="conyactAnimation"
              animationData={conyactAnimation}
              loop={true}
            />
          </div>
        </div>
      </section>
    </>
  );
}
