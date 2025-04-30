import React from 'react'
import { Link } from 'react-router-dom'

const ShoppingBanner = () => {
  return (
    <div>
        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <Link to=""> <img src="https://img.freepik.com/free-psd/luxury-men-s-fashion-template-design_23-2150855892.jpg?t=st=1745746702~exp=1745750302~hmac=b086a99d5589bbde24f33d2ed6d4da2889b28d7652d16c73b05b56bb83ec7a67&w=1380" className="d-block w-100" alt="..."/>
                </Link>
            </div>

            <div className="carousel-item">
                <Link to=""> <img src="https://img.freepik.com/free-vector/flat-spring-twitter-header_23-2149291882.jpg?t=st=1745746490~exp=1745750090~hmac=c45c3ded64e10d67f145fac76a36843ec1ac4a2dc2f1b4fda5f5b808bcdc9c28&w=1380" className="d-block w-100" alt="..."/>
                </Link>
            </div>

            <div className="carousel-item">
                <Link to="">  <img src="https://img.freepik.com/free-vector/flat-design-kids-store-facebook-cover_23-2149619772.jpg?t=st=1745746840~exp=1745750440~hmac=c487f1fdad2b71ae9150b47eb260eaeef78b275880b3b7f9f64efb211e1ac03e&w=1380" className="d-block w-100" alt="..."/>

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

export default ShoppingBanner
