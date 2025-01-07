"use client";

import React, { createContext, useContext, useState } from "react";

interface GlobalContextType {
  activeCareer: string;
  setActiveCareer: (career: string) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeCareer, setActiveCareer] = useState("Web Development");

  return <GlobalContext.Provider value={{ activeCareer, setActiveCareer }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
