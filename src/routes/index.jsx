import { Login } from "components";
import Cart from "components/Card/Card.components";
import BasicTabs from "components/Tabs/Tabs";
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
        <Route path="/product/:id" element={<PDP />} />
        <Route path="/cart" element={<Cart />} />

        {/* <Route path="PDP" element={<PDP />} /> */}
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
        <Route path="products" element={<BasicTabs />} />
        <Route path="existence" element={<Existence />} />
      </Route>
    </Routes>
  );
}
