import express, {Request, Response} from 'express';
import { routes } from './routes/routes';

import { dataformat } from './models/schema';
import { ReadMongodbData, InsertMongodbData } from './models/database' 

import { HandleData } from './controllers/controler'

const app = express();
const Port = process.env.PORT || 3001;

app.use(routes);

app.listen(Port, () => {
    console.log('Server Runing on port ' + Port);
})

function SaveTest () {

    console.log("First Data Saved");
 
    var newUser = new dataformat();
    newUser.email = 'lafourcade.job@gmail.com';
    newUser.username = 'lafourcade.job';
    newUser.userpass = '98765';
 
    InsertMongodbData(newUser);
}

function ReadTest () {

    console.log("First Data Read");
 
    ReadMongodbData('98765');
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