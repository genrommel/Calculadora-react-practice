import React from 'react';
import '../styles/buttonClear.css';

function ButtonClear(props){
    return (
        <div 
            className='clear'
            onClick={props.manejarClic} >
            {props.children}
        </div>
    );
}

export default ButtonClear;