import React from "react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <h1>Admin binamos</h1>
      <Outlet />
    </>
  );
}
