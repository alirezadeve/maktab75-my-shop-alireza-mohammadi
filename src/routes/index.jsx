import { Login } from "components";
import AdminLayout from "layouts/adminLayout";
import HomeLayout from "layouts/homeLayout";
import { Admin } from "Pages";

import React from "react";
import { Route, Routes } from "react-router-dom";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
      </Route>
    </Routes>
  );
}
