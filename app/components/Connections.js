import React, { Fragment } from "react";
import ConnectionList from "./ConnectionList";
import ConnectionForm from "./ConnectionForm";

export default function Connections(props) {
  return (
    <Fragment>
      {/* <ConnectionList connections={props.connections} /> */}
      <ConnectionForm addConnection={props.addConnection} />
    </Fragment>
  );
}
