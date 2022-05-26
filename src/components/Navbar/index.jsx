import React from "react";
import NavList from "../NavList";
import Logo from "../../assets/sia-logo.jpg";
import Profile from "../../assets/profile.png";
import "./Navbar.scss";

const index = () => {
  return (
    <nav>
      <img className="nav-logo" src={Logo} alt="logo" />
      <ul>
        <p className="info">Tiempo</p>
        <NavList value="Vistas" />
        <NavList value="Organizacion" />
        <NavList value="Asistencia" />
        <NavList value="Productividad" />
        <NavList value="Reportes" />
        <NavList value="Ajustes" />
      </ul>
      <div className="nav-login">
        <i className="bx bx-search bx-md"></i>
        <img src={Profile} alt="profile" />
        <i className="bx bx-log-in-circle bx-sm info"></i>
      </div>
    </nav>
  );
};

export default index;
