import { Login } from "components";
import AdminLayout from "layouts/adminLayout";
import HomeLayout from "layouts/homeLayout";
import { Admin } from "Pages";
import Category from "Pages/Category/Category";
import Existence from "Pages/Existence/Existence";
import Home from "Pages/Home";
import PDP from "Pages/PDP/PDP";
// import Login from "Pages/Login/Login";
// import Admin from "Pages";
import React from "react";
import { Route, Routes } from "react-router-dom";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/category/:category" element={<Category />} />

        {/* <Route path="PDP" element={<PDP />} /> */}
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
        <Route path="existence" element={<Existence />} />
      </Route>
    </Routes>
  );
}
