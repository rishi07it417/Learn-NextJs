import React,{useState,useEffect} from 'react'
import {useRouter} from 'next/router'

const slug = () => {
    const router = useRouter();
    console.log(router.query);
    const {slug} = router.query;

    const [blog,setBlog] = useState([]);

    const url = `http://localhost:3000/api`;
    const fetchData = async () => {
      try {
           let data = await fetch(url+'/blogItem?slug='+slug,{ method: 'get'});
           let parsedData = await data.json();
           console.log(parsedData);
           setBlog(parsedData.result);
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
    <div className="conatiner">
      <div className="row">
        <div className="col">
          <div className="h1 d-flex justify-content-center">{blog.title}</div>
          <br></br>
          <div className='d-flex justify-content-center mx-4 px-5'>
            {blog.content}
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default slug
