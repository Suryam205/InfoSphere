import React, { useState } from 'react'
import './Components/Styles/Signup.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config/api';


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
   const res = await axios.post(`${API_URL}/user/signup`, data)
    console.log(res.data);
    setFullName('');
    setEmail('');
    setPassword('');
    setRole("");
    alert("Registration succesfull");
    Navigate("/Signin")
 }

  return (
    <div className='signup-container'>
  <div className='signup-card'>
    <h1 className='signup-title'>Register with a New Account!</h1>
    <form className='signup-form' onSubmit={(e) => submitHandler(e)} method="POST">
      <div className='form-group'>
        <label className='form-label'>Full Name</label>
        <input 
          className='form-input'
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          type="text" 
          name="fullName" 
          placeholder="Enter your full name" 
          required
        />
      </div>
      
      <div className='form-group'>
        <label className='form-label'>Email</label>
        <input 
          className='form-input'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email" 
          name="email" 
          placeholder="Enter your email" 
          required
        />
      </div>
      
      <div className='form-group'>
        <label className='form-label'>Password</label>
        <input 
          className='form-input'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password" 
          name="password"
          placeholder="Create a password"  
          required
        />
      </div>
      
      <div className='form-group'>
        <label className='form-label'>Role</label>
        <select 
          className='form-select'
          onChange={(e) => setRole(e.target.value)}
          value={role}
          name="role"
          required
        >
          <option value="">Select Role</option>
          <option value="vendor">Vendor</option>
          <option value="explorer">Explorer</option>
        </select>
      </div>
      
      <button className='submit-btn' type="submit">Create Account</button>
      
      <div className='login-link'>
        Already have an account? <Link to="/signin">Login here</Link>
      </div>
    </form>
  </div>
</div>
  )
}

export default Signup
