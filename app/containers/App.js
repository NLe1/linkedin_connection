import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Form from "../components/Form";
import * as ConnectionActions from "../actions/connections";
import style from "./App.css";

@connect(
  (state) => ({
    connections: state.conections,
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
      <div className={style.normal}>
        <Form connections={connections} addConnection={actions.addConnection} />
      </div>
    );
  }
}
