import Select from "react-select";
import estilos from "./Componentes/App.module.css";
import { useState } from "react";
import Botones from "./Componentes/Botones";
import Instrucciones from "./Componentes/Instrucciones";

const LETRAS = ["A", "B", "C", "D", "E"];
const MAX_INTENTOS = 10;

const opciones = [
  { label: "A", value: "A" },
  { label: "B", value: "B" },
  { label: "C", value: "C" },
  { label: "D", value: "D" },
  { label: "E", value: "E" },
];

function App() {
  const [valor1, setValor1] = useState("");

  const seleccionLetra1 = ({ value }) => {
    setValor1(value);
  };
  const [valor2, setValor2] = useState("");
  const seleccionLetra2 = ({ value }) => {
    setValor2(value);
  };
  const [valor3, setValor3] = useState("");
  const seleccionLetra3 = ({ value }) => {
    setValor3(value);
  };
  const [valor4, setValor4] = useState("");
  const seleccionLetra4 = ({ value }) => {
    setValor4(value);
  };

  const [contador, setContador] = useState(0);
  const [valor, setValor] = useState(["A", "-", "J", "U", "G", "A", "R"]);
  const [jugando, setJugando] = useState(false);
  const [bien, setBien] = useState(0);

  function adivinar() {
    let min = 0;
    let max = LETRAS.length - 1;
    let randomIndex = Math.round(Math.random() * (max - min) + min);
    const letra = LETRAS[randomIndex];
    return letra;
  }

  function comenzar() {
    const arreg = [adivinar(), adivinar(), adivinar(), adivinar()];
    setJugando(true);
    return setValor(arreg);
  }

  function evaluar() {
    let arregloDeValores = [valor1, valor2, valor3, valor4];
    let aciertos = 0;
    var i = 0;
    while (i < 4) {
      arregloDeValores[i] === valor[i]
        ? (aciertos = aciertos + 1)
        : console.log("no");
      i++;

      if (aciertos === 4) {
        setJugando(false);
        //  modificar contador max intentos
        setContador(MAX_INTENTOS);
      }
    }
    if (contador < MAX_INTENTOS) {
      setContador(contador + 1);
      setJugando(true);
      console.log(valor);
    } else {
      setJugando(false);
      setContador(0);
      console.log(valor);
    }
    setBien(aciertos);
    return console.log(bien + " aciertos");
  }




  return (
    <div className={estilos.container}>
          <div className={estilos.prueba} hidden={!jugando}>
      prueba
      prueba
      prueba
    </div>
      <div className={estilos.divArriba}  >
        <div className={estilos.divSelect}>
          <Select
    
            isDisabled={!jugando}
            className={estilos.select}
            options={opciones}
            onChange={seleccionLetra1}
            name="letra1"
            id="select1"
          />
          <Select
            isDisabled={!jugando}
            className={estilos.select}
            options={opciones}
            onChange={seleccionLetra2}
            name="letra2"
            id="select2"
          />
          <Select
          
            isDisabled={!jugando}
            className={estilos.select}
            options={opciones}
            onChange={seleccionLetra3}
            name="letra3"
            id="select3"
          />
          <Select
            isDisabled={!jugando}
            className={estilos.select}
            options={opciones}
            onChange={seleccionLetra4}
            name="letra4"
            id="select4"
          />
        </div>
        <div className={estilos.divInstrucciones} >
          <Instrucciones> </Instrucciones>
        </div>
      </div>
      <div className={estilos.divAbajo}>

      <div className={estilos.divBtn}>
        <button className={estilos.btn} disabled={!jugando} onClick={evaluar}>
          {" "}
          Evaluar {contador}
        </button>

        {valor}
        <Botones comenzar={comenzar} disabled={jugando}>
          {" "}
          COMENZAR{" "}
        </Botones>
      </div>

      <h1>
        {bien} aciertos!! te quedan {MAX_INTENTOS - contador} intentos{" "}
      </h1>
    </div>

   
    
    </div>
  );
}

export default App;
