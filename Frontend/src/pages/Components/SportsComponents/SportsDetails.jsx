import React from 'react'
import { Link, useLocation } from 'react-router-dom';



const SportsDetails = () => {
    const location = useLocation();
    const { sport } = location.state || {};
    

    if(!sport){
        return <p>No sport Data Available</p>
    }
    
  return (
    <div className='box'>
    <div
      className="left-block"
      style={{ backgroundImage: `url(${sport.image})` }}
    ></div>
  
    <div className="right-block">
      <div className="sport-info">
        <div className="info-item sport-title">
          <span className="info-label">sport Name</span>
          <span className="info-value">{sport.category}</span>
        </div>
        
        
        
        <div className="info-item genre">
          <span className="info-label">Team Name</span>
          <span className="info-value">{sport.teamName}</span>
        </div>

        <div className="info-item release-date">
          <span className="info-label">Description</span>
          <span className="info-value">{sport.description}</span>
        </div>

        <div className="know-more">
             <Link to={sport.link}><button>Know More</button></Link>
         </div>
       
        
       
      </div>
    </div>
  </div>

  )
}

export default SportsDetails
