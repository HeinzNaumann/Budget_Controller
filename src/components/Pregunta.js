import React, { Fragment, useState } from "react";
import Error from "./Error";
import propTypes from "prop-types";

const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPregunta,
}) => {
  // definir el state

  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  //Funcion que lee el presupuesto
  const definirPresupuesto = e => {
    guardarCantidad(parseInt(e.target.value, 10));
  };

  // submit para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    guardarError(false);
    // se se pasa la validación

    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };

  return (
    <Fragment>
      {error === true ? (
        <Error mensaje='El presupuesto es incorrecto' />
      ) : (
        "Escribe lo que quieras"
      )}

      <form onSubmit={agregarPresupuesto}>
        <input
          type='number'
          className='u-full-width'
          placeholder='Coloca tu presupuesto'
          onChange={definirPresupuesto}
        />
        <input
          type='submit'
          className='button-primary u-full-width'
          placeholder='Coloca tu presupuesto'
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  guardarPresupuesto: propTypes.func.isRequired,
  guardarRestante: propTypes.func.isRequired,
  actualizarPregunta: propTypes.func.isRequired,
};

export default Pregunta;
