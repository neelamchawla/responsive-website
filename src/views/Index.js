/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import Hero from "components/Sections/Hero";
import Services from "components/Sections/Services";
import Claims from "components/Sections/Claims";
import Features from "components/Sections/Features";
import Incidiunt from "components/Sections/Incidiunt";
import Contact from "components/Sections/Contact";
import Updated from "components/Sections/Updated";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <Hero />
      <Services />
      <Claims />
      <Features />
      <Incidiunt />
      <Contact />
      <Updated />
      <Footer />
    </>
  );
}
