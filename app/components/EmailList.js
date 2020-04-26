import React from "react";
import EmailItem from "./EmailItem.js";

export default function EmailList(props) {
  const renderConnection = (messages) => {
    return messages.map((message) => (
      <EmailItem key={message} message={message}></EmailItem>
    ));
  };
  return (
    <div>
      <div style={{ display: "inline" }}>
        <h1
          style={{
            fontSize: "30px",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Scenario
        </h1>
        <button onClick={() => props.modifyWindow("ADD_MESSAGE")}>
          Add New
        </button>
      </div>
      <ul>
        {props.messages && props.messages.length > 0 ? (
          renderConnection(props.messages)
        ) : (
          <h3>Wow... Such empty</h3>
        )}
      </ul>
    </div>
  );
}
