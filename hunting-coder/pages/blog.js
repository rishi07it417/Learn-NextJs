import React,{useState} from "react";
import Link from "next/link"
import styles from "@/styles/Blog.module.css";
import {GetServerSideProps} from 'next'
import { promises as frs } from 'fs';
import path from 'path';
import fs from 'fs';

const Blog = (props) => {
  const [blogs,setBlogs] = useState(props.result);


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
          <div className={styles.grid}>
            {blogs.map((blog,index)=>{
                return  <Link
                key={index}
                href={"http://localhost:3000/blogpost/"+blog.slug}
                className={styles.card}
                rel="noopener noreferrer"
              >
                <h2>
                  {blog.title} <span>-&gt;</span>
                </h2>
                <p>{blog.metadata}...</p>
              </Link>
            })}
       

       
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

/*
export async function getServerSideProps(context) {

  const slug = context.query.slug;


  const url = `http://localhost:3000/api`;
  let parsedData = { 
    result : {
      title : "",
      content : "",
      slug : "",
      metadata : ""
    }
  };

  parsedData = JSON.stringify(parsedData);

  
    try {
         const data = await fetch(url+'/blogs',{ method: 'get'});
         parsedData = await data.json();
    } catch (e) {
      console.log(e);
    }
     

return {
  props: parsedData,
}
}
*/

// This function gets called at build time
export async function getStaticProps(context) {
  let obj = {
    result : ""
  };

  try {
    const dirRelativeFolder = 'responseJson'
    const dir = path.resolve('.', dirRelativeFolder);
    const filenames = fs.readdirSync(dir);
    
    let data= [];
    for (let index = 0; index < filenames.length; index++) {
      const element = filenames[index];

      const file = await frs.readFile(process.cwd() +  path.join('/', dirRelativeFolder, element), 'utf8');
      data.push(JSON.parse(file));

    }

    obj = {
      result : data
   }


} catch (error) {
    console.log(error);
    obj = {
        result : "internal server error"
    };

}

  return {
    props: obj
  }
}

export default Blog;
