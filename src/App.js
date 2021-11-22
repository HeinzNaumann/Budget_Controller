import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  //definimos el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  // UseEffect que actualiza el restante

  useEffect(() => {
    if (creargasto) {
      //agrega el nuevo presupuesto
      guardarGastos([...gastos, gasto]);

      // resta el presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      //Reseter a false
      guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante]);

  return (
    <div className='container'>
      <header>
        <h1>gasto semanal</h1>

        <div className='contenido-principal contenido'>
          {mostrarpregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className='row'>
              <div className='one-half column'>
                <Formulario
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>
              <div className='one-half column'>
                <Resultado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                ></ControlPresupuesto>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
