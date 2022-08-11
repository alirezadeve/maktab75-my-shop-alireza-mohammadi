import { CustomizedInputBase, HeaderCounter, Logo } from "components";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <HeaderCounter className="headerCounterBox" />
      <Link to="/login">
        {/* </CustomizedInputBase> */}
        <div className="logo-container">
          <Logo />
        </div>
      </Link>
      <CustomizedInputBase />
    </header>
  );
}
