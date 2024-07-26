// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { promises as frs } from 'fs';
import path from 'path';

export default async (req:NextApiRequest, res:NextApiResponse) => {
    try {
        const dirRelativeFolder = 'responseJson'
        const dir = path.resolve('.', dirRelativeFolder);
        const file = req.query.slug ?req.query.slug+".json":"";
        if(file===""){
            res.status(200).json(JSON.parse("{\"result\":\"no data found\"}"));
            return;
        }
        let data: string = await frs.readFile(process.cwd() +  path.join('/', dirRelativeFolder, file), 'utf8');
        const obj = {
            result : JSON.parse(data)
        }
  
        res.status(200).json(obj);
    } catch (error) {
        console.log(error);
        const obj = {
            result : "internal server error"
        }
        res.status(500).json(obj);

    }
  
}