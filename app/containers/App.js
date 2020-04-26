import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ConnectionActions from "../actions/connections";
import Connections from "../components/Connections";
import Emails from "../components/Emails";
import "./App.css";

@connect(
  (state) => ({
    connections: state.connections,
    messages: state.messages,
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

  constructor(props) {
    super(props);
    this.state = {
      connectionTab: true,
    };
  }

  render() {
    const { connections, actions } = this.props;

    return (
      <div className="container-app">
        {this.state.connectionTab ? (
          <Connections
            connections={connections.connections}
            addConnection={actions.addConnection}
          ></Connections>
        ) : (
          <Emails
            messages={connections.messages}
            addEmail={actions.addEmail}
          ></Emails>
        )}
        <button onClick={() => this.setState({ connectionTab: true })}>
          Connection Tab
        </button>
        <button onClick={() => this.setState({ connectionTab: false })}>
          Email Tab
        </button>
      </div>
    );
  }
}
