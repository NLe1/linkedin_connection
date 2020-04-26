import React from "react";
import connections from "../reducers/connections";
import ConnectionItem from "./ConnectionItem";

export default function ConnectionList(props) {
  const renderConnection = (connections) => {
    return connections.map((connection) => (
      <ConnectionItem
        key={connection.name}
        connection={connection}
      ></ConnectionItem>
    ));
  };
  return (
    <div>
      <h1>Connections...</h1>
      {props.connections && props.connections.length > 0
        ? renderConnection(props.connections)
        : null}
    </div>
  );
}
