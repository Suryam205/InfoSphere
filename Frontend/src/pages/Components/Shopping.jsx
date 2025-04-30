import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import ShoppingBanner from './ShoppingComponents/ShoppingBanner'
import ProductCard from './ShoppingComponents/ProductCard'
import "../styles/Shopping.css"
import Footer from './Footer'
import { useEffect , useState } from 'react'
import axios from "axios"

const Shopping = () => {

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
        <ShoppingBanner/>   
        <ProductCard role={role}/>
        {role === "vendor" &&(
          <div>
             <Link to="/registerProduct">
                <button className="product-btn">Add Product</button>
            </Link>
          </div>
        )}
        <Footer/>
  
    </div>
  )
}

export default Shopping
