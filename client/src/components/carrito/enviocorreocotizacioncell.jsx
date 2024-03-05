import React from 'react'

import envio_correo from '../../assets/images/send_correo_600.png'
import { useNavigate } from 'react-router-dom'

export default function EnvioCorreoCotizacion({proporcional}) {

    const navigate = useNavigate()

    return (
        <div style={{width: 451 / proporcional, marginLeft: 20 / proporcional, marginRight: 20 / proporcional}}>
            <div className='d-flex justify-content-center' style={{width: 451 / proporcional, height: 451 / proporcional, marginBottom: 25 / proporcional}}>
                <img src={envio_correo} style={{width: 451 / proporcional, height: 451 / proporcional}}/> 
            </div>    
            <div style={{width: 451 / proporcional, height: 451 / proporcional}}>
                
            </div>    
        </div>
    )
}