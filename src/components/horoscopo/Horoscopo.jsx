import "./Horoscopo.css";
import PropTypes from "prop-types";

export const Horoscopo = ({
  fecha_inicio,
  fecha_fin,
  img,
  signo,
  descripcion,
  fcolor,
  scolor,
}) => {
  return (
    <div
  className=""
  style={{
    background: `linear-gradient(to right, ${fcolor}, ${scolor})`,
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'white',
    fontFamily: 'Arial, sans-serif'
  }}
>
  <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>{signo}</h2>
  
  <div style={{
    display: 'flex',
    gap: '20px',
    marginRight:'30px',
    maxWidth:'90%',
    width:'90%',
    minWidth: '300px'
  }}>
    <img src={img} alt="signo.svg" style={{ width: '200px', height: '200px' }} />
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <p>De: {fecha_inicio}</p>
      <p>A: {fecha_fin}</p>
      <p>{descripcion}</p>
    </div>
  </div>
</div>
  );
};

//Definiendo los prototypes del Card
Horoscopo.propTypes = {
  fecha_inicio: PropTypes.string,
  fecha_fin: PropTypes.string,
  img: PropTypes.string,
  signo: PropTypes.string,
  descripcion: PropTypes.string,
  fcolor: PropTypes.string,
  scolor: PropTypes.string,
};

export default Horoscopo;
