import React from "react";
import FormularioAutoCSS from "./FormuAuto.css";

const FormularioAutoComponent = () => {
    return (
        <form class="formulario"> 
        <br></br>
        <h3> Formulario de inscripción de vehículo</h3>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Nombre Completo</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Escriba su nombre completo"></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Patente</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Escriba la patente de su auto"></input>
    </div>
  </div>
  <div class="form-group col-md-6">
    <label for="inputAddress">Modelo</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Ingrese modelo de su auto"></input>
  </div>
   <br></br>
</form>
    );
};

export default FormularioAutoComponent;