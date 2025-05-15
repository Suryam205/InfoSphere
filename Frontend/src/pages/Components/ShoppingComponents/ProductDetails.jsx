import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { API_URL } from '../../../config/api';
import GetComments from '../Comments/GetComments';
import AddComment from '../Comments/AddComment';




const ProductDetails = () => {
    const location = useLocation();
    const { product } = location.state || {};

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
    

    if(!product){
        return <p>No product Data Available</p>
    }
    
  return (
    <div>
          <div className='box'>
        <div
          className="left-block"
          style={{ backgroundImage: `url(${product.image})` }}
        ></div>
      
        <div className="right-block">
          <div className="product-info">
            <div className="info-item product-title">
              <span className="info-label">product Name</span>
              <span className="info-value">{product.productName}</span>
            </div>
            
            
            
            <div className="info-item genre">
              <span className="info-label">Brand</span>
              <span className="info-value">{product.brand}</span>
            </div>
            
            <div className="info-item rating">
              <span className="info-label">Rating</span>
              <span className="info-value">{product.rating} ⭐</span>
            </div>
            
            <div className="info-item release-date">
              <span className="info-label">Price</span>
              <span className="info-value">${product.price}</span>
            </div>

             <div className="know-more">
                  <Link to={product.link}><button>Know More</button></Link>
             </div>
          </div>

              <GetComments contentId={product._id} contentType="product" role={role} />
              
              <AddComment userId = {userId}  contentId={product._id} contentType="product"  />
               
        </div>   
      </div>    
    </div>

  )
}

export default ProductDetails
