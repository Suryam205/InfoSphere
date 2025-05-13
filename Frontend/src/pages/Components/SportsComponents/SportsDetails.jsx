import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { API_URL } from '../../../config/api';
import GetComments from '../Comments/GetComments';
import AddComment from '../Comments/AddComment';





const SportsDetails = () => {
    const location = useLocation();
    const { sport } = location.state || {};
    
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

    if(!sport){
        return <p>No sport Data Available</p>
    }
    
  return (
    <div>
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
          {role === "explorer" && (
                <AddComment userId = {userId}  contentId={sport._id} contentType="sport"  />
              )}
            <GetComments contentId={sport._id} contentType="sport" role={role}/>
    </div>


  )
}

export default SportsDetails
