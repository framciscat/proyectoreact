import React from "react";
import BotonCSS from "./Boton.css";
const BotonComponent = ({infoBoton, handleOnClick}) => {
    return (
        <div>
<button type="button" class="btn btn-primary btn-lg" onClick={()=>{handleOnClick();}}
>{infoBoton}</button>
</div>

    );
 };

 export default BotonComponent;