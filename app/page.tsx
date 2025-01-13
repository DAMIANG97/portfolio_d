import React from "react";
import HeroBanner from "../components/Organisms/HeroBanner/index";
import Header from "../components/Organisms/Header/index";
import Footer from "../components/Organisms/Footer/index";
import MainContent from "../components/Organisms/MainContent/index";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
}
