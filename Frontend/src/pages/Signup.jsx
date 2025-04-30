import React, { useState } from 'react'
import './signup.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role , setRole] = useState("");
  
  const Navigate = useNavigate();
  
 const submitHandler = async (e) => {
    e.preventDefault();
    const data ={
        fullName,
        email,
        password,
        role
    }
   const res = await axios.post("http://localhost:4000/user/signup", data)
    console.log(res.data);
    setFullName('');
    setEmail('');
    setPassword('');
    setRole("");
    Navigate("/Signin")
 }

  return (
    <div className='signup'>
      <h1>Register with a New Account!</h1>
    <form className='signupForm' onSubmit={(e)=>submitHandler(e)} method="POST">
        <label >Enter Full Name</label><br/>
        <input className='signup-input'
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text" 
            name="fullName" 
            placeholder="full name" 
            required/><br/>
        <label >Enter email</label><br/>
        <input className='signup-input'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text" 
            name="email" 
            placeholder="email" 
            required/><br/>
        <label >Enter password</label><br/>
        <input className='signup-input'
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
             
           
        <button className='signup-btn' type="submit">submit</button>
        <span>Already have an account? <Link to="/signin">login here!</Link></span>
    </form>
    </div>
  )
}

export default Signup
