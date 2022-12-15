import React from "react";

const TableAutoComponent = () => {
    return (
    <table class="table table-dark">
    <thead>
    <br></br>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Patente</th>
        <th scope="col">Modelo</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td><div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Acciones
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Borrar</a></li>
    <li><a class="dropdown-item" href="#">Editar</a></li>
    <li><a class="dropdown-item" href="#">Copiar</a></li>
  </ul>
</div>
</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td><div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Acciones
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Borrar</a></li>
    <li><a class="dropdown-item" href="#">Editar</a></li>
    <li><a class="dropdown-item" href="#">Copiar</a></li>
  </ul>
</div></td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td><div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Acciones
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Borrar</a></li>
    <li><a class="dropdown-item" href="#">Editar</a></li>
    <li><a class="dropdown-item" href="#">Copiar</a></li>
  </ul>
</div></td>
      </tr>
    </tbody>
  </table>
    );
};

export default TableAutoComponent;