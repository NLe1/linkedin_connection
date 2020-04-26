import React from "react";

export default function EmailItem(props) {
  return (
    <li style={{ background: "black", color: "white" }}>
      {props.message.email}
    </li>
  );
}
