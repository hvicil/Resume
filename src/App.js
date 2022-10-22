import React from "react";
import Abaout from "./components/about/abaout";
import Contact from "./components/contact/contact";
import Disclaimer from "./components/footer/disclaimer";
import Footer from "./components/footer/footer";
import TermsPolicy from "./components/footer/terms-policy";
import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Resume from "./components/resume/resume";
import Services from "./components/service/services";

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Abaout />
      <Services />
      <Resume />
      <Contact />
      <Footer />
      <TermsPolicy />
      <Disclaimer />
    </>
  );
};

export default App;
