import React, { useState } from 'react'

import {useNavigate} from 'react-router-dom'

import fondo_home_1 from '../../assets/images/fondo_home_0.png'
import fondo_home_0 from '../../assets/images/fondo_home_1.png'
import fondo_home_2 from '../../assets/images/fondo_home_2.png'

import logo_comfisa from '../../assets/logo_comfisa_white_300.png'

export default function SliderHome({proporcional}) {

    const navigate = useNavigate()

    const [boton_ver_1, setBotonVer1] = useState(false)
    const [boton_ver_2, setBotonVer2] = useState(false)
    const [boton_ver_3, setBotonVer3] = useState(false)

    return (
        <div id="carouselHome" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active animate__animated animate__bounceIn" data-bs-interval="3000"
                    style={{backgroundImage: `url(${fondo_home_0})`, width: '100%', height: 750 / proporcional, backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    <div className='position-relative' style={{width: '100%', height: 750 / proporcional, background: 'rgba(56, 77, 167, 0.4)'}}> 
                        <div className='position-absolute animate__animated animate__backInDown' style={{width: '60%', height: 500 / proporcional, top: 150 / proporcional, left: '25%'}}>
                            <img src={logo_comfisa} style={{width: 300 / proporcional, height: 109 / proporcional, marginBottom: 20 / proporcional}}/>
                            <p style={{fontSize: 60 / proporcional, lineHeight: `${70 / proporcional}px`, fontWeight: 800, marginBottom: 20 / proporcional, color: '#007BA7'}}>
                                Los mejores materiales
                            </p>
                            <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 400, marginBottom: 20 / proporcional, color: '#007BA7'}}>
                                PARA TU PROYECTO
                            </p>
                            <button className='btn' style={{width: 300 / proporcional, height: 50 / proporcional, background: !boton_ver_1 ? '#007BA7' : 'transparent', 
                                    color: boton_ver_1 ? '#007ba7' : 'white', fontWeight: boton_ver_1 ? 700 : 600,
                                    border: '2px solid #007ba7', fontSize: 20 / proporcional}} 
                                    onClick={() => navigate ('/tienda')} onMouseOver={() => setBotonVer1(true)} onMouseLeave={() => setBotonVer1(false)}>
                                Ve nuestros productos
                            </button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item animate__animated animate__fadeIn" data-bs-interval="3000"
                        style={{backgroundImage: `url(${fondo_home_1})`, width: '100%', height: 750 / proporcional, backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center', backgroundSize: 'cover'}}>
                        <div className='position-relative' style={{width: '100%', height: 750 / proporcional, background: 'rgba(56, 77, 167, 0.4)'}}> 
                            <div className='position-absolute animate__animated animate__backInUp' style={{width: '60%', height: 500 / proporcional, top: 150 / proporcional, left: '25%'}}>
                                <p style={{fontSize: 60 / proporcional, lineHeight: `${70 / proporcional}px`, fontWeight: 600, marginBottom: 20 / proporcional, color: 'white'}}>
                                    NOS BENEFICIAMOS EN 
                                </p>  
                                <p style={{fontSize: 60 / proporcional, lineHeight: `${70 / proporcional}px`, fontWeight: 600, marginBottom: 20 / proporcional, color: '#007BA7'}}>
                                    PRECIO Y RAPIDEZ
                                </p>
                                <p style={{fontSize: 60 / proporcional, lineHeight: `${70 / proporcional}px`, fontWeight: 600, marginBottom: 20 / proporcional, color: 'white'}}>
                                    DE ENTREGA
                                </p>
                                <div className='d-flex justify-content-between' style={{width: 800 / proporcional, height: 'auto'}}>
                                <button className='btn' style={{width: 300 / proporcional, height: 50 / proporcional, background: !boton_ver_2 ? '#007BA7' : 'transparent', 
                                        color: boton_ver_2 ? '#007ba7' : 'white', fontWeight: boton_ver_2 ? 700 : 600,
                                        border: '2px solid #007ba7', fontSize: 20 / proporcional}} 
                                        onClick={() => navigate ('/tienda')} onMouseOver={() => setBotonVer2(true)} onMouseLeave={() => setBotonVer2(false)}>
                                    Ve nuestros productos
                                </button>
                                    <img src={logo_comfisa} style={{width: 300 / proporcional, height: 109 / proporcional}}/>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="carousel-item animate__animated animate__bounceInRight" data-bs-interval="3000"
                    style={{backgroundImage: `url(${fondo_home_2})`, width: '100%', height: 750 / proporcional, backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    <div className='position-relative' style={{width: '100%', height: 750 / proporcional, background: 'rgba(56, 77, 167, 0.4)'}}> 
                        <div className='position-absolute animate__animated animate__bounceIn' style={{width: '60%', height: 500 / proporcional, top: 150 / proporcional, left: '25%'}}>
                            <p style={{fontSize: 60 / proporcional, lineHeight: `${70 / proporcional}px`, fontWeight: 600, marginBottom: 20 / proporcional, color: 'white'}}>
                                ¿QUIERES <br/>CONSTRUIR CON <br/>PRECIOS MAYORISTAS?
                            </p>  
                            <div className='rounded' style={{width: 350 / proporcional, height: 'auto', padding: 15 / proporcional, background: '#007BA7', marginBottom: 20 / proporcional}}>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional, color: '#504868'}}>
                                    No esperes más y compra todos <br/> los materiales para tu obra.
                                </p>
                            </div>
                            <div className='d-flex justify-content-between' style={{width: 800 / proporcional, height: 'auto'}}>
                                <button className='btn' style={{width: 300 / proporcional, height: 50 / proporcional, background: !boton_ver_3 ? '#007BA7' : 'transparent', 
                                        color: boton_ver_3 ? '#007ba7' : 'white', fontWeight: boton_ver_3 ? 700 : 600,
                                        border: '2px solid #007ba7', fontSize: 20 / proporcional}} 
                                        onClick={() => navigate ('/tienda')} onMouseOver={() => setBotonVer3(true)} onMouseLeave={() => setBotonVer3(false)}>
                                    Ve nuestros productos
                                </button>
                                <img src={logo_comfisa} style={{width: 300 / proporcional, height: 109 / proporcional}}/>
                            </div>
                        </div>
                    </div>
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