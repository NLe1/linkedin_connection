import React, { Fragment } from "react";
import ConnectionForm from "./ConnectionForm";

export default function Connections(props) {
  return (
    <Fragment>
      {/* <ConnectionList connections={props.connections} /> */}
      <ConnectionForm
        modifyWindow={props.modifyWindow}
        addConnection={props.addConnection}
      />
    </Fragment>
  );
}
