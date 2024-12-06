import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/NavBar.css";
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const {theme, cambiarTema} = useContext(ContextGlobal);

  console.log("Tema actual:", theme);
  return (
    <nav className={`containerNavBar ${theme === "dark" ? "dark" : "light"}`}>
      <Link to="/home">Home</Link>
      <Link to="/favs">Destacados</Link>
      <Link to="/contact">Contacto</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={cambiarTema}>Cambiar a {theme === "dark" ? "Claro" : "Oscuro"}</button>
    </nav>
  );
};

export default Navbar;
