import  React, {useEffect} from "react";
import BotonComponent from "./Boton";

const TableUsuarioComponent = ({usuarios, deleteUser, setUsuarioEditado}) => {
    return (
        <div class="card container mb-2">
            <h2>Tabla Usuarios</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            Nombre Completo
                        </th>
                        <th>
                            Numero telefónico
                        </th>
                        <th>
                            Correo electrónico
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                {/* //Iteramos usuarios con .map, a cada 
                        elemento de usuarios lo llamaremos usuario y 
                            realizaremos lo siguiente => */}
                    {usuarios.map(usuario=>(
                        <tr>
                        <td>
                            {usuario.nombreCompleto}
                        </td>
                        <td>
                            {usuario.numeroTelefonico}
                        </td>

                        <td>
                            {usuario.correo}
                        </td>
                        <td>
                        <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    deleteUser(usuario.correo);
                  }}
                >
                 Eliminar
                </button>

                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    setUsuarioEditado(usuario)
                  }}
                >
                 Editar
                </button>

                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}


export default TableUsuarioComponent;