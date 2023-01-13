import React, { useState } from "react";
import InputForm from "./InputForm";
import Button from "../Button/Button";

export default function BuyForm(props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });


  function onInputChange(evt) {
    const inputName = evt.target.name;
    const value = evt.target.value;

    const newUserData = { ...userData };
    newUserData[inputName] = value;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(userData);
  }

  return (
    <form onSubmit={onSubmit} className="buyform">
      <InputForm
        required="true"
        title="Nombre"
        name="name"
        value={userData.name}
        onInputChange={onInputChange}
      />
      <InputForm
        required="true"
        title="Email"
        name="email"
        value={userData.email}
        onInputChange={onInputChange}
      />
      <InputForm
        required="true"
        title="Teléfono"
        name="phone"
        value={userData.phone}
        onInputChange={onInputChange}
      />

      <Button onClick={onSubmit}>Finalizar Compra</Button>
    </form>
  );
}