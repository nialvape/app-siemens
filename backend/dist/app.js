"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _building = _interopRequireDefault(require("./routes/building.js"));
var _users = _interopRequireDefault(require("./routes/users.js"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Ruta de building.js
// Ruta de users.js

var app = (0, _express["default"])();

// Middleware para manejar JSON
app.use(_express["default"].json());
app.use((0, _cors["default"])());

// Usar las rutas definidas en los archivos de rutas
app.use(_users["default"]);
app.use(_building["default"]);
var _default = exports["default"] = app;