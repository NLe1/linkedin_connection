if (
  Object.keys(process.env).length > 0 &&
  process.env.NODE_ENV === "production"
) {
  module.exports = require("./configureStore.prod");
} else {
  module.exports = require("./configureStore.dev");
}
