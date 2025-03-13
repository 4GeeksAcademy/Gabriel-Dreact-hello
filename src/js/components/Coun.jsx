import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Coun = () => {
  const [unidad, setUnidad] = useState(0); // Contador numérico
  const [Timer, SetTimer] = useState(["0", "0", "0", "0", "0"]); // Estado para los 5 dígitos

  useEffect(() => {
    const interval = setInterval(() => {
      setUnidad((valor) => (valor + 1) % 100000); // Aumenta el número cada segundo
    }, 1000);

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  useEffect(() => {
    const digitos = String(unidad).padStart(5, "0").split(""); // Convierte en array de caracteres
    SetTimer(digitos); // Actualiza el estado con los nuevos dígitos
  }, [unidad]);

  return (
    <div className="count bg-dark text-white p-3 d-flex align-items-center">
      <FontAwesomeIcon className="px-3" icon={faClock} size="1x" />
      <p className="num mx-2 fs-1">{Timer[0]}</p>
      <p className="num mx-2 fs-1">{Timer[1]}</p>
      <p className="num mx-2 fs-1">{Timer[2]}</p>
      <p className="num mx-2 fs-1">{Timer[3]}</p>
      <p className="num mx-2 fs-1">{Timer[4]}</p>
    </div>
  );
};

export default Coun;
