import React, { useEffect } from 'react'

import envio_correo from '../../assets/images/send_correo_600.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function EnvioCorreoCotizacionTablet({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        window.localStorage.removeItem ('shop_id')
        dispatch(set_lista_carrito_cotizacion({}))    
    }, [])

    return (
        <div style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 400 / proporcional}}>
                <img src={envio_correo} style={{width: 400 / proporcional, height: 400 / proporcional}}/> 
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 34 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(56, 77, 167)', fontWeight: 600, textAlign: 'center'}}>
                    ¡Su pedido de cotización <br/>fue enviada con éxito!
                </p>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: '#212121', fontWeight: 500, textAlign: 'center'}}>
                    Recibirá un correo de confirmación a: <br/> <span style={{fontSize: 22 / proporcional, fontWeight: 600, color: 'rgb(56, 77, 167)'}}>
                        {window.localStorage.getItem('correo')}
                    </span>
                </p>
                <p style={{fontSize: 35 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(56, 77, 167)', fontWeight: 700,
                    textAlign: 'center'}}>
                    ¡Gracias por confiar en nosotros!
                </p>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional}}>
                    <button className='btn' style={{width: '50%', height: 50 / proporcional, fontSize: 20 / proporcional, fontWeight: 500, color: 'white',
                        background: 'rgb(56, 77, 167)'}}
                        onClick={() => navigate('/')}>
                            VOLVER
                    </button>
                </div>
            </div> 
        </div>
    )
}