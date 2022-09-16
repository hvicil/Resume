import React from "react";
import SocialLinks from "./social-links";
import Navbar from "./navbar";
import Logo from "./logo";

const Header = () => {
  return (
    <header id="header" class="sticky-top">
      <nav class="primary-menu navbar navbar-expand-lg navbar-dark bg-dark border-bottom-0">
        <div class="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2">
          <Logo />
          <Navbar />
          <SocialLinks />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#header-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
