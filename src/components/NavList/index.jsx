import React from "react";
import "./NavList.scss";

const NavList = ({ value }) => {
  return (
    <>
      <li>{value}</li>
      <i className="bx bx-chevron-down bx-sm"></i>
    </>
  );
};

export default NavList;
