import React from "react";
import TableList from "../TableList";
import "./Table.scss";
import Th from "../Th";

const Table = () => {
  return (
    <div className="table-container">
      <ul>
        <TableList value="Sucursal" />
        <TableList color="selected" value="Nivel Organizacional" />
        <TableList value="Trabajador" />
        <TableList value="Tipo" />
        <TableList value="Estado" />
        <TableList value="Fecha" />
      </ul>
      <Th />
    </div>
  );
};

export default Table;
