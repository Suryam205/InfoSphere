import React from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { API_URL } from '../../../config/api';


const RegisterSport = () => {
    
    const navigate = useNavigate();
    const [name , setName] = useState("");
    const [category , setCategory] = useState("");
    const [teamName , setTeamName] = useState("");
    const [image , setImage] = useState("");
    const [description , setDescription] = useState("");
    const [link , setLink] = useState("");

    const submitHandler = async (e)=>{
        e.preventDefault();
        const sport = {
            name,
            category,
            teamName,
            image,
            description,
            link,
        }
        console.log("link" , link);
        const res = await axios.post(`${API_URL}/sport/addSport` , sport);
        if(res.data.success){
            alert("Sport Created Successfully");
            console.log(res.data);
        }
        else{
            alert("Error n creating the sport");
        }
        setName("");
        setCategory("");
        setTeamName("");
        setImage("");
        setDescription("");
        setLink("");
        navigate("/sport");
        
    }

  return (
    <div>
        <div className="register-container">
    
    <h1 className="register-title">Add  a New Sport!</h1>
  <form className="register-form" onSubmit={(e)=>submitHandler(e)} method="POST">
      <label  className="form-label">Enter  Name</label><br/>
      <input className='form-input'
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text" 
          name="name" 
          placeholder=" Name" 
          required/><br/>

        <label  className="form-label">Enter Category</label><br/>
        <input className='form-input'
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            type="text" 
            name="category" 
            placeholder="Category" 
            required/><br/>
        
       


        <label className="form-label">Enter Team Name</label><br/>
        <input className='form-input'
            onChange={(e) => setTeamName(e.target.value)}
            value={teamName}
            type="text" 
            name="teamName"
            placeholder="Team Name"  
            required/><br/>

         <label  className="form-label">Enter Image URL</label><br/>  
        <input className='form-input'
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text" 
            name="image"
            placeholder="Image URL"  
            required/><br/>

          <label  className="form-label">Enter Description</label><br/>
        <input className='form-input'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text" 
            name="description"
            placeholder="Description"  
            required/><br/>

         
        <label  className="form-label">Link (For Extra info)</label><br/>
        <input className='form-input'
            onChange={(e) => setLink(e.target.value)}
            value={link}
            type="text" 
            name="link"
            placeholder="Add Link"  
            required/><br/>
        
      

      <button className="submit-btn" type="submit">submit</button>
  </form>
  
  </div>
    </div>
  )
}

export default RegisterSport
