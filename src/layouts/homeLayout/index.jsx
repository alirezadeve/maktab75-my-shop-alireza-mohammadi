import PLP from "Pages/PLP/PLP";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import List from "./List/List.jsx";
// import PlpL from "./PLP/PlpL";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <List />
      {/* <PlpL /> */}
      {/* <PLP /> */}
      <Outlet />

      <Footer />
    </>
  );
}
