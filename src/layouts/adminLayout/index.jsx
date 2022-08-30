import Header from "layouts/homeLayout/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <Header />

      {/* <adminMenu /> */}

      <Outlet />
    </>
  );
}
