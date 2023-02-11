import React from 'react';
import './components.css';

function Input(props) {
    return (

        <input type="text" placeholder={props.placeholder} className="input" onChange={props.onChange}/>

    );
}

export default Input;