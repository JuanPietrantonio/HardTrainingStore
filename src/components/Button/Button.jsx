import "./button.css";
import React, {useState} from "react";

function Button (props) {

    const [colorState, setColorState] = useState({backgroundColor: "props.color"});
    function handleClick(){
        setColorState ( {backgroundColor: "red"} );
    }

    return (

        <button onClick={handleClick} style={colorState} className="btn">
            {props.children}
        </button>
    )
}

export default Button;