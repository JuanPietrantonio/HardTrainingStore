import "./button.css";
import React from "react";

function Button (props) {
    return (

        <button onClick={props.onClick} className="btn">
            {props.children}
        </button>   
    )
}

export default Button;