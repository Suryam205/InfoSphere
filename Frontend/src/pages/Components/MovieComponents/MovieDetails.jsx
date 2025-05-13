import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../Styles/Details.css"
import AddComment from '../Comments/AddComment';
import axios from 'axios';
import { API_URL } from '../../../config/api';
import { useState,useEffect } from 'react';
import GetComments from '../Comments/GetComments';








const MovieDetails = () => {
    

    const [userId, setUserId] = useState("");
    const [role , setRole] = useState('');
    

  useEffect(()=>{
    const getUser= async()=>{
        try{
          const res = await axios.get(`${API_URL}/user/getUser`,{
            withCredentials: true
            });
            if(res.data.success){
                setUserId(res.data.user._id)
                setRole(res.data.user.role)
            }else{
                console.warn("Failed to fetch Role", res.data.message);
            }
          }catch(err){
            console.error("Error fetching user role" ,err.message );
          }
        }; 
        getUser();
 }, []);

   // get movie details using the state and location method
    const location = useLocation();
    const { movie  } = location.state || {};
    console.log(movie);
    if(!movie){
        return <p>No Movie Data Available</p>
    }
    
  return (
   <div>
          <div className='box'>
        <div
          className="left-block"
          style={{ backgroundImage: `url(${movie.image})` }}
        ></div>
      
        <div className="right-block">
          <div className="movie-info">
            <div className="info-item movie-title">
              <span className="info-label">Movie Name</span>
              <span className="info-value">{movie.movieName}</span>
            </div>
            
            <div className="info-item ott-platform">
              <span className="info-label">OTT Platform</span>
              <span className="info-value">Netflix</span>
            </div>
            
            <div className="info-item genre">
              <span className="info-label">Genre</span>
              <span className="info-value">{movie.genre}</span>
            </div>
            
            <div className="info-item rating">
              <span className="info-label">Rating</span>
              <span className="info-value">{movie.rating} ⭐</span>
            </div>
            
            <div className="info-item release-date">
              <span className="info-label">Release Date</span>
              <span className="info-value">{movie.releaseDate}</span>
            </div>
            
            <div className="info-item description">
              <span className="info-label">Description</span>
              <span className="info-value">{movie.description}</span>
            </div>

            <div className="know-more">
                <Link to={movie.link}><button>Know More</button></Link>
            </div>

          </div>
        </div>
      </div>
       <GetComments contentId={movie._id} contentType="movie"/>
        {role === "explorer" && (
           <AddComment userId = {userId}  contentId={movie._id} contentType="movie"  />
        )}
     
   </div>

  )
}

export default MovieDetails
