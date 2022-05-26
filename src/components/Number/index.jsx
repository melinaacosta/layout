import React from "react";
import Boxes from "../Boxes";
import "./Number.scss";

const Number = () => {
  return (
    <>
      <div className="title-container">
        <div>
          <i className="bx bx-calendar bx-lg"></i>
          <h1>Vista de Asistencia</h1>
        </div>
        <div className="boxes-buttons">
          <i className="bx bx-download bx-xs classic"></i>
          <i className="bx bx-loader bx-xs refresh"></i>
        </div>
      </div>
      <div className="boxes-container">
        <Boxes color="alert" number="3" name="Tardanzas" />
        <Boxes color="alert null" number="0" name="Almuerzo Extendido" />
        <Boxes color="alert" number="5" name="Retiros Tempranos" />
        <Boxes color="alert" number="3" name="Sobre tiempos" />
        <Boxes color="acceptable" number="7" name="Ausencias" />
        <Boxes color="other null" number="0" name="Vacaciones" />
        <Boxes color="other" number="4" name="Incapacidades" />
        <Boxes color="other" number="9" name="Otras Eventualidades" />
      </div>
    </>
  );
};

export default Number;
