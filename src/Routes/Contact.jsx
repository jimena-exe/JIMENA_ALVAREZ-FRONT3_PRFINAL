import React from "react";
import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;

/**En esta pagina deberán implementar un Form (con sus validaciones pertinentes) que capture la información del usuario que desea contactar con la empresa. Los campos serán los siguientes:

    Nombre completo (con longitud mayor a 5)
    Email (con formato correcto de email)
    En caso de haber un error mostrar el siguiente mensaje de error: Por favor verifique su información nuevamente
    Una vez "enviado"( no se envía a ningún servidor pero podemos mostrar por consola los datos submiteados) el formulario deberán mostrar un mensaje de éxito que contenga el siguiente formato: Gracias [nombre del usuario], te contactaremos cuando antes vía mail
 */
