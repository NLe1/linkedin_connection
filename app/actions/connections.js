import * as types from "../constants/ActionTypes";

export function addConnection(data) {
  return { type: types.ADD_CONNECTION, payload: data };
}

export function addEmail(data) {
  return { type: types.ADD_EMAIL, payload: data };
}

export function deleteEmail(id) {
  return { type: types.DELETE_EMAIL, payload: id };
}

export function updateConnection(data) {
  return { type: types.UPDATE_CONNECTION, payload: data };
}
