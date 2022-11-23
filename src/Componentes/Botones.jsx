import React from 'react'
import estilos from "./App.module.css";

const Botones = ({comenzar, disabled}) => {
  return (

    <div>
        <button className={estilos.btn} onClick={comenzar} disabled={disabled}> COMENZAR </button>
    </div>
    
  )
}

export default Botones