import React from 'react'

import footer_foto from '../assets/images/footer_nosotros.png'
import icono_right from '../assets/iconos/arrow_right_grey_96.png'
import icon_location from '../assets/iconos/icon_location_grey_dark_96.png'
import icon_cell from '../assets/iconos/icon_cell_grey_dark_96.png'
import icon_clock from '../assets/iconos/icon_clock_grey_dark_96.png'
import icon_email from '../assets/iconos/icon_email_grey_dark_96.png'

export default function FooterPrincipalTablet({proporcional}) {
  return (
    <div style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingBottom: 50 / proporcional}}>
        <div className='d-flex' style={{width: 871 / proporcional}}>
            <div style={{width: 290.33 / proporcional, paddingRight: 15 / proporcional, paddingTop: 10 / proporcional}}>
                <p style={{fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, marginBottom: 0,
                        color: '#222931', marginBottom: 30 / proporcional}}>Nuestra compañía</p>
                <p style={{fontSize: 18 / proporcional, color: 'rgb(34, 41, 49)', fontWeight: 400, marginBottom: 26 / proporcional,
                        lineHeight: `${22 / proporcional}px`}}>
                    Lorm Ipsum, es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                </p>
            </div>
            <div style={{width: 290.33 / proporcional, paddingRight: 15 / proporcional, paddingLeft: 15 / proporcional, paddingTop: 10 / proporcional}}>
                <p style={{fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, marginBottom: 0,
                        color: '#222931', marginBottom: 30 / proporcional}}>Información</p>
                <div className='d-flex' style={{height: 24 / proporcional, paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional}}>
                    <img src={icono_right} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 1 / proporcional, marginBottom: 1 / proporcional, 
                                marginRight: 13 / proporcional}}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400, color: '#5f656d'}}>
                        Inicio
                    </p>
                </div>
                <div className='d-flex' style={{height: 24 / proporcional, paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional}}>
                    <img src={icono_right} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 1 / proporcional, marginBottom: 1 / proporcional, 
                                marginRight: 13 / proporcional}}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400, color: '#5f656d'}}>
                        Nosotros
                    </p>
                </div>
                <div className='d-flex' style={{height: 24 / proporcional, paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional}}>
                    <img src={icono_right} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 1 / proporcional, marginBottom: 1 / proporcional, 
                                marginRight: 13 / proporcional}}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400, color: '#5f656d'}}>
                        Productos
                    </p>
                </div>
                <div className='d-flex' style={{height: 24 / proporcional, paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional}}>
                    <img src={icono_right} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 1 / proporcional, marginBottom: 1 / proporcional, 
                                marginRight: 13 / proporcional}}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400, color: '#5f656d'}}>
                        Contáctanos
                    </p>
                </div>
            </div>
            <div style={{width: 290.33 / proporcional, paddingLeft: 15 / proporcional, paddingTop: 10 / proporcional}}>
                <p style={{fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, marginBottom: 0,
                        color: '#222931', marginBottom: 30 / proporcional}}>Contácto</p>
                <div className='d-flex' style={{height: 36 / proporcional, paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional, marginBottom: 13 / proporcional}}>
                    <img src={icon_location} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 1 / proporcional, marginBottom: 1 / proporcional, 
                                marginRight: 13 / proporcional}}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400, color: '#5f656d'}}>
                        Ubicación
                    </p>
                </div>
                <div className='d-flex' style={{height: 36 / proporcional, paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional, marginBottom: 13 / proporcional}}>
                    <img src={icon_cell} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 1 / proporcional, marginBottom: 1 / proporcional, 
                                marginRight: 13 / proporcional}}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400, color: '#5f656d'}}>
                        Número de celular
                    </p>
                </div>
                <div className='d-flex' style={{height: 36 / proporcional, paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional, marginBottom: 13 / proporcional}}>
                    <img src={icon_clock} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 1 / proporcional, marginBottom: 1 / proporcional, 
                                marginRight: 13 / proporcional}}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400, color: '#5f656d'}}>
                        Horario
                    </p>
                </div>
                <div className='d-flex' style={{height: 36 / proporcional, paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional, marginBottom: 13 / proporcional}}>
                    <img src={icon_email} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 1 / proporcional, marginBottom: 1 / proporcional, 
                                marginRight: 13 / proporcional}}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400, color: '#5f656d'}}>
                        E-mail
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}