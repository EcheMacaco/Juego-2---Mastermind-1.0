import Select from "react-select";
import estilos from "./Componentes/App.module.css";
import { useState } from "react";
import Botones from "./Componentes/Botones";
import Instrucciones from "./Componentes/Instrucciones";
import Nota from "./Componentes/Nota";

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
  const [valor, setValor] = useState([]);
  const [jugando, setJugando] = useState(false);
  const [bien, setBien] = useState();
  const [textoFinal, setTextoFinal] = useState(false);
  const [historial, setHistorial] = useState([]);
  const [error, setError] = useState(false);

  function adivinar() {
    let min = 0;
    let max = LETRAS.length - 1;
    let randomIndex = Math.round(Math.random() * (max - min) + min);
    const letra = LETRAS[randomIndex];
    return letra;
  }

  //funcion para comenzar Juego. Arma el arreglo con letras al azar.
  function comenzar() {
    const arreg = [adivinar(), adivinar(), adivinar(), adivinar()];
    setJugando(true);
    setContador(0);
    setTextoFinal(false);
    setHistorial([])
    return setValor(arreg);
  }

  //Evalua si los valores del arreglo son aciertos. Activa el contador y finaliza el juego si se consiguen 4 aciertos. Coloca valor al historial
  function evaluar() {
    //condicional para que esten los 4 valores seleccionados
    if (valor1 && valor2 && valor3 && valor4) {
      let arregloDeValores = [valor1, valor2, valor3, valor4];
      let aciertos = 0;
      var i = 0;
      while (i < 4) {
        arregloDeValores[i] === valor[i]
          ? (aciertos = aciertos + 1)
          : (aciertos = aciertos + 0);
        i++;
      }
      if (contador < MAX_INTENTOS) {
        setContador(contador + 1);
        setJugando(true);
      } else {
        setJugando(false);
        setContador(0);
      }
      if (aciertos === 4) {
        setJugando(false);
      }
      setBien(aciertos);
      setHistorial([
        ...historial,
        " ",
        arregloDeValores,
        " - Aciertos: ",
        aciertos,
      ]);
      setError(false);
    } else {
      setError(true);
    }
  }

  //Condicional para no tener mas intentos que MAX_INTENTOS
  if (contador == MAX_INTENTOS && bien < 4) {
    setJugando(false);
    setContador(0);
    setTextoFinal(true);
  }
 

  return (
    <div className={estilos.container}>
      <div className={estilos.divArriba}>
        <div className={estilos.divJugadas}>
          <p className={estilos.historial}> {historial}</p>
        </div>
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

        <div className={estilos.divInstrucciones}>
          <Instrucciones error={error}> </Instrucciones>
        </div>
      </div>
      <div className={estilos.divAbajo}>
        <div className={estilos.divBtn}>
          <Botones
            comenzar={comenzar}
            disabled={jugando}
            contador={contador}
            evaluar={evaluar}
          ></Botones>
        </div>
        <h1>
          <Nota
            jugando={jugando}
            codigo={valor}
            nAciertos={bien}
            restantes={MAX_INTENTOS - contador}
            textoFinal={textoFinal}
          ></Nota>
        </h1>
      </div>
    </div>
  );
}

export default App;
