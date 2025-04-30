import React from 'react'
import '../styles/Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div>
            <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <Link to="/movie"> <img src="https://static.vecteezy.com/system/resources/previews/021/850/617/non_2x/realistic-cinema-poster-vector.jpg" className="d-block w-100" alt="..."/>
                </Link>
            </div>
            <div className="carousel-item">
                <Link to="/shopping">  <img src="https://img.pikbest.com/origin/10/01/82/867pIkbEsTAIq.png!w700wp" className="d-block w-100" alt="..."/>

                </Link>
            </div>
            <div className="carousel-item">
                <Link to="/sport"> <img src="https://indiansportsassociation.org/wp-content/uploads/2019/06/banner.jpg" className="d-block w-100" alt="..."/>
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

export default Banner
