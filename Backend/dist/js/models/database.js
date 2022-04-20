"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertMongodbData = exports.ReadMongodbData = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var schema_1 = require("./schema");
var uri = "mongodb+srv://mlafourcade:xXugqpTxalizGWHK@cluster0.931bp.mongodb.net/UserRegister?retryWrites=true&w=majority";
var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose_1.default.connect(uri)
    .then(function () {
    console.log("Mongo db Connection Successfully");
}, function (err) {
    console.log("Mongo db Connection Error");
}).catch(function (err) {
    console.log("Mongo db Connection Error" + err);
});
var ReadMongodbData = function (parameter) {
    return new Promise(function (resolve, reject) {
        schema_1.dataformat.find({ userpass: parameter }).then(function (result) {
            console.log(result);
            resolve(result);
        }).catch(function (error) {
            console.log(error);
            reject(error);
        });
    });
};
exports.ReadMongodbData = ReadMongodbData;
var InsertMongodbData = function (JsonData) {
    JsonData.save(function (error) {
        if (error) {
            console.log('InsertMongoDB Error: ' + error);
        }
        else {
            console.log('InsertMongoDB Success');
        }
    });
};
exports.InsertMongodbData = InsertMongodbData;
