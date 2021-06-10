import React from "react";
import PropTypes from 'prop-types';

//mport './Saludar.css';
import './Saludar.scss';
export default function Saludar(prop){
    const {data:{nombre, apellido, edad, ciudad}} = prop;
    
    return (
        <span className="saludar">
            <p className="nombre">
                Hola {nombre} {apellido} tienes {edad}
            </p>
            
        </span>
    );
}

Saludar.propTypes = {
    nombre:PropTypes.string.isRequired,
    apellido:PropTypes.string.isRequired,
    edad:PropTypes.number.isRequired,
    enviarsaludo: PropTypes.func
}