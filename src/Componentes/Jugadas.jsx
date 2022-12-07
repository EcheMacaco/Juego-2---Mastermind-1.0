//en App.js cambiar nombre a VAL y push para sumar resultados al arr de valores ingresados


import React from 'react'
let texto = "" 

const  Jugadas = ({nAciertos, codigo , jugando}) => {
 let historial = {codigo} 
 let valoresIngresados=[]   
    
 const resultado = historial.codigo.map(valorIngresado => valorIngresado)
 
 if(jugando){
      
      valoresIngresados.push(resultado)
        
    } 

    else{
        texto= `${codigo} + ${nAciertos}`
      
    }
    console.log(valoresIngresados)
    
    

    
  return (
    <div>
      <p> {resultado} </p>

    </div>
  )
}

export default Jugadas