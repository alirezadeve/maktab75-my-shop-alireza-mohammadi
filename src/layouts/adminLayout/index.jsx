import Header from "layouts/homeLayout/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <Header />

      <h1>Admin Tabs</h1>
      <Outlet />
    </>
  );
}
