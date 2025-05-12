import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../Styles/Details.css"
import AddComment from '../AddComment';





const MovieDetails = () => {
    const location = useLocation();
    const { movie } = location.state || {};
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
                <Link to="movie.link"><button>Know More</button></Link>
            </div>

          </div>
        </div>
      </div>
      

     
   </div>

  )
}

export default MovieDetails
