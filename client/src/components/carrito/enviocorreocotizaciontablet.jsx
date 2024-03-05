import React from 'react'

import envio_correo from '../../assets/images/send_correo_600.png'
import { useNavigate } from 'react-router-dom'

export default function EnvioCorreoCotizacionTablet({proporcional}) {

    const navigate = useNavigate()

    return (
        <div style={{width: 871 / proporcional, marginLeft: 60 / proporcional, marginRight: 60 / proporcional}}>
            <div className='d-flex justify-content-center' style={{width: 871 / proporcional, height: 400 / proporcional, marginBottom: 25 / proporcional}}>
                <img src={envio_correo} style={{width: 400 / proporcional, height: 400 / proporcional, marginRight: 30 / proporcional}}/> 
                <div style={{width: 441 / proporcional, height: 400 / proporcional}}>
                    
                </div>
            </div>    
        </div>
    )
}