import React from "react";

import propTypes from "prop-types";

const Error = ({ mensaje }) => {
  return <p className='alert alert-danger error'>{mensaje}</p>;
};

Error.propTypes = {
  guardarGasto: propTypes.string.isRequired,
};
export default Error;
