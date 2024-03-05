import React from 'react'

import envio_correo from '../../assets/images/send_correo_600.png'
import { useNavigate } from 'react-router-dom'

export default function EnvioCorreoCotizacion({proporcional}) {

    const navigate = useNavigate()

    return (
        <div style={{width: 1200 / proporcional, marginLeft: 350 / proporcional, marginRight: 350 / proporcional}}>
            <div className='d-flex justify-content-center' style={{width: 1200 / proporcional, height: 600 / proporcional, marginBottom: 25 / proporcional}}>
                <img src={envio_correo} style={{width: 600 / proporcional, height: 600 / proporcional, marginRight: 20 / proporcional}}/> 
                <div style={{width: 580 / proporcional, height: 600 / proporcional}}>
                    
                </div>
            </div>    
        </div>
    )
}