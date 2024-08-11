import React,{useState} from 'react'

const contact = () => {
  const [contact,setContact]=useState({name:"",email:"",query:""})

  const handleOnChange = (e)=>{
    setContact({...contact,[e.target.name]:e.target.value}); 
  }

  const addContact = async()=>{
    console.log(contact);

    const apiHeader = new Headers();
      apiHeader.append("Content-Type", "application/json");

    const request = new Request("http://localhost:3000/api/contactApi", {
      method: "POST",
      headers: apiHeader,
      body: JSON.stringify(contact),
    });
    
    const response1 = await fetch(request);
    if(response1.status==200){
      alert("contact noted, we will look at your query soon");
    }else{
      alert("Error contact details not saved");
    }
    console.log(response1.status);
  }




  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="email" className="form-control" id="name" name="name" value={contact.name} onChange={handleOnChange} placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" name="email" value={contact.email} onChange={handleOnChange} placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
              <label htmlFor="query" className="form-label">Query</label>
              <textarea className="form-control" id="query" name="query" rows="3" onChange={handleOnChange} value={contact.query}></textarea>
            </div>
            <div className="col">
               <button type="button" className="btn btn-outline-success" onClick={addContact}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default contact
