import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import propTypes from "prop-types";

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // Cuando el ususario añade un gasto

  const agregarGasto = e => {
    e.preventDefault();

    // validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      guardarError(true);
      return;
    }

    //Construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    // pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);

    //resetear el form
    guardarNombre("");
    guardarCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      {error ? <Error mensaje='Error al renderizar la pagina' /> : null}
      <h2>Agrega tus gastos</h2>
      <div className='campo'>
        <label>Nombre Gasto</label>
        <input
          type='text'
          className='u-full-width'
          placeholder='Ej. Transporte'
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />
      </div>
      <div className='campo'>
        <label>Cantidad Gastos</label>
        <input
          type='nombre'
          className='u-full-width'
          placeholder='Ej. Transporte'
          value={cantidad}
          onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type='submit'
        className='button-primary u-full-width'
        value='Agregar Gasto'
      />
    </form>
  );
};

Formulario.propTypes = {
  guardarGasto: propTypes.func.isRequired,
  guardarCrearGasto: propTypes.func.isRequired,
};
export default Formulario;
