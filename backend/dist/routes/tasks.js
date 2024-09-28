"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasks = require("../controllers/tasks");
var router = (0, _express.Router)();
router.get('/tasks', _tasks.getTasks);
router.get('/tasks/:id', _tasks.getTask);
router.get('/tasks/count', _tasks.getTaskCount);
router.post('/tasks', _tasks.createTask);
router["delete"]('/tasks/:id', _tasks.deleteTask);
router.put('/tasks/:id', _tasks.updateTask);
var _default = exports["default"] = router;