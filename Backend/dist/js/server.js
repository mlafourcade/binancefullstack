"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes/routes");
var schema_1 = require("./models/schema");
var database_1 = require("./models/database");
var app = (0, express_1.default)();
var Port = process.env.PORT || 3001;
app.use(routes_1.routes);
app.listen(Port, function () {
    console.log('Server Runing on port ' + Port);
});
function SaveTest() {
    console.log("First Data Saved");
    var newUser = new schema_1.dataformat();
    newUser.email = 'lafourcade.job@gmail.com';
    newUser.username = 'lafourcade.job';
    newUser.userpass = '98765';
    (0, database_1.InsertMongodbData)(newUser);
}
function ReadTest() {
    console.log("First Data Read");
    (0, database_1.ReadMongodbData)('98765');
}
/*const express = require('express');
const app = express();

const dataformat = require('./models/schema');
const DBMongo = require('./models/database');
const routes = require("./Backend/backroutes");

app.use(routes);
//const schema = new dataformat();
//const Page = mongoose.model('Page', schema);
//const p = new Page({ name: 'mongodb.org' });

function SaveTest () {

   console.log("First Data Saved");

   var newUser = new dataformat();
   newUser.email = 'lafourcade.job@gmail.com';
   newUser.username = 'lafourcade.job';
   newUser.userpass = '12345';

   //DBMongo.InsertMongodbData(newUser);
}

var server = app.listen(3001, function () {

   var host = server.address().address
   var port = server.address().port
   
   SaveTest();

   //let SchemaAux = new dataformat();
   //DBMongo.InsertMongodbData(SchemaAux);

   console.log("Example app listening at http://%s:%s", host, port)
})*/ 
