import mongoose from 'mongoose';
import { dataformat } from './schema'

const uri = "mongodb+srv://mlafourcade:xXugqpTxalizGWHK@cluster0.931bp.mongodb.net/UserRegister?retryWrites=true&w=majority";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(uri)
    .then(
        () => { 
            console.log("Mongo db Connection Successfully");
        },
        err => { 
            console.log("Mongo db Connection Error");
        }
    ).catch((err)=>{
        console.log("Mongo db Connection Error"+err);
    });

export const ReadMongodbData = function (parameter:any) {

    return new Promise((resolve, reject)=>{  
      dataformat.find({userpass:parameter}).then(function(result){
          console.log(result);
          resolve(result);
      }).catch(function(error:any){
          console.log(error);
          reject(error);
      });
    });
}

export const InsertMongodbData = function (JsonData: any) {

    JsonData.save(function(error:any) {
      if(error) {
          console.log('InsertMongoDB Error: ' + error)
      }else {
        console.log('InsertMongoDB Success');
      }
    });    
};


  