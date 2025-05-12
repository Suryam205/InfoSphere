import React from 'react'
import { Link, useLocation } from 'react-router-dom';



const ProductDetails = () => {
    const location = useLocation();
    const { product } = location.state || {};
    

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
                  <Link to="product.link"><button>Know More</button></Link>
             </div>
          
          </div>
        </div>   
      </div>    
    </div>

  )
}

export default ProductDetails
