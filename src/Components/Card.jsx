import React from "react";
import { Link } from "react-router-dom";
import "./styles/Card.css";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}


      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <nav>
        <Link to={`/dentist/${id}`}>      
          <img srcSet="public\images\doctor.jpg" alt="imagen doctor"/>
          <h3>{name}</h3>
          <h5>{username}</h5>
          <h5>{id}</h5>
        </Link>
      </nav>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add favorito
      </button>
    </div>
  );
};

export default Card;
