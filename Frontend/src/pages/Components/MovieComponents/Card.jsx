import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios';
import './Card.css'

const Card = ({role}) => {
   const [movies , setMovies] = useState([]);

   useEffect(()=>{
    const getMovies = async() =>{
        const res = await axios.get("http://localhost:4000/movie/getMovies", {
            withCredentials: true
        })
        console.log(res.data);
        if(res.data.success){
            setMovies(res.data.movies);
      }
      
   };getMovies() 
} , []);

 
  const handleDelete = async(id)=>{
    try{
            const res = await axios.delete(`http://localhost:4000/movie/deleteMovie?id=${id}`)
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
            <img src={movie.image} alt="Movie Poster" className="movie-img" />
            <div className="card-content">
                <h3>{movie.movieName}</h3>
                <p className="genre">Genre: {movie.genre}</p>
                <div className="hidden-details">
                    <p>Rating: {movie.rating}</p>
                    <p>Release Date: {new Date(movie.releaseDate).toLocaleDateString()}</p>
                    <p>Description: {movie.description}</p>
                </div>
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
