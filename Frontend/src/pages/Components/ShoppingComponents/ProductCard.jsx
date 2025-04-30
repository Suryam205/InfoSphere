import React, { useEffect , useState } from 'react'
import axios from 'axios'
import './ProductCard.css'

const ProductCard = ({role}) => {
    const [products , setProducts] = useState([]);
    


    useEffect(()=>{
        const getProducts = async()=>{
            const res = await axios.get("http://localhost:4000/shopping/getProducts", {
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
                const res = await axios.delete(`http://localhost:4000/shopping/deleteProduct?id=${id}`)
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
                    <img src={product.image} alt="Product" className="product-img" />
                    <div className="card-content">
                        <h3>{product.productName}</h3>
                        <p className="brand">Brand: {product.brand}</p>
                        <p className='gender'>Gender: {product.gender}</p>
                        <p className="price">Price: ${product.price}</p>
                        <p className="rating">Rating: {product.rating}</p>
                        <p className="createdAt">Created At: {new Date(product.createdAt).toLocaleDateString()}</p>
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
