import React from 'react'
import "./signin.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
     
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [role , setRole] = useState("");

     const navigate = useNavigate();
    
     const submitHandler = async (e) => {
      e.preventDefault();
      const data = {
        email,
        password,
        role
      };
    
      try {
        const res = await axios.post("http://localhost:4000/user/signin", data, {
          withCredentials: true
        });
        console.log(res.data);
    
        if (res.data.success) {
          
          navigate("/home");
        } else {
          alert("Login failed");
        }
    
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          alert(error.response.data.message); // Shows "Incorrect password" or "User not found"
        } else {
          alert("Incorrect password!");
        }
        console.error("There was an error!", error);
      }
    
      setEmail('');
      setPassword('');
      setRole("");
    };
    

  return (
    <div className='signin'>
      <h1>Signin Page!</h1>
    <form className='signinForm' onSubmit={(e)=>submitHandler(e)} >
        <label >Enter email</label><br/>
        <input className='signin-input'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text" 
            name="email" 
            placeholder="email"  
            required/><br/>
        <label >Enter password</label><br/>
        <input className='signin-input'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password" 
            placeholder="password" 
            required/><br/>
             <label> Enter Role</label>   
         <select className='signup-role'
           onChange={(e)=> setRole(e.target.value)}
           value={role}
           name = "role">
            <option>Select Role</option>
            <option value="vendor">Vendor</option>
            <option value="explorer">Explorer</option>
           </select>
        <button className='signin-btn' type="submit">submit</button><br/>
        <Link to="/signup">create new account!</Link>
    </form>
    </div>
  )
}

export default Signin
