"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _users = require("../controllers/users");
var router = (0, _express.Router)();
router.get('/users', _users.getUsers);
router.get('/users/:id', _users.getUser);
router.get('/users/count', _users.getUsersCount);
router.post('/users', _users.createUser);
router["delete"]('/users/:id', _users.deleteUser);
router.put('/users/:id', _users.updateUser);
router.post('/login', _users.loginUser);
var _default = exports["default"] = router;