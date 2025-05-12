import React from 'react'
import axios from 'axios';
import Navbar from './components/Navbar';
import Banner from './Components/Banner';
import SportCard from './Components/SportsComponents/SportCard';
import ProductCard from './Components/ShoppingComponents/ProductCard';
import Card from './Components/MovieComponents/Card';
import "./Home.css"
import Footer from './Components/Footer';
import { useEffect , useState} from 'react';
export const API_URL = import.meta.env.VITE_API_URL;




const Home = () => {
  

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
        <Navbar  role={role}/>
        <Banner/>

        <div  className='home-movies'>
          TOP RECOMMENDED MOVIES
          <Card role={role}/>
        </div>
        <div className='home-fashion'>
          TOP RECOMMENDED FASHION
          <ProductCard role={role}/>
        </div>
        <div className='home-sports'>
          TOP RECOMMENDED SPORTS
          <SportCard role={role}/>
        </div>

        <Footer/>
        
    </div>
  )
}

export default Home
