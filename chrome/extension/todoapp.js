import React from "react";
import ReactDOM from "react-dom";
import Root from "../../app/containers/Root";
import "./todoapp.css";

chrome.storage.local.get("state", (obj) => {
  if (Object.keys(obj).length == 0) {
    chrome.storage.local.set(
      { state: JSON.stringify({ connections: [], messages: [] }) },
      console.log("initialize state .... ")
    );
  }
  chrome.storage.local.get("state", (obj) => {
    const state = JSON.parse(obj.state);
    const initialState = state;
    const createStore = require("../../app/store/configureStore");

    ReactDOM.render(
      <Root store={createStore(initialState)} />,
      document.querySelector("#root")
    );
  });
});
