chrome.storage.local.get("state", (obj) => {
  let connections = obj.connections;
  if (connections) {
    connections = JSON.parse(connections);
    const len = connections.length;
    if (len > 0) {
      chrome.browserAction.setBadgeText({ text: len.toString() });
    }
  } else {
    // Initial
    chrome.browserAction.setBadgeText({ text: "0" });
  }
});
