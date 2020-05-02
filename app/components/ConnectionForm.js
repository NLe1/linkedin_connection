import React from "react";
import FormInput from "./FormInput";
import { v4 as uuidv4 } from "uuid";

export default function Form(props) {
  const handleSubmit = (data) => {
    props.addConnection({ ...data, id: uuidv4() });
  };

  return (
    <div>
      <FormInput
        modifyWindow={props.modifyWindow}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
