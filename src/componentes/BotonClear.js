import "../componentes/hojas-de-estilo/BotonClear.css";

const BotonClear = (props) => (
  <div className="boton-clear" onClick={props.manejarClear}>
    Clear
  </div>
);

export default BotonClear;
