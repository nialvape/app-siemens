"use strict";

require("./database");
var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PORT = process.env.PORT || 3001;
_app["default"].listen(PORT, function () {
  console.log("Server on port ".concat(PORT));
});