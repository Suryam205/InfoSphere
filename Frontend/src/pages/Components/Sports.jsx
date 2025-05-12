import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import SportsBanner from './SportsComponents/SportsBanner'
import SportCard from './SportsComponents/SportCard'
import "./Styles/Sport.css"
import Footer from './Footer'
import { useEffect, useState } from 'react'
import axios from "axios"
import { API_URL } from '../../config/api';



const Sports = () => {
    const [role, setRole] = useState("");
  

  useEffect(()=>{
      const getUserRole = async()=>{
          try{
              const res = await axios.get(`${API_URL}/user/getUserRole`,{
                  withCredentials: true
              });
              if(res.data.success){
                  setRole(res.data.role)
              }else{
                  console.warn("Failed to fetch Role", res.data.message);
              }
            }catch(err){
              console.error("Error fetching user role" ,err.message );
            }
          }; getUserRole();
   }, []);

  return (
    <div>
      <Navbar role={role}/>
      <SportsBanner/>
       <h3>Top Recommended Sports</h3>
      <SportCard role={role}/> 
       {role === "vendor" && (
         <div>
             <Link to="/registerSport">
               <button className="sport-btn">Add Sport Data</button>
             </Link>
         </div>
       )}
       <Footer/>
     

        

    </div>
  )
}

export default Sports
