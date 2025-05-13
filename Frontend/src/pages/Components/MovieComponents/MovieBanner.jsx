import React from 'react'
import { Link } from 'react-router-dom'


const MovieBanner = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <Link to="https://en.wikipedia.org/wiki/Interstellar_(film)"> <img src="https://fiu-original.b-cdn.net/fontsinuse.com/use-images/26/26616/26616.jpeg?filename=interstellar_ver6_xlg.jpg" className="d-block w-100" alt="..."/>
                </Link>
            </div>

            <div className="carousel-item">
                <Link to="https://en.wikipedia.org/wiki/Game_of_Thrones"> <img src="https://i.pinimg.com/736x/e7/0e/b5/e70eb5529e8031ddcead66101b3de583.jpg" className="d-block w-100" alt="..."/>
                </Link>
            </div>

            <div className="carousel-item">
                <Link to="https://en.wikipedia.org/wiki/Stranger_Things">  <img src="https://www.appdisqus.com/wp-content/uploads/2019/06/64253599_701353953651932_6873629698757230592_o-scaled.jpg" className="d-block w-100" alt="..."/>

                </Link>
            </div>
            
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}

export default MovieBanner
