import {
  Aside,
  CustomizedInputBase,
  HeaderCounter,
  Logo,
  Menu,
  Slider,
} from "components";
import React from "react";
// import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Aside />
      <header className="header">
        <HeaderCounter className="headerCounterBox" />

        <div className="logo-container">
          <Logo />
        </div>
        <CustomizedInputBase />
        {/* <CustomizedInputBase /> */}
      </header>
      {/* <Menu /> */}
      {/* <Slider />
       */}
    </>
  );
}

{
  /* <header className="header">
        <HeaderCounter className="headerCounterBox" />

        {/* </CustomizedInputBase> 
        <div className="logo-container">
          <Logo />
        </div>
        <CustomizedInputBase />
      </header> */
}
