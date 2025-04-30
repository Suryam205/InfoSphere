import React from 'react'
import { useEffect , useState } from 'react'
import axios from "axios";
import "./SportCard.css"

const SportCard = ({role}) => {
    const [sports , setSports] = useState([]);
    
    useEffect(()=>{
        const getSports = async()=>{
            const res = await axios.get("http://localhost:4000/sport/getsports", {
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
        const res = await axios.delete(`http://localhost:4000/sport/deleteSport?id=${id}`)
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
            <img src={sport.image} alt="sport" className="sport-img" />
            <div className="card-content">
                <h3>{sport.sportName}</h3>
                <p className="name">name: {sport.name}</p>
                <p className='category'>category: {sport.category}</p>
                <p className="teamName">teamName: {sport.teamName}</p>
                <p className="description">description: {sport.description}</p>
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
