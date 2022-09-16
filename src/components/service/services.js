import React from "react";
import SectionTitle from "../common/section-title/section-title";
import Service from "./service";

const Services = () => {
  return (
    <section id="services" className="section bg-light">
      <div className="container px-lg-5">
        <SectionTitle frontText="What I Do?" backText="Services" />

        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              <div className="col-md-6">
                <Service
                  title="Graphic Design"
                  icon="palette"
                  desc="Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure."
                />
              </div>
              <div className="col-md-6">
                <Service
                  title="Web Design"
                  icon="desktop"
                  desc="Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure."
                />
              </div>
              <div className="col-md-6">
                <Service
                  title="UI/UX Design"
                  icon="ruler"
                  desc="Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure."
                />
              </div>
              <div className="col-md-6">
                <Service
                  title="App Design"
                  icon="brush"
                  desc="Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure."
                />
              </div>
              <div className="col-md-6">
                <Service
                  title="Business Analysis"
                  icon="chart-area"
                  desc="Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure."
                />
              </div>
              <div className="col-md-6">
                <Service
                  title="SEO Marketing"
                  icon="bullhorn"
                  desc="Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
