import React from 'react'

import fondo_home_1 from '../../assets/images/fondo_home_tablet_0.png'
import fondo_home_0 from '../../assets/images/fondo_home_tablet_1.png'
import fondo_home_2 from '../../assets/images/fondo_home_tablet_2.png'

export default function SliderHomeTablet({proporcional}) {

    return (
        <div id="carouselHome" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    <img src={fondo_home_0} style={{width: '100%', height: 600 / proporcional}} alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={fondo_home_1} style={{width: '100%', height: 600 / proporcional}} alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={fondo_home_2} style={{width: '100%', height: 600 / proporcional}} alt="..."/>
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