import React from 'react'
let texto = ""
const  Nota = ({nAciertos , restantes, codigo , jugando}) => {
    
    if(jugando && restantes<10){
        texto =  `${nAciertos} aciertos!! quedan ${restantes} intentos..`
    }
    if (nAciertos===4){
    texto = `GANASTE!!! en ` + ( 10- `${restantes}`)+` intentos`
    }
    if(restantes===0 && nAciertos!==4){
        texto = `Perdiste!!! el codigo era ${codigo[0]} ${codigo[1]} ${codigo[2]} ${codigo[3]}` 
    }
  return (
    <div>
      <p>{texto}</p>

    </div>
  )
}

export default Nota