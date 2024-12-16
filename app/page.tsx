"use client";
import React, { useState } from "react";
import HeroBanner from "@/components/HeroBanner/heroBanner";
import Header from "../components/Header/header";

export default function Home() {
  const [activeCareer, setActiveCareer] = useState("Web Development");

  return (
    <div>
      <Header setActiveCareer={setActiveCareer} />
      <HeroBanner activeCareer={activeCareer} />
      <h1>Aktualna Kariera: {activeCareer}</h1>
    </div>
  );
}
