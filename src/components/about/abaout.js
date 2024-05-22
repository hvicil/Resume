import React from "react";
import SectionTitle from "../common/section-title/section-title";
import Counter from "./counter";
import { calculateDynamicValue } from "../utils/utils";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container px-lg-5">
        <SectionTitle frontText="Know Me More" backText="About Me" />
        <div className="row gy-5">
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2 className="text-7 fw-600 mb-3">
              I'm <span className="text-primary">Hüseyin Vicil,</span> a Web
              Developer
            </h2>
            <p>
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. When an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              Delivering work within time and budget which meets client`s
              requirements is our motto. Lorem Ipsum has been the industry's
              standard dummy text ever when an unknown printer took a galley.
            </p>
          </div>
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul className="list-style-2">
                <li className="">
                  <span className="fw-600 me-2">Name:</span>Hüseyin Vicil
                </li>
                <li className="">
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:email@mail.com">email@mail.com</a>
                </li>
                <li className="">
                  <span className="fw-600 me-2">Age:</span>35
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Germany
                </li>
              </ul>
              <a href="#" className="btn btn-primary rounded-pill">
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="brands-grid separator-border mt-5">
          <div className="row">
            <div className="col-6 col-md-3">
              <Counter name="Years Experience" value="10" sign="+" />
            </div>
            <div className="col-6 col-md-3">
              <Counter name="Happy Clients" value="250" sign="+" />
            </div>
            <div className="col-6 col-md-3">
              <Counter name="Projects Done" value="650" sign="+" />
            </div>
            <div className="col-6 col-md-3">
              <Counter
                name="My Love"
                value={calculateDynamicValue()}
                sign="%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
