import React from "react";
import HeroBanner from "../components/Organisms/HeroBanner/index";
import Header from "../components/Organisms/Header/index";
import Footer from "../components/Organisms/Footer/index";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Footer></Footer>
    </div>
  );
}
