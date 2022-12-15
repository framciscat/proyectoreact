import React, {useState, useEffect} from "react";
import Boton from "./Boton";

const initialUsuario ={
  nombreCompleto:"",
  numeroTelefonico:"",
  correo: ""
};

const FormularioUsuarioComponent = ({userAdd, usuarioEditado, setUsuarioEditado, userEdit}) => {
  const[usuario, setUsuario] = useState(initialUsuario);
  const {nombreCompleto, numeroTelefonico, correo} = usuario;

   //el hook useEffect siempre esta pendiente de si la variable que tiene dentro de
  //sus corchetes cambia el deberá hacer todo loq ue tiene en su funcion dentro
  //CONSIDERACIÓN es que useEffect siempre corre al menos 1 vez cuando la página carga por primera vez
  useEffect(() => {
    if (usuarioEditado !== null){
      setUsuario(usuarioEditado);
    } else {
      setUsuario({
        nombreCompleto:"",
        numeroTelefonico:"",
        correo:""
    });
  }
  }, [usuarioEditado]);



  const handleInputChange=(e) =>{
     //esta funcion se llama cada vez que nostros escribirmos algo en algun input de
    //nuestra página
    const changeFormValue = {
      //va a antaner los datos que tiene usuario de los input que no he tocado
      //pero va a aactualizar el atributo que cambié por su nuevo valor
      ...usuario,
      [e.target.name]:e.target.value
    };
     //finalmente los cambios deberán verse reflejados en neustro hook
    setUsuario(changeFormValue);
  };

    return (
      <form class="formulario"> 
       {/* hacemos que el mensaje del formulario sea dinamico
    segun si queremos editar o ingresar */}

{usuarioEditado !== null ? (
          <h1>Editar Usuario</h1>
        ) : (
          <h1>Ingrese Usuario</h1>
        )}
      <br></br>
      <h3> Formulario de inscripción de usuario</h3>
<div class="form-row">
  <div class="form-group col-md-6">
    <label for="inputEmail4">Nombre Completo</label>
    
    <input type="email" class="form-control" id="inputEmail4" 
    placeholder="Escriba su nombre completo"
    name="nombreCompleto" value={nombreCompleto} onChange={handleInputChange}
    ></input>
  </div>
  <div class="form-group col-md-6">
    <label for="inputPassword4">Numero telefónico</label>
    <input type="text" class="form-control" id="inputPassword4" placeholder="Ingrese su número telefónico"
    name="numeroTelefonico" value={numeroTelefonico} onChange={handleInputChange}></input>
  </div>
</div>
<div class="form-group col-md-6">
  <label for="inputAddress">Correo</label>
  <input type="email" class="form-control" id="inputAddress" placeholder="Ingrese su correo electrónico"
  name="correo" value={correo} onChange={handleInputChange}></input>
</div>
{/* botón para editar usuario*/}
        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userEdit(usuario)}
          >
            Editar usuario
          </button>
        ) : (

          // boton para ingresar usuario
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userAdd(usuario)}
          >
            Ingresar usuario
          </button>
        )}
        {/* boton para cancelar operación */}
        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setUsuarioEditado(null)}
          >
            Cancelar
          </button>
        ) : (
          <></>
        )}
 <br/>

</form>
    );
};

export default FormularioUsuarioComponent;