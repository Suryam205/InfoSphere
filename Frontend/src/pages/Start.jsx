import React from 'react'
import { Link } from 'react-router-dom'
import './Components/Styles/Start.css';

const start = () => {
  return (
    <div className="start-container">
      <img className="bg-image" 
      src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9naW58ZW58MHx8MHx8fDA%3D" alt="coffee" />
      <h1 className='content'>Welcome to Surya's Web</h1>
      <div className="overlay-content">
        <Link to="/signin">
          <button className="start-btn">Continue</button>
        </Link>
      </div>
      
    </div>
  )
}

export default start
