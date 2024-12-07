import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [char, setChar] = useState({});
  const params = useParams();
  // console.log(params);
  const url = "https://jsonplaceholder.typicode.com/users/:id"+ params.id;

  useEffect(()=>{
    axios(url).then((respuesta)=>{
      setChar(respuesta.data)
      
    })
  },[])
  
  return (
    <div className="contenedorDetail" style={{width:"90%", height:"80%"}}>
      <h1>Detalles del dentista</h1>
      <h3>Nombre: {char.name}</h3>
      <h3>Email: {char.email}</h3>
      <h3>Teléfono: {char.phone	}</h3>
      <h3>Sitio web: {char.website}</h3>
      
    </div>
  );
};

export default Detail;

/**En esta página se deberá mostrar un detalle de un dentista individual de la API.

Se deberá tener en cuenta lo siguiente:

    Deberá estar en la ruta /dentist/:id.
    La página deberá indicar al menos la siguiente información:
        Nombre del personaje
        Email
        Telefono
        Sitio web
 */
