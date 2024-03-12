import React from 'react'
import "./style.scss"
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const Modal = ({ status, cidade, estado, pais, temp, icon, temp_max, temp_min, sensacao, humidade, vento }) => {
  return (
    <div className='BG'>
      <div className='modal'>
        <p> <FaMapMarkerAlt className='icon' size={25}/>  {cidade}, {estado} - {pais} </p>
        <div className='temp'>
          <h1> {temp}°C </h1>
          <img src={icon} alt="" />
          <h3 id='status'>{status} Nublado</h3>
          
        </div>
        <div className='list'>
          <ul>
            <li><FaArrowUp /> {temp_max}° <FaArrowDown /> {temp_min}° </li>
            <li>Sensação {sensacao}°</li>
          </ul>
          <ul>
            <li>Vento <strong>{vento}</strong> km/h</li>
            <li>Humidade {humidade}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;