import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./RegisterMovie.css"
import { API_URL } from '../../../config/api';



const RegisterMovie = () => {

    const navigate = useNavigate();


    const [movieName, setFullName] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [image, setImageURL] = useState("");
    const [description, setDescription] = useState("");

const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
        movieName,
        genre,
        rating,
        releaseDate,
        image,
        description
    }
    const res = await axios.post(`${API_URL}/movie/addMovie`, data)
    console.log(res.data);
    if (res.data.success) {
        alert("Movie added successfully");

    } else {
        alert("Failed to add movie");
    }
    setFullName('');
    setGenre('');
    setRating('');
    setReleaseDate('');
    setImageURL('');
    setDescription('');
    navigate("/movie")
}

  return (
    <div className="register-container">
    
      <h1 className="register-title">Register  a New Movie!</h1>
    <form className="register-form" onSubmit={(e)=>submitHandler(e)} method="POST">
        <label  className="form-label">Enter Movie Name</label><br/>
        <input className='form-input'
            onChange={(e) => setFullName(e.target.value)}
            value={movieName}
            type="text" 
            name="movieName" 
            placeholder="Movie Name" 
            required/><br/>

        <label  className="form-label">Enter Genre</label><br/>
        <input className='form-input'
            onChange={(e) => setGenre(e.target.value)}
            value={genre}
            type="text" 
            name="genre" 
            placeholder="Genre" 
            required/><br/>

        <label className="form-label">Enter Rating</label><br/>
        <input className='form-input'
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            type="text" 
            name="rating"
            placeholder="Rating"  
            required/><br/>
      
        <label  className="form-label">Enter Release Date</label><br/>
        <input className='form-input'
            onChange={(e) => setReleaseDate(e.target.value)}
            value={releaseDate}
            type="text" 
            name="releaseDate"
            placeholder="Release Date"  
            required/><br/>

        <label  className="form-label">Enter Image URL</label><br/>
        <input className='form-input'
            onChange={(e) => setImageURL(e.target.value)}
            value={image}
            type="text" 
            name="image"
            placeholder="Image URL"  
            required/><br/>

         <label  className="form-label">Enter Description</label><br/>
        <input className='form-input'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text" 
            name="description"
            placeholder="Description"  
            required/><br/>

        <button className="submit-btn" type="submit">submit</button>
    </form>
    
    </div>
  )
}

export default RegisterMovie
