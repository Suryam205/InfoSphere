import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios';
import './Card.css'
import { Link } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import { API_URL } from '../../../config/api';


const Card = ({role}) => {
   const [movies , setMovies] = useState([]);

   useEffect(()=>{
    const getMovies = async() =>{
        const res = await axios.get(`${API_URL}/movie/getMovies`, {
            withCredentials: true
        })
        
        if(res.data.success){
            setMovies(res.data.movies);
      }
      
   };getMovies() 
} , []);

 
  const handleDelete = async(id)=>{
    try{
            const res = await axios.delete(`${API_URL}/movie/deleteMovie?id=${id}`)
        if(res.data.success){
            alert("movie deleted successfully")
        }
        else{
            alert("failed to delete movie")
        }
    }catch(error){
        console.error("Error deleting movie:", error);
        alert("Internal Error occurred");
    }
  } 


  return (
    
    <div className='movie-card'>
    {movies.map((movie) => (
        <div className='card' key={movie._id}>
            <Link to="/movieDetails" state={{movie}}>
                <img src={movie.image} alt="Movie Poster" className="movie-img" />
            </Link>
            <div className="card-content">
                <h3>{movie.movieName}</h3>
                
                </div>
               {role === "vendor" &&(
                 <div >
                     <button className="delete-btn" onClick={() => handleDelete(movie._id)}>X</button>
                 </div>
               )}
        </div>
    ))}
</div>

  )
}
 
export default Card
