// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import { promises as frs } from 'fs';
import path from 'path';

export default async (req:NextApiRequest, res:NextApiResponse) => {
  try {
    const dirRelativeFolder = 'responseJson'
    const dir = path.resolve('.', dirRelativeFolder);
    const filenames = fs.readdirSync(dir);
    
    let data: string[] = [];
    for (let index = 0; index < filenames.length; index++) {
      const element = filenames[index];

      const file = await frs.readFile(process.cwd() +  path.join('/', dirRelativeFolder, element), 'utf8');
      data.push(JSON.parse(file));

    }

    const obj = {
      result : data
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