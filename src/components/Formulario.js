import React from 'react';

export default function Formulario(){
    return (
        <form>
            <FormInput 
                title="Primer Input"
                name="txtPrimerInput"
                type="text"
                placeholder="Mi Primer Input"/>
            <br/>
            <FormInput 
                title="Contraseña Input"
                name="txtPasswordInput"
                type="password"
                placeholder="Mete la Contraseña"/>
            <br/>
            <FormButtonSend/>
        </form>
    );
}


function FormInput(props){
    const {title, name, type, placeholder } = props
    return (
        <span>
            <label>{title}</label>
            <input name={name} type={type} placeholder={placeholder}></input>
        </span>
        
    );
}

function FormButtonSend(){
    return (
        <button type="submit">Enviar</button>
    );
}