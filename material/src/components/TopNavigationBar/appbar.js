import React from "react";
import NeramLogo from "./Childrens/logo";
import ActAppBar from "./Childrens/actAppbar";
import NavMenu from "./Childrens/menuItems";

function NeramAppBar() {
  return (
    <div className="position-fixed w-100">
      <div className="px-3 d-flex container">
        <NeramLogo />
        <NavMenu />
        <ActAppBar />
      </div>
    </div>
  );
}

export default NeramAppBar;
