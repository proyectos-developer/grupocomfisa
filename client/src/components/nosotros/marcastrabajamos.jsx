import React from 'react'

import logo_norton from '../../assets/logos/logo_norton_200.png'
import logo_briker from '../../assets/logos/logo_briker_200.png'
import logo_asa from '../../assets/logos/logo_asa_200.png'
import logo_aceros from '../../assets/logos/logo_aceros_200.png'
import logo_metalyck from '../../assets/logos/logo_metalyck_200.png'
import logo_indura from '../../assets/logos/logo_indura_200.png'
import logo_majestad from '../../assets/logos/logo_majestad_200.png'
import logo_inka from '../../assets/logos/logo_inka_200.png'
import logo_unacem from '../../assets/logos/logo_unacem_200.png'
import logo_piramide from '../../assets/logos/logo_piramide_200.png'
import logo_matusita from '../../assets/logos/logo_matusita_200.png'

export default function MarcasTrabajamos({proporcional}) {

    return (
        <div style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, paddingTop: 55 / proporcional, paddingBottom: 55 / proporcional,
                    background: '#f5f6f6', marginBottom: 50 / proporcional}}>
            <div style={{width: '100%', marginBottom: 8 / proporcional}} className='d-flex justify-content-center'>
                <div className='rounded-pill' style={{width: 50 / proporcional, height: 4 / proporcional, background: 'rgb(209, 142, 50)'}}/>
            </div>
            <p style={{fontSize: 22 / proporcional, color: '#292929', fontWeight: 500, marginBottom: 17 / proporcional, textAlign: 'center'}}>NUESTROS PROVEEDORES</p>
            <div id="carouselMarcas" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <div className='d-flex' style={{width: 1220 / proporcional}}>
                            <img className='rounded' src={logo_norton} style={{width: 190 / proporcional, height: 143 / proporcional, marginLeft: 5 / proporcional,
                                marginRight: 5 / proporcional, marginTop: 3.5 / proporcional, marginBottom: 3.5 / proporcional}}/>
                            <img className='rounded' src={logo_briker} style={{width: 190 / proporcional, height: 143 / proporcional, marginLeft: 5 / proporcional,
                                marginRight: 5 / proporcional, marginTop: 3.5 / proporcional, marginBottom: 3.5 / proporcional}}/>
                            <img className='rounded' src={logo_asa} style={{width: 190 / proporcional, height: 143 / proporcional, marginLeft: 5 / proporcional,
                                marginRight: 5 / proporcional, marginTop: 3.5 / proporcional, marginBottom: 3.5 / proporcional}}/>
                            <img className='rounded' src={logo_aceros} style={{width: 190 / proporcional, height: 143 / proporcional, marginLeft: 5 / proporcional,
                                marginRight: 5 / proporcional, marginTop: 3.5 / proporcional, marginBottom: 3.5 / proporcional}}/>
                            <img className='rounded' src={logo_metalyck} style={{width: 190 / proporcional, height: 143 / proporcional, marginLeft: 5 / proporcional,
                                marginRight: 5 / proporcional, marginTop: 3.5 / proporcional, marginBottom: 3.5 / proporcional}}/>
                            <img className='rounded' src={logo_indura} style={{width: 190 / proporcional, height: 143 / proporcional, marginLeft: 5 / proporcional,
                                marginRight: 5 / proporcional, marginTop: 3.5 / proporcional, marginBottom: 3.5 / proporcional}}/>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <div className='d-flex' style={{width: 1220 / proporcional}}>
                            <img className='rounded' src={logo_majestad} style={{width: 190 / proporcional, height: 143 / proporcional, marginLeft: 27 / proporcional,
                                marginRight: 27 / proporcional, marginTop: 3.5 / proporcional, marginBottom: 3.5 / proporcional}}/>
                            <img className='rounded' src={logo_inka} style={{width: 190 / proporcional, height: 143 / proporcional, marginLeft: 27 / proporcional,
                                marginRight: 27 / proporcional, marginTop: 3.5 / proporcional, marginBottom: 3.5 / proporcional}}/>
                            <img className='rounded' src={logo_unacem} style={{width: 190 / proporcional, height: 143 / proporcional, marginLeft: 27 / proporcional,
                                marginRight: 27 / proporcional, marginTop: 3.5 / proporcional, marginBottom: 3.5 / proporcional}}/>
                            <img className='rounded' src={logo_piramide} style={{width: 190 / proporcional, height: 143 / proporcional, marginLeft: 27 / proporcional,
                                marginRight: 27 / proporcional, marginTop: 3.5 / proporcional, marginBottom: 3.5 / proporcional}}/>
                            <img className='rounded' src={logo_matusita} style={{width: 190 / proporcional, height: 143 / proporcional, marginLeft: 27 / proporcional,
                                marginRight: 27 / proporcional, marginTop: 3.5 / proporcional, marginBottom: 3.5 / proporcional}}/>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselMarcas" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselMarcas" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}