import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Card from './MovieComponents/Card'
import MovieBanner from './MovieComponents/MovieBanner'
import "./styles/Movie.css"
import Footer from './Footer'
import { useEffect } from 'react'
import axios from "axios"
import { API_URL } from '../../config/api';


const Movie = () => {
  const [role, setRole] = useState("");

  useEffect(()=>{
    const getUserRole = async()=>{
        try{
          const res = await axios.get(`${API_URL}/user/getUserRole`,{
            withCredentials: true
            });
            if(res.data.success){
                setRole(res.data.role)
            }else{
                console.warn("Failed to fetch Role", res.data.message);
            }
          }catch(err){
            console.error("Error fetching user role" ,err.message );
          }
        }; 
        getUserRole();
 }, []);

   
   
  return (
    <div>
        <Navbar role={role} />
        <MovieBanner/>
        <h3>Top Recommended Movies</h3>
        <Card  role={role}/>
        {role === "vendor" && (
          <div>
             <Link to="/registerMovie"> <button  className='movie-btn'>Add Movie</button></Link>
          </div>
        )}
        <Footer/>
    </div>
  )
}

export default Movie
