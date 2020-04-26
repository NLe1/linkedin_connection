import React from "react";
import FormInput from "./FormInput";

export default function Form(props) {
  const handleSubmit = (data) => {
    if (Object.keys(data).length > 0) {
      props.addConnection(data);
    }
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
