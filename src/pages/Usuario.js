import React, {useCallback, useState} from "react";
import UsuarioCSS from "./Usuario.css";
import {  BotonComponent, TableUsuarioComponent } from "../component";
import { useNavigate } from "react-router-dom";
import {FormularioUsuario} from "../component";

//usuarios

const usuario1= [
    {
    nombreCompleto: "Joseph Joestar",
    numeroTelefonico: "982343561",
    correo: "jojo@live.com"
},
{
    nombreCompleto: "Kira Yoshikage",
    numeroTelefonico: "982363561",
    correo: "killerqueen@gmail.com"
},
{
    nombreCompleto: "Rohan Kishibe",
    numeroTelefonico: "9823687661",
    correo: "heavensdoor@gmail.com"
}
];

const usuario2 = {
    nombre: "Josuke",
    apellido: "Higashikata",
    correo: "jojo@gmail.com",
    rut: "17456329-9",
  };

const UsuarioPage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/Auto", {}, [navigate]));
    //en este momento state vale lo mismo que usuario 1
  //genera una funcion setteadora que me va a permitir cambiar los datos se usuario 1 sin afectarlo directamente(setState)
    const [user, setUser] = useState(usuario1);
    const [usuarioEditado, setUsuarioEditado] = useState(null);

    //función para eliminar usuario
    const userDelete =(correoUsuario)=>{
        //esta funcion filtra mi lista de usuarios
        const changeUser = user.filter((usuario) => usuario.correo != correoUsuario);
        setUser(changeUser);
    };

    //función agregar usuario
    const userAdd =(usuario)=>{
        const addUsuario =[
            //mantenme los datos que tengo en user y agregame lo que yo te entrego aqui (usuario)
            ...user, usuario,
        ];
        //luego actualizamos (o setteamos) el state
        setUser(addUsuario);
    };

    //función para editar usuario
    const userEdit = (usuarioEditado)=>{
        const editUser = user.map(usuario => (usuario.correo === usuarioEditado.correo ? usuarioEditado : usuario))
        setUser(editUser);
    }
    return( 
        <div>
            <FormularioUsuario userAdd = {userAdd} usuarioEditado={usuarioEditado}
            setUsuarioEditado={setUsuarioEditado} userEdit={userEdit} />

            <BotonComponent infoBoton={"Ir a auto"}handleOnClick={handleOnClick}/>

            <TableUsuarioComponent usuarios={user} deleteUser={userDelete} 
            setUsuarioEditado={setUsuarioEditado}/>
            
        </div>

    )
}

export default UsuarioPage;