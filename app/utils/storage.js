function saveState(state) {
  chrome.storage.local.set({ state: JSON.stringify(state) }, (obj) => {});
}

// connections unmarked count
function setBadge(connections) {
  if (chrome.browserAction) {
    const count = connections.length;
    chrome.browserAction.setBadgeText({
      text: count > 0 ? count.toString() : "0",
    });
  }
}

export default function () {
  return (next) => (reducer, initialState) => {
    const store = next(reducer, initialState);
    store.subscribe(() => {
      const state = store.getState();
      saveState(state);
      setBadge(state.connections);
    });
    return store;
  };
}
