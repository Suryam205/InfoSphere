const express = require('express');
const shoppingModel = require('../model/shopping.model');
const router = express.Router();

router.post('/addProduct', async (req, res) => {
    const { productName , brand , gender , price , image , rating  ,createdAt , link } = req.body;
    console.log(link);
    if (!productName || !brand || !gender || !price || !image || !rating || !link) {
        return res.status(400).json({
            success: false,
            message: "Please fill all the fields",
        });
    }
    try {
        const product = await shoppingModel.create({
            productName,
            brand,
            gender,
            price: Number(price),
            image,
            rating: Number(rating),
            createdAt: createdAt ? new Date(createdAt) : new Date(),
            link,
        });
        console.log(product);
        if (!product) {
            return res.status(400).json({
                success: false,
                message: "Product not created",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Product created successfully",
            product: product,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
})

router.get('/getProducts', async (req, res) => {
    try {
        const products = await shoppingModel.find();
        if (!products) {
            return res.status(400).json({
                success: false,
                message: "No products found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            products: products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
})

router.delete("/deleteProduct" , async(req , res)=>{
    try{
        const productId = req.query.id;
    if(!productId){
        return res.status(400).json({
            success: true,
            message: "Product not found"
        });
    }
    const product = await shoppingModel.findById(productId);
    if(!product){
        return res.status(404).json({
            success: false,
            message: "Product Not Found"
        });
    }
    await product.deleteOne();

    return res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    });
    
    }catch(error){
        return res.status(500).json({
            success: true, 
            message: "Internal server error"
        })
    }
})

module.exports = router;
