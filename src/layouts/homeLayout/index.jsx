import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer"
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
