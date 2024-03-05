import React, { useEffect } from 'react'

import CardProductoConfirmar from './card/productoconfirmar.jsx'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {correodata} from '../../redux/slice/correodata.js';
import {correoConstants} from '../../uri/correo-constants.js'

export default function ListaConfirmacion({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {lista_carrito_cotizacion} = useSelector(({datareducer}) => datareducer)
    const {send_correo_cotizacion} = useSelector(({correo_data}) => correo_data)

    useEffect(() => {
        if (send_correo_cotizacion && send_correo_cotizacion.message && send_correo_cotizacion.message.accepted){
            dispatch (correodata(correoConstants({},true, 0, 0).send_correo_cotizacion))
            navigate('/lista-cotizar/enviada')
            window.scrollTo(0, 0)
        }
    }, [send_correo_cotizacion])

    const enviar_correo_cotizacion = () => {
        dispatch (correodata(correoConstants({},false, window.localStorage.getItem('shop_id'), window.localStorage.getItem('usuario')).send_correo_cotizacion))
    }
    
    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: 60 / proporcional, border: '1px solid #e8e8e8'}}>
                <div style={{width: 420 / proporcional, height: 58 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                        padding: 15 / proporcional}}>
                        Producto
                    </p>
                </div>
                <div style={{width: 120 / proporcional, height: 58 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                        padding: 15 / proporcional}}>
                        Cantidad
                    </p>
                </div>
                <div style={{width: 660 / proporcional, height: 58 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                        padding: 15 / proporcional}}>
                        Detalles requeridos
                    </p>
                </div>
            </div>
            {
                lista_carrito_cotizacion && lista_carrito_cotizacion.length > 0 ?(
                    lista_carrito_cotizacion.map ((producto_cotizar, index) => {
                        return (
                            <CardProductoConfirmar producto={producto_cotizar} proporcional={proporcional}/>
                        )
                    })
                ) : null
            }
            <div className='d-flex justify-content-between' style={{width: '100%', height: 60 / proporcional, padding: 10}}>
                <button className='btn rounded' style={{width: 358 / proporcional, height: 50 / proporcional, background: 'rgba(34, 34, 34, 0.5)',
                        fontSize: 16 / proporcional, color: 'white', fontWeight: 500, marginBottom: 10 / proporcional}}
                        onClick={() => {navigate('/lista-cotizar'); window.scrollTo(0, 0)}}>
                    Volver
                </button>
                <button className='btn rounded' style={{width: 358 / proporcional, height: 50 / proporcional, background: 'rgb(34, 34, 34)',
                        fontSize: 16 / proporcional, color: 'white', fontWeight: 500}}
                        onClick={() => {enviar_correo_cotizacion()}}>
                    Confirmar
                </button>
            </div>
        </div>
    )
}
