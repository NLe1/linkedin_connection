import React from "react";

export default function EmailItem(props) {
  return (
    <li style={{ color: "white", margin: "10px" }}>
      <span
        onClick={(e) => {
          e.preventDefault();
          props.chooseCurrentMessage(props.message);
        }}
      >
        {props.message.title}
      </span>
    </li>
  );
}
