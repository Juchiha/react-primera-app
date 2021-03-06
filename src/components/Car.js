import React, {useState, useEffect} from 'react';

export default function Car(){
    const[carState ,setCarState] = useState({
        started : false,
        countKm : 0
    })

    useEffect(() => {
        if(carState.started){
            document.title = `El carro esta Encendido`;
        }else{
            document.title = `El carro esta Apagado`;
        }        
    });
    const chechStateCar = ()=>{
        if(carState.started){
            return <span style={{ color:'green' }}>Encendido!</span>;
        }
        return <span style={{ color:'red' }}>Apagado!</span>;
    }

    const increaceKil = () => {
        if(carState.started){
            setCarState({
                ...carState,
                countKm : carState.countKm + 1
            });
        }else{
            alert("Carro apagado");
        }
    }
    return (
        <div>
            <h1>Nuestro coche Esta {chechStateCar()}</h1>
            <br/>
             <span>Kilometros recorridos {carState.countKm} KM</span>
            <br/>
            <br/>
            <button onClick={() => setCarState({
                ...carState,
                started:!carState.started
            })}>Encender / Apagar</button>
            <button onClick={() => increaceKil()}>Mover Carro</button> 
        </div>
    );
}