import React from 'react'
import {  Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { Link, useNavigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import axios from 'axios';
import { API_URL } from '../Home';


const Navbar = ({role}) => {
    const navigate = useNavigate();
    const submitLogout = async () => {
    
    console.log("logout clicked")
    try{
      const res = await axios.get(`${API_URL}/user/logout`, {
        withCredentials: true
      });
      
      if (res.data.success) {
        alert("Logout successful");
        navigate("/signin");
      } else {
        alert("Logout failed");
      }

    } catch (error) {
      
      console.error("There was an error!", error);
    }
  }
  return (
    
      <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/home">Surya's Web</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/movie">Movie</Link>
                </li>
                
                <li className="nav-item">
                <Link className="nav-link" to="/shopping">Shopping</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/sport">Sports</Link>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>

               <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" >{role} in</a>
                </li>
                

                
            </ul>
            <form className="d-flex align-items-center gap-2" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button> 
                 <button className="btn btn-danger" type="button" onClick={submitLogout}>Logout</button>

            </form>


            </div>
        </div>
        </nav>
      </>
   
  )
}

export default Navbar
