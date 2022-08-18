import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./Header/Header";
import List from "./List/List.jsx";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <List />
      <Outlet />

      <Footer />
    </>
  );
}
