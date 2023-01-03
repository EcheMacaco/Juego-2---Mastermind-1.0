import React from 'react'
let texto = ""

//Devuelve el texto para comenzar el juego, informar cantidad de aciertos y si el usuario ganó o perdió 
const  Nota = ({nAciertos , restantes, codigo , jugando, textoFinal}) => {
    
    if(jugando && restantes<10){
        texto =  `${nAciertos} aciertos!! quedan ${restantes} intentos..`
    }
    if (nAciertos===4){
    texto = `GANASTE!!! en ` + ( 10 - `${restantes}`)+` intentos`
    }
    
  if(restantes===10){
      texto = "A jugar"; 
  }
  
  if (textoFinal && nAciertos!==4){
    texto = `Perdiste!!! el codigo era ${codigo[0]} ${codigo[1]} ${codigo[2]} ${codigo[3]}` 
  }
   
  return (
    <div>
      <p>{texto}</p>

    </div>
  )
}

export default Nota