import * as ActionTypes from "../constants/ActionTypes";

const initialState = { connections: [], messages: [] };

const actionsMap = {
  [ActionTypes.ADD_CONNECTION](state, action) {
    if (Object.keys(state).length == 0) {
      state.connections = Array();
      state.messages = Array();
    }
    return {
      ...state,
      connections: [...state.connections, action.payload],
    };
  },
  [ActionTypes.ADD_EMAIL](state, action) {
    if (Object.keys(state).length == 0) {
      state.connections = Array();
      state.messages = Array();
    }
    return {
      ...state,
      messages: [...state.messages, action.payload],
    };
  },
  [ActionTypes.UPDATE_CONNECTION](state, action) {
    return {
      ...state,
      connections: action.payload,
    };
  },
  [ActionTypes.GET_CONNECTIONS](state, action) {
    return state;
  },
};

export default function connections(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
