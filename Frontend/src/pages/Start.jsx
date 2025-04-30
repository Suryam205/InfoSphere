import React from 'react'
import { Link } from 'react-router-dom'
import './Start.css';

const start = () => {
  return (
    <div className="start-container">
      <img className="bg-image" 
      src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?semt=ais_hybrid&w=740" alt="coffee" />
      <h1 className='content'>Hey! It's Surya's Web</h1>
      <div className="overlay-content">
        <Link to="/signin">
          <button className="start-btn">Continue</button>
        </Link>
      </div>
      
    </div>
  )
}

export default start
