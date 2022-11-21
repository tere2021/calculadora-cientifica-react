import logocalculadora from '../imagenes/logo-calculadora.png';
import  './hojas-de-estilo/Logo.css';

const Logo = () => {
  return (
    <div className='logo-contenedor'>
      <img src={logocalculadora} className='logo' alt='Logo' />
      <h3 className='frase'>Cálculos online</h3>
    </div>
  );
};

export default Logo;