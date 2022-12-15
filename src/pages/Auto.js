import React, { useCallback } from "react";
import AutoCSS from "./Auto.css";
import { FormularioAutoComponent, BotonComponent, TableAutoComponent } from "../component";
import { useNavigate } from "react-router-dom";

const AutoPage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/Usuario", {}, [navigate]))

    return(
        <div>
            <FormularioAutoComponent/>
            <BotonComponent infoBoton={"Ir a usuario"} handleOnClick={handleOnClick}/>
            <TableAutoComponent/>
            
        </div>

    )
}

export default AutoPage;