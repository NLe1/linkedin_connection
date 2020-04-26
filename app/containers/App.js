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
      currentWindow: "ADD_CONNECTION",
    };
  }

  componentDidUpdate() {
    console.log(this.props.connections);
  }

  modifyWindow = (type) => {
    this.setState({ currentWindow: type });
  };

  render() {
    const { connections, actions } = this.props;

    return (
      <div className="container-app">
        {this.state.currentWindow === "ADD_CONNECTION" ? (
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
        <button onClick={() => this.modifyWindow("ADD_CONNECTION")}>
          Connection Tab
        </button>
        <button onClick={() => this.modifyWindow("ADD_MESSAGE")}>
          Email Tab
        </button>
        <button>Open new Tabs</button>
      </div>
    );
  }
}
