import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Form from "../components/Form";
import * as ConnectionActions from "../actions/connections";
import "./App.css";

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

  renderConnections = (connections) => {
    console.log(connections);
    connections.map((connection) => <li>{connection.name}</li>);
  };

  render() {
    const { connections, actions } = this.props;

    return (
      <div>
        {connections ? (
          <ul>{this.renderConnections(connections.connections)}</ul>
        ) : null}
        <Form connections={connections} addConnection={actions.addConnection} />
      </div>
    );
  }
}
