import React from "react";

export default function ConnectionItem(props) {
  const { name, mutual, company, notes } = props.connection;
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{mutual}</li>
        <li>{company}</li>
        <li>{notes}</li>
      </ul>
    </div>
  );
}
