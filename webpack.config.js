var dev = require("./config/webpack.dev.config");
var prod = require("./config/webpack.prod.config");

var isProduction = process.env.NODE_ENV === "production";

console.log("Prod: ", isProduction, process.env.NODE_ENV);

module.exports = isProduction ? prod : dev;