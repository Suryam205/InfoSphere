import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Banner from './Components/Banner';
import SportCard from './Components/SportsComponents/SportCard';
import ProductCard from './Components/ShoppingComponents/ProductCard';
import Card from './Components/MovieComponents/Card';
import "./Styles/Home.css"
import Footer from './Components/Footer';
import { useEffect , useState} from 'react';



const Home = () => {
  const Navigate = useNavigate();
  const submitLogout = async () => {
    try{
      const res = await axios.get("http://localhost:4000/user/logout", {
        withCredentials: true
      });
      console.log(res.data);
      if (res.data.success) {
        alert("Logout successful");

        Navigate("/signin");
      } else {
        alert("Logout failed");
      }

    } catch (error) {
      
      console.error("There was an error!", error);
    }
  }

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
        <Navbar submitLogout = {submitLogout} role={role}/>
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
