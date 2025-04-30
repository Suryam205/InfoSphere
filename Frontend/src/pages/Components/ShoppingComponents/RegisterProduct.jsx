import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

//              productName,
//             brand,
//             gender,
//             price,
//             image,
//             rating

const RegisterProduct = () => {

    const navigate = useNavigate();

    const [productName, setProductName] = useState("");
    const [brand, setBrand] = useState("");
    const [gender, setGender] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("");
    const [createdAt, setCreatedAt] = useState("");

   const submitHandler = async (e) => {
        e.preventDefault();
        const product = {
            productName,
            brand,
            gender,
            price,
            image,
            rating,
            createdAt,
        }
        const res = await axios.post("http://localhost:4000/shopping/addProduct", product);
        if(res.data.success){
            alert("product added successfully");
        }
        else{
            alert("product not added");
        }
        setProductName('');
        setBrand('');
        setGender('');
        setPrice('');
        setImage('');
        setRating('');
        setCreatedAt('');
        navigate("/shopping");

    }

  return (
    <div>
      <div className="register-container">
    
    <h1 className="register-title">Add  a New Product!</h1>
  <form className="register-form" onSubmit={(e)=>submitHandler(e)} method="POST">
      <label  className="form-label">Enter Product Name</label><br/>
      <input className='form-input'
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          type="text" 
          name="productName" 
          placeholder="Product Name" 
          required/><br/>

        <label  className="form-label">Enter Brand</label><br/>
        <input className='form-input'
            onChange={(e) => setBrand(e.target.value)}
            value={brand}
            type="text" 
            name="brand" 
            placeholder="Brand" 
            required/><br/>
        
        <label  className="form-label">Gender</label><br/>
        <select className='form-input'
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            name="gender"
            required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unisex">Unisex</option>
        </select><br/>


        <label className="form-label">Enter Price</label><br/>
        <input className='form-input'
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="text" 
            name="price"
            placeholder="Price"  
            required/><br/>

         <label  className="form-label">Enter Image URL</label><br/>  
        <input className='form-input'
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text" 
            name="image"
            placeholder="Image URL"  
            required/><br/>

          <label  className="form-label">Enter Rating</label><br/>
        <input className='form-input'
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            type="text" 
            name="rating"
            placeholder="Rating"  
            required/><br/>
       
      

      <button className="submit-btn" type="submit">submit</button>
  </form>
  
  </div>
    </div>
  )
}

export default RegisterProduct
