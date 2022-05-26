import React from "react";
import "./TableList.scss";

const TableList = ({ value, color }) => {
  return (
    <>
      <li className={color}>
        {value}
        <i className="bx bx-chevron-down bx-sm"></i>
      </li>
    </>
  );
};

export default TableList;
