import React from "react";
import EmailItem from "./EmailItem.js";

export default function EmailList(props) {
  const renderConnection = (messages) => {
    return messages.map((message) => (
      <EmailItem key={message} message={message}></EmailItem>
    ));
  };
  console.log(props.messages);
  return (
    <div>
      <h1>List of Email Templates</h1>
      <ul>
        {props.messages && props.messages.length > 0
          ? renderConnection(props.messages)
          : null}
      </ul>
    </div>
  );
}
