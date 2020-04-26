import * as types from "../constants/ActionTypes";

export function addConnection(data) {
  return { type: types.ADD_CONNECTION, payload: data };
}

export function getConnections() {
  return { type: types.GET_CONNECTIONS };
}

export function addEmail(data) {
  return { type: types.ADD_EMAIL, payload: data };
}
