import Boton from "./Boton";
import Pantalla from "./Pantalla";
import BotonClear from "./BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Logo from "./Logo";

function Calculadora() {
  const [input, setInput] = useState("");
  const [memoria, setMemoria] = useState([]);

  //input anterior concatenado con el nuevo valor
  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    //evaluate convierte una cadena de caracteres
    //en una expresion matematica
    //si el string no es vacio->evaluate
    try {
      if (input) {
        if (input.includes("sqrt3")) {
          const newInput = input.replace("sqrt3", "") + "^(1/3)";
          setInput(evaluate(newInput));
        } else if (input.includes("sqrtn")) {
          let raizNindice = input.split("s");
          let newInput = raizNindice[1].replace("qrtn", "");
          newInput = newInput + "^" + 1 / raizNindice[0];
          setInput(evaluate(newInput));
        } else if (input.includes("log(-")) {
          setInput("nan");
        } else {
          setInput(evaluate(input));
        }
      } else {
        alert("por favor ingrese valores para realizar los cálculos.");
      }
    } catch (error) {
      setInput("Error");
    }
  };

  const almacenarEnmemoria = () => {
    setMemoria(memoria.concat(input));
  };

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Logo />
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>(</Boton>
          <Boton manejarClic={agregarInput}>)</Boton>
          <Boton manejarClic={agregarInput}>!</Boton>

          <Tippy content="Seleccione la base y pulse el botón">
            <div>
              <Boton manejarClic={agregarInput}>^2</Boton>
            </div>
          </Tippy>

          <Tippy content="Seleccione la base y pulse el botón">
            <div>
              <Boton manejarClic={agregarInput}>^3</Boton>
            </div>
          </Tippy>

          <Tippy content="Potencia N: Selecione la base, pulse el botón y seleccione el exponente">
            <div>
              <Boton manejarClic={agregarInput}>^</Boton>
            </div>
          </Tippy>

          <Tippy content="Pulse el botón, pulse (,  seleccione el radicando, pulse ).">
            <div>
              <Boton manejarClic={agregarInput}>sqrt</Boton>
            </div>
          </Tippy>

          <Tippy content="Pulse el botón, pulse (,  seleccione el radicando, pulse ).">
            <div>
              <Boton manejarClic={agregarInput}>sqrt3</Boton>
            </div>
          </Tippy>
        </div>
        <div className="fila">
          <Tippy content="Pulse el botón, pulse (, seleccione un valor y pulse )">
            <div>
              <Boton manejarClic={agregarInput}>sin</Boton>
            </div>
          </Tippy>

          <Tippy content="Pulse el botón, pulse (, seleccione un valor y pulse )">
            <div>
              <Boton manejarClic={agregarInput}>cos</Boton>
            </div>
          </Tippy>

          <Tippy content="Pulse el botón, pulse (, seleccione un valor y pulse )">
            <div>
              <Boton manejarClic={agregarInput}>tan</Boton>
            </div>
          </Tippy>
          
          <Tippy content="Logaritmo: pulse el botón, abra parentesis y coloque el valor.">
            <div>
              <Boton manejarClic={agregarInput}>log10</Boton>
            </div>
          </Tippy>

          <Tippy content="Logaritmo Neperiano: pulse el botón, abra parentesis y coloque el valor.">
            <div>
              <Boton manejarClic={agregarInput}>log</Boton>
            </div>
          </Tippy>

          
          <Tippy content="Exponencial: Pulse el botón, pulse (, seleccione un valor y pulse )">
            <div>
            <Boton manejarClic={agregarInput}>exp</Boton>
            </div>
          </Tippy>

          
          <Boton manejarClic={agregarInput}>%</Boton>
          <Tippy content="Raiz N: elija el índice, pulse el botón y seleccione el radicando.">
            <div>
              <Boton manejarClic={agregarInput}>sqrtn</Boton>
            </div>
          </Tippy>
        </div>

        <div className="fila">
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton
            manejarClic={() => {
              setInput(3.141592);
            }}
          >
            pi
          </Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>

        <div className="fila">
          <Boton manejarClic={almacenarEnmemoria}>MR</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <BotonClear
            manejarClear={() => {
              setInput("");
              setMemoria([]);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
