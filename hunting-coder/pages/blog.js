import React,{useState,useEffect} from "react";
import Link from "next/link"
import styles from "@/styles/Blog.module.css";


const blog = () => {
  const [blogs,setBlogs] = useState([]);

  const url = `http://localhost:3000/api`;
  const fetchData = async () => {
    try {
         let data = await fetch(url+'/blogs',{ method: 'get'});
         let parsedData = await data.json();
         console.log(parsedData);
         setBlogs(parsedData.result);
    } catch (e) {
      console.log(e);
    }
     
   };

  useEffect(()=>{
      console.log('inside use effect');
      fetchData();
  },[]);

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
                <p>{blog.content.substring(1,100)}...</p>
              </Link>
            })}
       

       
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default blog;
