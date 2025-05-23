import React from "react";
import { TypeAnimation } from "react-type-animation";
import { calculateDynamicValue } from "../utils/utils";
const Intro = () => {
  const dynamicValue = calculateDynamicValue();
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark"></div>
        <div
          className="hero-bg parallax"
          style={{ backgroundImage: "url('images/intro-bg.jpg')" }}
        ></div>
        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <div className="typed-strings">
                  <p>I'm Hüseyin</p>
                  <p>I'm a Freelancer.</p>
                  <p>I'm a Developer.</p>
                  <p>I'm a Designer.</p>
                </div>
                <p className="text-7 fw-500 text-white mb-2 mb-md-3">Welcome</p>
                <h1 className="text-white text-18">
                  <TypeAnimation
                    sequence={[
                      "I'm Hüseyin",
                      2000, // Waits 1s
                      "I'm a Freelancer.",
                      2000, // Waits 1s
                      "I'm a Developer.",
                      2000, // Waits 1s
                      "I'm a Designer.",
                      () => {
                        console.log("Done typing!"); // Place optional callbacks anywhere in the array
                      },
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    speed={10}
                  />
                </h1>

                <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                  <span className="typed"></span>
                </h2>
                <p className="text-5 text-light mb-4">based in Germany.</p>
                <a
                  href="#contact"
                  className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
          >
            <span className="animated">
              <i className="fa fa-chevron-down"></i>
            </span>
          </a>{" "}
        </div>
      </div>
    </section>
  );
};
export default Intro;
