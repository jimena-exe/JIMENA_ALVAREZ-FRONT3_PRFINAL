import { createContext, useMemo, useState } from "react";
import { data } from "react-router-dom";
import PropTypes from "prop-types";

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {

  const [estado, setEstado] = useState(initialState);

  const cambiarTema =() =>{
    console.log("Cambiando tema...");
    setEstado((previo) => ({
      ...previo,
      theme: previo.theme === 'light' ? 'dark' : 'light',
    }));
  };

  const valorMemo = useMemo(() => ({
    theme: estado.theme,
    data: estado.data,
    cambiarTema,
  }), [estado]);

  return (
    <ContextGlobal.Provider value={{valorMemo}}>
      {children}
    </ContextGlobal.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // 'children' debe ser un nodo React y es obligatorio
};
