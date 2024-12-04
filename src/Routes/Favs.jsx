import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;

/**En esta pagina se debera renderizar las Cards pertinentes a los dentistas destacados. Dicha información deberá estar almacenada dentro del localStorage del browser y ser consumida dentro de la pagina

    Se deberá estar en la ruta /favs.
 */
