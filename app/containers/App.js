import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ConnectionActions from "../actions/connections";
import Connections from "../components/Connections";
import EmailList from "../components/EmailList";
import ComposeEmail from "../components/ComposeEmail";
import Table from "../components/Table";
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
      value: 0,
      curMessage: {},
    };
  }

  componentDidUpdate() {
    console.log(this.props.connections);
  }

  chooseCurrentMessage = (message = {}) => {
    console.log(message);
    this.setState({ curMessage: message });
    this.modifyWindow("ADD_MESSAGE");
  };

  modifyWindow = (type) => {
    console.log(type);
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
            modifyWindow={this.modifyWindow}
          ></Connections>
        ) : null}
        {this.state.currentWindow === "SHOW_MESSAGES" ? (
          <EmailList
            messages={connections.messages}
            addEmail={actions.addEmail}
            modifyWindow={this.modifyWindow}
            chooseCurrentMessage={this.chooseCurrentMessage}
          ></EmailList>
        ) : null}
        {this.state.currentWindow === "ADD_MESSAGE" ? (
          <ComposeEmail
            curMessage={this.state.curMessage}
            messages={connections.messages}
            addEmail={actions.addEmail}
            modifyWindow={this.modifyWindow}
          ></ComposeEmail>
        ) : null}
        {this.state.currentWindow === "SHOW_CONNECTIONS" ? (
          <Table
            updateConnection={actions.updateConnection}
            connections={connections.connections}
            modifyWindow={this.modifyWindow}
          ></Table>
        ) : null}
      </div>
    );
  }
}
