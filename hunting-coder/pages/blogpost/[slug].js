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
          <div className="h1 d-flex justify-content-center">{blog && blog.title}</div>
          <br></br>
          <div className='d-flex justify-content-center mx-4 px-5'  dangerouslySetInnerHTML={createMarkup(blog && blog.content) } />
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

/*

export async function getStaticPaths() {

  let myPath = [];

  try {
    const dirRelativeFolder = 'responseJson'
    const dir = path.resolve('.', dirRelativeFolder);
    const filenames = fs.readdirSync(dir);
    
    for (let index = 0; index < filenames.length; index++) {
        myPath.push({  params : {   slug : filenames[index].substring(0,filenames[index].indexOf('.'))   }  });
    }
    console.log(myPath);
    
  } catch (error) {
    console.log(error);
  }
 

  return {
      paths: myPath,
      fallback: true // false or 'blocking'
  };
}


// This function gets called at build time
export async function getStaticProps(context) {
  let obj = {
    result : {
       title : "",
        content : ""

    }
  };

  try {
    console.log("::::::::::::::::::::::::::");
    console.log(context.params);
    const slug = context.params.slug;

    const dirRelativeFolder = 'responseJson'
    const file = slug ?slug+".json":"";


    if(file===""){
        res.status(200).json(JSON.parse("{\"result\":\"no data found\"}"));
        return;
    }
    let data = await frs.readFile(process.cwd() +  path.join('/', dirRelativeFolder, file), 'utf8');
    obj = {
        result : JSON.parse(data)
    };


} catch (error) {
    console.log(error);
    obj = {
        result : "internal server error"
    };

}
console.log("final result:::::::::::::::");
console.log(obj);
  return {
    props: obj
  }
}
  */

export default Slug
