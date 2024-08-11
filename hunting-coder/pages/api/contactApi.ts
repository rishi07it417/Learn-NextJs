// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import { promises as frs } from 'fs';
import path from 'path';

export default async (req:NextApiRequest, res:NextApiResponse) => {
  try {
    const dirRelativeFolder = 'contactQuery'
    const dir = path.resolve('.', dirRelativeFolder);
    const filenames = fs.readdirSync(dir);
    const fileName = filenames.length+".json";


    fs.writeFile(process.cwd() +  path.join('/', dirRelativeFolder,fileName), JSON.stringify(req.body),()=>{
        const obj = {
            result : "data added successfully"
         }
          
          res.status(200).json(obj);
    });
    

  } catch (error) {
    console.log(error);
    const obj = {
        result : "internal server error"
    }
    res.status(500).json(obj);
  }
  
}