import React from "react";
import estilos from "./App.module.css";

const Botones = ({comenzar, disabled, evaluar}) => {
  return (
    <div>
      <button className={estilos.btn} onClick={comenzar} disabled={disabled}>
        COMENZAR
      </button>
      <button className={estilos.btn} onClick={evaluar} disabled={!disabled} >
        EVALUAR
      </button>
    </div>
  );
};

export default Botones;
