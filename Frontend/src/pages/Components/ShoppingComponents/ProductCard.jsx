import React, { useEffect , useState } from 'react'
import axios from 'axios'
import './ProductCard.css'
import ProductDetails from './ProductDetails'
import { Link } from 'react-router-dom'
import { API_URL } from '../../../config/api';




const ProductCard = ({role}) => {
    const [products , setProducts] = useState([]);
    


    useEffect(()=>{
        const getProducts = async()=>{
            const res = await axios.get(`${API_URL}/shopping/getProducts`, {
                withCredentials: true
            })
            console.log(res.data);
            if(res.data.success){
                setProducts(res.data.products);
            }
            else{
                alert("Failed to fetch products");
            }  
        }
        getProducts();
    }, []);

    

    const handleDelete = async(id)=>{
        try{
                const res = await axios.delete(`${API_URL}/shopping/deleteProduct?id=${id}`)
            if(res.data.success){
                alert("product deleted successfully")
            }
            else{
                alert("failed to delete product")
            }
        }catch(error){
            console.error("Error deleting product:", error);
            alert("Internal Error occurred");
        }
      }
   

  return (
   
        <div className='product-card'>
            {products.map((product) => (
                <div className='card' key={product._id}>
                    <Link to="/productDetails" state={{product}}>       
                        <img src={product.image} alt="Product" className="product-img" />
                    </Link>
                    <div className="card-content">
                        <h3>{product.productName}</h3>
                       
                     </div>
                    {role === "vendor" && (
                        <div>
                          <button className="delete-btn" onClick={() => handleDelete(product._id)}>X</button>
                       </div>
                    )}
                 </div> 
            ))}
        </div>
  )
}
export default ProductCard
