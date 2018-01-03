if (process.env.NODE_ENV === "production") {
    module.exports = require("./configureStore.prod");
} else { //dynamic imports are not support by ES6
    module.exports = require("./configureStore.dev");
}
