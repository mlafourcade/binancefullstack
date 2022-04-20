"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var controler_1 = require("../controllers/controler");
exports.routes = (0, express_1.Router)();
exports.routes.get('/readData/:id', controler_1.HandleData.findByParameter);
exports.routes.get('/api', function (req, res) {
    console.log("Data Received");
    var response = {
        users: ['userOne', 'userTwo', 'userThree']
    };
    return res.json({
        users: ['userOne', 'userTwo', 'userThree', 'userFour']
    });
});
exports.routes.get('/', function (req, res) {
    return res.json({
        message: 'Backend says: Mongodb configured'
    });
});
