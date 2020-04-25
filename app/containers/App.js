import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Form from "../components/Form";
import * as ConnectionActions from "../actions/connections";
import style from "./App.css";

@connect(
  (state) => ({
    connections: state.connections,
  }),
  (dispatch) => ({
    actions: bindActionCreators(ConnectionActions, dispatch),
  })
)
export default class App extends Component {
  static propTypes = {
    connections: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { connections, actions } = this.props;

    return (
      <div>
        {/* <ul>
          {Object.keys(connections).length > 0
            ? connections.map((connection) => <li>{connection}</li>)
            : null}
        </ul> */}
        <Form connections={connections} addConnection={actions.addConnection} />
      </div>
    );
  }
}
