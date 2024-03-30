import React from 'react'

import icono_cell from '../../assets/iconos/icono_info_cell.png'
import icono_email from '../../assets/iconos/icono_info_email.png'

export default function InformacionContacto({proporcional}) {
  return (
    <div style={{width: '100%', paddingRight: 15 / proporcional}}>
        <div className='rounded-pill' style={{width: 50 / proporcional, height: 4 / proporcional, background: '#8B4513', marginTop: 15 / proporcional,
                marginBottom: 15 / proporcional}}/>
        <p style={{fontSize: 22 / proporcional, fontWeight: 600, color: '#007BA7', lineHeight: `${26 / proporcional}px`}}>Información de contacto</p>
        <div className='d-flex' style={{width: '100%', marginTop: 15 / proporcional, marginBottom: 33 / proporcional}}>
            <img src={icono_cell} style={{width: 30 / proporcional, height: 30 / proporcional, marginRight: 15 / proporcional}}/>
            <div style={{width: '100%'}}>
                <p style={{fontSize: 18 / proporcional, fontWeight: 600 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 4 / proporcional, color: '#007BA7'}}>Llámanos al:</p>
                <p style={{fontSize: 16 / proporcional, fontWeight: 400 / proporcional, marginBottom: 0 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#5f656d'}}>(+51) 979 357 290</p>
            </div>
        </div>
        <div className='d-flex' style={{width: '100%', marginTop: 15 / proporcional, marginBottom: 33 / proporcional}}>
            <img src={icono_email} style={{width: 30 / proporcional, height: 30 / proporcional, marginRight: 15 / proporcional}}/>
            <div style={{width: '100%'}}>
                <p style={{fontSize: 18 / proporcional, fontWeight: 600 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 4 / proporcional, color: '#007BA7'}}>Escríbenos:</p>
                <p style={{fontSize: 16 / proporcional, fontWeight: 400 / proporcional, marginBottom: 0 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#5f656d'}}>ventas@grupocomfisa.com</p>
            </div>
        </div>
    </div>
  )
}
