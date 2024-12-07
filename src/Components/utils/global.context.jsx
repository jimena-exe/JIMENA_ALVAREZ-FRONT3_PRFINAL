import { createContext, useMemo, useState } from "react";
// import { data } from "react-router-dom";
// import PropTypes from "prop-types";, data: [{backgroundColor: "#fff"}]

export const initialState = {theme: "light", data:[{backgroundColor:" #fff", color:"black"}]} 

export const ContextGlobal = createContext(initialState);

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
    cambiarTema,
  }), [estado.theme]);
  

  return (
    <ContextGlobal.Provider value={{valorMemo}}>
      {children}
    </ContextGlobal.Provider>
  );
};


// ContextProvider.propTypes = {
//   children: PropTypes.node.isRequired, // 'children' debe ser un nodo React y es obligatorio
// };

// , data: [{backgroundColor: "#fff"}]