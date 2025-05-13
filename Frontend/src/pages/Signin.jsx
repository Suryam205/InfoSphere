import React from 'react'
import './Components/Styles/Signin.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// apiConfig.js or anywhere
import { API_URL } from '../config/api';

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
        const res = await axios.post(`${API_URL}/user/signin`, data, {
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
    <div className='signin-container'>
    <div className='signin-card'>
      <h1 className='signin-title'>Sign In</h1>
      <form className='signin-form' onSubmit={(e) => submitHandler(e)}>
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
          <label className='form-label hlo'>Password</label>
          <input 
            className='form-input'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password" 
            placeholder="Enter your password" 
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
        
        <button className='submit-btn' type="submit">Sign In</button>
        
        <div className='signup-link'>
          Don't have an account? <Link to="/signup">Create one</Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Signin
