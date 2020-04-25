import * as ActionTypes from "../constants/ActionTypes";

const initialState = { connections: [] };

const actionsMap = {
  [ActionTypes.ADD_CONNECTION](state, action) {
    return {
      connections: [...state.connections, action.payload],
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
