import React from 'react'

  
const Instrucciones = ({error}) => {
  
  let reglas = "Adivina el código de 4 letras. Las letras pueden repetirse. Se contarán tus aciertos pero sin especificar la ubicación del mismo. Tienes 10 intentos para lograrlo... SUERTE!"
  let texto=""
  error?texto="Debes seleccionar 4 letras entre la A y la D para continuar":texto=reglas
  
  return (
    <>


    
    {/* idea... colocar opcion cerrar */}
    <h1>Instrucciones</h1>
    <h3>{texto}</h3>
    
    </>
  )
}

export default Instrucciones