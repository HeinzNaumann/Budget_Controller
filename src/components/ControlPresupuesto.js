import React, { Fragment } from "react";
import { revisarPresupuesto } from "../helpers";

import propTypes from "prop-types";

const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <div className='alert alert-primary'>Presupuesto: {presupuesto} €</div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        Restante: {restante} €
      </div>
    </Fragment>
  );
};

ControlPresupuesto.propTypes = {
  presupuesto: propTypes.number.isRequired,
  restante: propTypes.number.isRequired,
};

export default ControlPresupuesto;
