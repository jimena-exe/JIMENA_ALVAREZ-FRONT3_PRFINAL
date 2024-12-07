import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import axios from "axios";
import "../Components/styles/Home.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
  const [chars, setChars] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url)
      .then((respuesta) => {
        console.log(respuesta.data);
        
        setChars(respuesta.data);
      });
  }, []);

  return (
    <main className="contenedorHome">
      <h1>Home</h1>
      <div className="card-grid">
        {chars.map((char) => (
          <Card key={char.id} name={char.name} username={char.username} />
        ))}
      </div>
    </main>
  );
};




export default Home;

/**En esta página se deberá mostrar un listado en forma de grilla de los dentistas devueltos por la API

Se deberá tener en cuenta lo siguiente:

    Deberá ser la página de inicio de la web.
    La grilla deberá mostrar una Card por cada dentista devuelto por la API.
    Cada dentista deberá contener name y username, junto con un boton ADD FAV (para agregar al localStorage como fav) y un link que permita su navegacion a la pagina dentist/:id en base al id del dentista.
    Cada Card debe integrar la funcionalidad de agregar a destacados
 */
