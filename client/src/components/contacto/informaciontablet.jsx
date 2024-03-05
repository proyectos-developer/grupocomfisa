import React from 'react'

import icono_cell from '../../assets/iconos/icono_info_cell.png'
import icono_email from '../../assets/iconos/icono_info_email.png'
import icono_ubicacion from '../../assets/iconos/icono_info_ubicacion.png'
import icono_clock from '../../assets/iconos/icono_info_clock.png'

export default function InformacionContactoTablet({proporcional}) {

    return (
        <div style={{width: 871 / proporcional, marginRight: 60 / proporcional, marginLeft: 60 / proporcional, marginTop: 20 / proporcional}}>
            <div className='rounded-pill' style={{width: 50 / proporcional, height: 4 / proporcional, background: '#d18e32', marginTop: 15 / proporcional,
                    marginBottom: 15 / proporcional}}/>
            <p style={{fontSize: 22 / proporcional, fontWeight: 600, color: '#292929', lineHeight: `${26 / proporcional}px`}}>Información de contacto</p>
            <div className='d-flex' style={{width: '100%', marginTop: 15 / proporcional, marginBottom: 33 / proporcional}}>
                <img src={icono_ubicacion} style={{width: 30 / proporcional, height: 30 / proporcional, marginRight: 15 / proporcional}}/>
                <div style={{width: '100%'}}>
                    <p style={{fontSize: 18 / proporcional, fontWeight: 600 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 4 / proporcional, color: '#292929'}}>Encuentranos en:</p>
                    <p style={{fontSize: 16 / proporcional, fontWeight: 400 / proporcional, marginBottom: 0 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#5f656d'}}>Dirección</p>
                </div>
            </div>
            <div className='d-flex' style={{width: '100%', marginTop: 15 / proporcional, marginBottom: 33 / proporcional}}>
                <img src={icono_cell} style={{width: 30 / proporcional, height: 30 / proporcional, marginRight: 15 / proporcional}}/>
                <div style={{width: '100%'}}>
                    <p style={{fontSize: 18 / proporcional, fontWeight: 600 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 4 / proporcional, color: '#292929'}}>Llámanos al:</p>
                    <p style={{fontSize: 16 / proporcional, fontWeight: 400 / proporcional, marginBottom: 0 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#5f656d'}}>+51 xxx xxxxxx</p>
                </div>
            </div>
            <div className='d-flex' style={{width: '100%', marginTop: 15 / proporcional, marginBottom: 33 / proporcional}}>
                <img src={icono_clock} style={{width: 30 / proporcional, height: 30 / proporcional, marginRight: 15 / proporcional}}/>
                <div style={{width: '100%'}}>
                    <p style={{fontSize: 18 / proporcional, fontWeight: 600 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 4 / proporcional, color: '#292929'}}>Horario:</p>
                    <p style={{fontSize: 16 / proporcional, fontWeight: 400 / proporcional, marginBottom: 0 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#5f656d'}}>Lunes a Viernes: </p>
                    <p style={{fontSize: 16 / proporcional, fontWeight: 400 / proporcional, marginBottom: 0 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#5f656d'}}>Sábado: </p>
                </div>
            </div>
            <div className='d-flex' style={{width: '100%', marginTop: 15 / proporcional, marginBottom: 33 / proporcional}}>
                <img src={icono_email} style={{width: 30 / proporcional, height: 30 / proporcional, marginRight: 15 / proporcional}}/>
                <div style={{width: '100%'}}>
                    <p style={{fontSize: 18 / proporcional, fontWeight: 600 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 4 / proporcional, color: '#292929'}}>Escríbenos:</p>
                    <p style={{fontSize: 16 / proporcional, fontWeight: 400 / proporcional, marginBottom: 0 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#5f656d'}}>correo@dominio.com</p>
                </div>
            </div>
        </div>
    )
}
