import React from 'react'

import footer_foto from '../assets/images/footer_nosotros.png'
import icono_right from '../assets/iconos/arrow_right_grey_96.png'
import icon_location from '../assets/iconos/icon_location_grey_dark_96.png'
import icon_cell from '../assets/iconos/icon_cell_grey_dark_96.png'
import icon_clock from '../assets/iconos/icon_clock_grey_dark_96.png'
import icon_email from '../assets/iconos/icon_email_grey_dark_96.png'
import { useNavigate } from 'react-router-dom'

export default function FooterPrincipalCell({proporcional}) {

    const navigate = useNavigate()

  return (
    <div style={{width: '100%', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingBottom: 50 / proporcional}}>
        <div className='' style={{width: 459 / proporcional}}>
            <div style={{width: 459 / proporcional, paddingRight: 15 / proporcional, paddingTop: 10 / proporcional}}>
                <p style={{fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, marginBottom: 0,
                        color: '#222931', marginBottom: 30 / proporcional}}>Nuestra compañía</p>
                <p style={{fontSize: 18 / proporcional, color: 'rgb(34, 41, 49)', fontWeight: 400, marginBottom: 26 / proporcional,
                        lineHeight: `${22 / proporcional}px`}}>
                        Somos una empresa familiar con mas de 8 años de experiencia ofreciendo productos y servicio de calidad. Contamos con el respaldo de marcas como aceros arequipa, cemento inka, piramide entre otras marcas,como distribuidores autorizados; por ello manejos el mejor precio del mercado para mayoristas y minoritas.
                        <span style={{textDecoration: 'underline', cursor: 'pointer', fontSize: 14 / proporcional, marginLeft: 5 / proporcional}} onClick={() => {navigate ('sobre-nosotros'); window.scrollTo(0,0)}}>Ver más</span>
                </p>
            </div>
            <div style={{width: 459 / proporcional, paddingRight: 15 / proporcional, paddingLeft: 15 / proporcional, paddingTop: 10 / proporcional}}>
                <p style={{fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, marginBottom: 0,
                        color: '#222931', marginBottom: 30 / proporcional}}>Información</p>
                <div className='d-flex' style={{height: 24 / proporcional, paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional, cursor: 'pointer'}}
                        onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                    <img src={icono_right} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 1 / proporcional, marginBottom: 1 / proporcional, 
                                marginRight: 13 / proporcional}}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400, color: '#5f656d'}}>
                        Inicio
                    </p>
                </div>
                <div className='d-flex' style={{height: 24 / proporcional, paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional, cursor: 'pointer'}}
                        onClick={() => {navigate ('/sobre-nosotros'); window.scrollTo(0, 0)}}>
                    <img src={icono_right} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 1 / proporcional, marginBottom: 1 / proporcional, 
                                marginRight: 13 / proporcional}}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400, color: '#5f656d'}}>
                        Nosotros
                    </p>
                </div>
                <div className='d-flex' style={{height: 24 / proporcional, paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional, cursor: 'pointer'}}
                        onClick={() => {navigate ('/tienda'); window.scrollTo(0, 0)}}>
                    <img src={icono_right} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 1 / proporcional, marginBottom: 1 / proporcional, 
                                marginRight: 13 / proporcional}}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400, color: '#5f656d'}}>
                        Productos
                    </p>
                </div>
                <div className='d-flex' style={{height: 24 / proporcional, paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional, cursor: 'pointer'}}
                        onClick={() => {navigate ('/contacto'); window.scrollTo(0, 0)}}>
                    <img src={icono_right} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 1 / proporcional, marginBottom: 1 / proporcional, 
                                marginRight: 13 / proporcional}}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400, color: '#5f656d'}}>
                        Contáctanos
                    </p>
                </div>
            </div>
            <div style={{width: 459 / proporcional, paddingLeft: 15 / proporcional, paddingTop: 10 / proporcional}}>
                <p style={{fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, marginBottom: 0,
                        color: '#222931', marginBottom: 30 / proporcional}}>Contácto</p>
                <div className='d-flex' style={{height: 36 / proporcional, paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional, marginBottom: 13 / proporcional}}>
                    <img src={icon_cell} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 1 / proporcional, marginBottom: 1 / proporcional, 
                                marginRight: 13 / proporcional}}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400, color: '#5f656d'}}>
                        (+51) 979 357 290
                    </p>
                </div>
                <div className='d-flex' style={{height: 36 / proporcional, paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional, marginBottom: 13 / proporcional}}>
                    <img src={icon_email} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 1 / proporcional, marginBottom: 1 / proporcional, 
                                marginRight: 13 / proporcional}}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400, color: '#5f656d'}}>
                        ventas@grupocomfisa.com
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}