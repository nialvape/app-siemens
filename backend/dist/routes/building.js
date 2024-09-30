"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _building = require("../controllers/building");
// Asegúrate de que estas funciones existen

var router = (0, _express.Router)();
router.get('/buildings/:id/lines/:line', _building.getBuildingConsumption); // Verifica que esta función esté definida
router.put('/buildings/:id/lines/:line', _building.updateBuildingConsumption); // Verifica que esta función esté definida
var _default = exports["default"] = router;