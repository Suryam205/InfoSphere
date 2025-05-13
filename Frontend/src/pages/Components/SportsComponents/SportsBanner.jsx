import React from 'react'
import { Link } from 'react-router-dom'


const SportsBanner = () => {
  return (
    <div>
      {/* Top Sports Carousel Section */}
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <Link to="https://www.icc-cricket.com/"> <img src="https://pbs.twimg.com/media/FW0kOW6WIAAn7XD?format=jpg&name=4096x4096" className="d-block w-100" alt="..."/>
                </Link>
            </div>

            <div className="carousel-item">
                <Link to="https://en.wikipedia.org/wiki/Football"> <img src="https://images.alphacoders.com/464/thumb-1920-464254.jpg" className="d-block w-100" alt="..."/>
                </Link>
            </div>

            <div className="carousel-item">
                <Link to="https://en.wikipedia.org/wiki/Basketball">  <img src="https://img.freepik.com/premium-photo/vibrant-basketball-banner-background-wallpaper-pictures-background-hd_1251255-1658.jpg" className="d-block w-100" alt="..."/>

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

export default SportsBanner
