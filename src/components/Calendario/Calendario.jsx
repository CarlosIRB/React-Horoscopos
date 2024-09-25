import PropTypes from 'prop-types';

const Calendario = ({ setSelectedDate }) => {

  // Actualiza la fecha en el prop que viene de App
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setSelectedDate(selectedDate); // Enviar la fecha al componente App
  };

  return (
    <div
      style={{
        padding: "20px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        minWidth: "300px",
        maxWidth: "400px",
        alignItems: "center",
        color: "#000",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h3 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Selecciona tu fecha de nacimiento
      </h3>
      <form>
        <label htmlFor="birthday" className='form-label'></label>
        <input
          type="date"
          id="birthday"
          className='form-control'
          name="birthday"
          onChange={handleDateChange}
        />
      </form>
    </div>
  );
};

Calendario.propTypes = {
  setSelectedDate: PropTypes.func.isRequired,
};

export default Calendario;
