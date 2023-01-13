import React from "react";

function InputForm(props) {
  return (
    <div className="inputform">
      <label>{props.title}</label>
      <input
        required={true}
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onInputChange}
      />
    </div>
  );
}

export default InputForm;