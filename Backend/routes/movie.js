const moviesModel = require("../model/movie.model");
const express = require("express")

const router = express.Router();

router.post("/addMovie", async (req, res) => {
    const { movieName  ,genre, rating ,releaseDate ,image, description, link  } = req.body;
    if (!movieName || !genre || !rating || !releaseDate || !image || !link) {
        return res.status(400).json({
            success: false,
            message: "Please fill all the fields",
        });
    }
    try{
        const movie = await moviesModel.create({
            movieName,  genre,
            rating ,
             releaseDate ,image , description , link
        });
        if(!movie){
             return res.status(400).json({
                success: false,
                message: "Movie not created",
            })
        }
        return res.status(200).json({
            success: true,
            message: "Movie created successfully",
            data: movie
        });
    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
})

router.get("/getMovies", async (req, res) => {
    try {
        const movies = await moviesModel.find();
        if (!movies) {
            return res.status(400).json({
                success: false,
                message: "No movies found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Movies fetched successfully",
            movies: movies
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
})

router.delete("/deleteMovie" , async(req , res)=>{
    try{
        const movieId = req.query.id;
    if(!movieId){
        return res.status(400).json({
            success: true,
            message: "Movie not found"
        });
    }
    const movie = await moviesModel.findById(movieId);
    if(!movie){
        return res.status(404).json({
            success: false,
            message: "Movie Not Found"
        });
    }
    await movie.deleteOne();

    return res.status(200).json({
        success: true,
        message: "Movie deleted successfully"
    });
    
    }catch(error){
        return res.status(500).json({
            success: true, 
            message: "Internal server error"
        })
    }
})

module.exports = router;