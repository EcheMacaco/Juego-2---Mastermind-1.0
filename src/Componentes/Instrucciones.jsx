import React from 'react'
import estilos from "./App.module.css";

const Instrucciones = ({error, intentos}) => {
let texto = ""

  error?texto="Debes seleccionar 4 letras entre la A y la D para continuar":texto=`Adivina el código de 4 letras. Las letras pueden repetirse. Se contarán tus aciertos pero sin especificar la ubicación del mismo. En total tienes ${intentos} para lograrlo... SUERTE!`;

  return (
    <>
<div className={estilos.divInstrucciones} >
INSTRUCCIONES: <br/>
{texto}
</div>
    </>
  )
}

export default Instrucciones