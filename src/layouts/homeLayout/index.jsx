import { Aside, Login, Menu, Slider } from "components";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function () {
  return (
    <>
      <Aside></Aside>
      <Header />
      <Outlet />
      {/* 
      <div>
        <Menu />
        <Slider />
      </div> */}
      {/* <line /> */}

      {/* <Login />*/}

      {/* <ActionAreaCard handleModalOpen={handleModalOpen} />
      <BasicModal modalOpen={modalOpen} handleModalClose={handleModalClose} />   */}
      <Footer />
    </>
  );
}
