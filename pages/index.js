import { Fragment, useEffect } from "react";

import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import Cards from "../components/Cards/Cards";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }),
    [];

  return (
    <Fragment>
      <Navigation />
      <Hero />
      <Cards />
      <Features />
      <Footer />
    </Fragment>
  );
}
