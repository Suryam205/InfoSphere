import React from 'react'
import { useEffect , useState } from 'react'
import axios from "axios";
import "./SportCard.css"
import { Link } from 'react-router-dom';
import { API_URL } from '../../../config/api';



const SportCard = ({role}) => {
    const [sports , setSports] = useState([]);
    
    useEffect(()=>{
        const getSports = async()=>{
            const res = await axios.get(`${API_URL}/sport/getSports`, {
                withCredentials: true
            });
            if(res.data.success){
                setSports(res.data.sport)
            }
        }
        getSports();
    } , [])

   
    
  

    const handleDelete= async(id)=>{
       try{
        const res = await axios.delete(`${API_URL}/sport/deleteSport?id=${id}`)
        if(res.data.success){
            alert("Sport deleted successfully")
        }else{
            alert("Failed to delete the Sport")
        }
       }catch(error){
        console.log(error.message);
        alert("internal server error")
       }
    }

  return (
    <div className='sport-card'>
    {sports.map((sport) => (
        <div className='card' key={sport._id}>
            <Link to="/sportDetails" state={{sport}}> 
                 <img src={sport.image} alt="sport" className="sport-img" />
            </Link>
            <div className="card-content">
                <h3>{sport.teamName}</h3>
               
             </div>
            { role === "vendor" && (
              <div>
                   <button className="delete-btn" onClick={() => handleDelete(sport._id)}>X</button>
               </div>
            )}
        </div> 
    ))}
</div>
  )
}

export default SportCard
