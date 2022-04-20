import { Request, Response } from "express"
import { ReadMongodbData, InsertMongodbData } from '../models/database' 

export const HandleData = {

    async findByParameter(req:Request, res:Response): Promise<Response> {

        const { id } = req.params;
        let data = await ReadMongodbData(id);
        return res.json(data);
    },
} 