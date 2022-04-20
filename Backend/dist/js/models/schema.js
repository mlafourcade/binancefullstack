"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataformat = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var mongoose_2 = require("mongoose");
//Create Schema and model
var UserData = new mongoose_2.Schema({
    _id: mongoose_2.Types.ObjectId,
    email: String,
    username: String,
    userpass: String,
});
exports.dataformat = mongoose_1.default.model('userdata', UserData);
