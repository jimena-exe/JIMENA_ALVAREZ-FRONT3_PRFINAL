import React, { useContext, useState } from "react";
import { createContext } from "react";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const ContextoDelTema = createContext("light");

function ProveedorDelTema({ children }) {
  const [tema, setTema] = useState("light");

  const cambiarTema = () => {
    setTema((temaPrevio) => (temaPrevio === "light" ? "dark" : "light"));
  };

  return (
    <ContextoDelTema.Provider value={{ tema, cambiarTema }}>
      {children}
    </ContextoDelTema.Provider>
  );
}

//Componente

const Navbar = () => {
  const { tema, cambiarTema } = useContext(ContextoDelTema);

  return (
    <nav className={tema}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/home">Home</Link>
      <Link to="/favs">Destacados</Link>
      <Link to="/contact">Contacto</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={cambiarTema}>Change theme</button>
    </nav>
  );
};

export default Navbar;
