import React from "react";
import connections from "../reducers/connections";
import EmailItem from "./EmailItem.js";

export default function ConnectionList(props) {
  const renderConnection = (messages) => {
    console.log(messages);
    return connections.map((message) => (
      <EmailItem key={message} message={message}></EmailItem>
    ));
  };
  return (
    <div>
      <h1>List of Email Templates</h1>
      {props.messages && props.messages.length > 0
        ? renderConnection(props.messages)
        : null}
    </div>
  );
}
