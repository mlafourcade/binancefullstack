import { Router, Request, Response } from 'express';
import { HandleData } from '../controllers/controler'

export const routes = Router();

routes.get('/readData/:id', HandleData.findByParameter);

routes.get('/api',  ( req: Request, res: Response ) => {

    console.log("Data Received");

    const response = {
        users: ['userOne', 'userTwo', 'userThree']   
    }
    return res.json({
        users: ['userOne', 'userTwo', 'userThree', 'userFour']
    });
});

routes.get('/', ( req: Request, res: Response ) => {
    return res.json({
        message: 'Backend says: Mongodb configured'
    });
});

