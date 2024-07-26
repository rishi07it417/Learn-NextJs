import React,{useState,useEffect} from 'react'
import {useRouter} from 'next/router'
import {GetServerSideProps} from 'next'



const Slug = (props) => {

  const createMarkup = (content) => {
    return { __html: content };
 }

  const [blog,setBlog] = useState(props.result);

   

  return (
    <>
    <div className="conatiner">
      <div className="row">
        <div className="col">
          <div className="h1 d-flex justify-content-center">{blog.title}</div>
          <br></br>
          <div className='d-flex justify-content-center mx-4 px-5'  dangerouslySetInnerHTML={createMarkup(blog.content) } />
        </div>
      </div>
    </div>
      
    </>
  )
}

export async function getServerSideProps(context) {

    const slug = context.query.slug;


    const url = `http://localhost:3000/api`;
    let parsedData = { 
      result : {
        title : "",
        content : ""
      }
    };
  
    parsedData = JSON.stringify(parsedData);
        try {
           const data = await fetch(url+'/blogItem?slug='+slug,{ method: 'get'});
           parsedData = await data.json();
      } catch (e) {
        console.log(e);
      }
       
 
  return {
    props: parsedData,
  }
}

export default Slug
