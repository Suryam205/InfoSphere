import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import SportsBanner from './SportsComponents/SportsBanner'
import SportCard from './SportsComponents/SportCard'
import "../Styles/Sport.css"
import Footer from './Footer'
import { useEffect, useState } from 'react'
import axios from "axios"


const Sports = () => {
    const [role, setRole] = useState("");
  

  useEffect(()=>{
      const getUserRole = async()=>{
          try{
              const res = await axios.get("http://localhost:4000/user/getUserRole",{
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
      <SportCard role={role}/> 
       {role === "vendor" && (
         <div>
             <Link to="/registerSport">
               <button className="product-btn">Add Sport Data</button>
             </Link>
         </div>
       )}
       <Footer/>
     

        

    </div>
  )
}

export default Sports
