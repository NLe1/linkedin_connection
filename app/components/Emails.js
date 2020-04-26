import React from "react";
import EmailForm from "./EmailForm";
import EmailList from "./EmailList";

export default function Form(props) {
  const handleSubmit = (data) => {
    if (Object.keys(data).length > 0) {
      props.addEmail(data);
    }
  };

  return (
    <div>
      <h2>Add Email Template</h2>
      <EmailForm handleSubmit={handleSubmit} />
      <EmailList emails={props.messages} />
    </div>
  );
}
