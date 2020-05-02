import * as ActionTypes from "../constants/ActionTypes";

const initialState = { connections: { connections: [], messages: [] } };

const actionsMap = {
  [ActionTypes.ADD_CONNECTION](state = initialState, action) {
    if (state.connections === undefined) {
      state.connections = [];
    }
    return {
      ...state,
      connections: [...state.connections, action.payload],
    };
  },
  [ActionTypes.ADD_EMAIL](state = initialState, action) {
    if (state.messages === undefined) {
      state.messages = [];
    }
    return {
      ...state,
      messages: [...state.messages, action.payload],
    };
  },
  [ActionTypes.DELETE_EMAIL](state = initialState, action) {
    const newMessage = state.messages.filter(
      (msg) => msg.id !== action.payload
    );
    return {
      ...state,
      messages: newMessage,
    };
  },
  [ActionTypes.UPDATE_CONNECTION](state = initialState, action) {
    console.log(state);
    return {
      ...state,
      connections: action.payload,
    };
  },
};

export default function connections(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
