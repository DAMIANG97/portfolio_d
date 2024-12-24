"use client";
import React, { useState } from "react";
import HeroBanner from "../components/Organisms/HeroBanner/index";
import Header from "../components/Organisms/Header/index";
import Footer from "../components/Organisms/Footer/index";

export default function Home() {
  const [activeCareer, setActiveCareer] = useState("Web Development");

  return (
    <div>
      <Header setActiveCareer={setActiveCareer} />
      <HeroBanner activeCareer={activeCareer} />
      <Footer></Footer>
    </div>
  );
}
