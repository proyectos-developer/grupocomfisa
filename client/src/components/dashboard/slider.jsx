import React from 'react'

import fondo_home_1 from '../../assets/images/fondo_home_0.png'
import fondo_home_0 from '../../assets/images/fondo_home_1.png'
import fondo_home_2 from '../../assets/images/fondo_home_2.png'

export default function SliderHome({proporcional}) {

    return (
        <div id="carouselHome" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active animate__animated animate__zoomInUp" data-bs-interval="3000">
                    <img src={fondo_home_0} style={{width: '100%', height: 750 / proporcional}}/>
                </div>
                <div className="carousel-item animate__animated animate__zoomInRight" data-bs-interval="3000">
                    <img src={fondo_home_1} style={{width: '100%', height: 750 / proporcional}}/>
                </div>
                <div className="carousel-item animate__animated animate__slideInLeft" data-bs-interval="3000">
                    <img src={fondo_home_2} style={{width: '100%', height: 750 / proporcional}}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )

}