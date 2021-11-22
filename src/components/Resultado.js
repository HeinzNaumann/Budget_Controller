import React from "react";
import Gasto from "./Gasto";
import propTypes from "prop-types";

const Resultado = ({ gastos }) => {
  return (
    <div className='gastos-realizados'>
      <h2>listado</h2>
      {gastos.map(gasto => (
        <Gasto key={gasto.id} gasto={gasto} />
      ))}
    </div>
  );
};

Resultado.propTypes = {
  gastos: propTypes.array.isRequired,
};

export default Resultado;
