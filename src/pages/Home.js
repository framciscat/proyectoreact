import React, { useCallback } from "react";
import HomeCSS from "./Home.css";
import {BotonComponent, NavbarComponent } from "../component";
import { useNavigate } from "react-router-dom";
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

const HomePage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/Usuario", {}, [navigate]))
    const handleOnClickAuto = useCallback(()=> navigate("/Auto", {}, [navigate]))

    return(
        
        <div>
            <NavbarComponent/>
            <BotonComponent infoBoton={"Ir a usuario"} handleOnClick={handleOnClick}/>
            <BotonComponent infoBoton={"Ir a auto"} handleOnClick={handleOnClickAuto}/>
            
        </div>
    )
}

export default HomePage;