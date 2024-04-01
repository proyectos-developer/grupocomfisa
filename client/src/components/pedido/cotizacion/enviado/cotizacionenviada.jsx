import React, { useEffect } from 'react'

import envio_correo from '../../../../assets/images/send_correo_600.png'
import { useNavigate } from 'react-router-dom'

export default function CotizacionEnviada({proporcional}) {

    const navigate = useNavigate()

    return (
        <div style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 600 / proporcional}}>
                <div style={{width: '48%', height: 600 / proporcional}}>
                    <img src={envio_correo} style={{width: '100%', height: 600 / proporcional}}/> 
                </div>
                <div style={{width: '50%', height: 600 / proporcional, paddingTop: 155 / proporcional, paddingBottom: 155 / proporcional}}>
                    <p style={{fontSize: 34 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(56, 77, 167)', fontWeight: 600}}>
                        ¡Su cotización <br/>fue enviada con éxito!
                    </p>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: '#212121', fontWeight: 500}}>
                        Recibirá un correo con la<br/> la respuesta del cliente.
                    </p>
                    <p style={{fontSize: 35 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(56, 77, 167)', fontWeight: 700,
                        textAlign: 'center'}}>
                    </p>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional}}>
                        <button className='btn' style={{width: '50%', height: 50 / proporcional, fontSize: 20 / proporcional, fontWeight: 500, color: 'white',
                            background: '#8B4513'}}
                            onClick={() => navigate('/')}>
                                PAGINA PRINCIPAL
                        </button>
                    </div>
                </div>
            </div>    
        </div>
    )
}