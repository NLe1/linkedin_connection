import React from "react";
import "./Form.css";
import FormInput from "./FormInput";

export default function Form(props) {
  const handleSubmit = (data) => {
    if (data !== undefined) {
      props.addConnection(data);
    }
  };

  return (
    <div className="form-container">
      {props.connections}
      <FormInput handleSubmit={handleSubmit} />
    </div>
  );
}
