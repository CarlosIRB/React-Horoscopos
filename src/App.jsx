import Horoscopo from "./components/horoscopo/Horoscopo";
import Calendario from "./components/Calendario/Calendario";
import horoscopos from "./components/horoscopo/horoscopos.json";
import { useState } from "react";
import "./App.css";

export const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const getSignoFromDate = (date) => {
    if (!date) return null;

    const selected = new Date(date);

    return horoscopos.signos_zodiacales.find((signo) => {
      const [startMonth, startDay] = signo.fecha_inicio.split("-").map(Number);
      const [endMonth, endDay] = signo.fecha_fin.split("-").map(Number);

      let start = new Date(selected.getFullYear(), startMonth - 1, startDay);
      let end = new Date(selected.getFullYear(), endMonth - 1, endDay);

      return selected >= start && selected <= end;
    });
  };

  const selectedSigno = getSignoFromDate(selectedDate);

  return (
    <div className="div1">
      <h1 style={{ color: "white" }}>Horóscopos React</h1>
      <div className="div2">
        {/* Pasar la función que actualiza la fecha seleccionada al componente Calendario */}
        <Calendario setSelectedDate={setSelectedDate} />

        {/* Mostrar el horóscopo solo si hay una fecha seleccionada */}
        {selectedSigno && (
          <Horoscopo
            fecha_inicio={selectedSigno.dia_inicio}
            fecha_fin={selectedSigno.dia_fin}
            img={selectedSigno.img}
            signo={selectedSigno.signo}
            descripcion={selectedSigno.descripcion}
            fcolor={selectedSigno.fcolor}
            scolor={selectedSigno.scolor}
          />
        )}
      </div>
    </div>
  );
};

export default App;
