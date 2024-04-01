import React, { useEffect } from 'react'

import CardProductoTablete from './card/productotablete.jsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {correodata} from '../../../../redux/slice/correodata.js'
import { correoConstants } from '../../../../uri/correo-constants.js'

export default function ListaProductosTablete({proporcional, productos}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const {send_correo_respuesta_cotizacion} = useSelector(({correo_data}) => correo_data)

    useEffect(() => {

    }, [send_correo_respuesta_cotizacion])

    const responder_cotizacion = (estado) => {
        const data_carrito = {
            estado: estado
        }
        dispatch(correodata(correoConstants(data_carrito, false, location.pathname.split('/')[4], 0).send_correo_respuesta_cotizacion))
    }

    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
            {
                productos && productos.length > 0 ? (
                    productos.map ((producto, index) => {
                        return (
                            <CardProductoTablete proporcional={proporcional} producto={producto}/>
                        )
                    })
                ) : null
            }
            <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional}}>
                <button className='btn' style={{width: '30%', height: 50 / proporcional, background: '#8B4513', color: 'white', fontWeight: 500}}
                    onClick={() => {responder_cotizacion('aceptado'); window.scrollTo(0,0)}}>
                    ACEPTAR COTIZACIÓN
                </button>
                <button className='btn' style={{width: '30%', height: 50 / proporcional, background: '#8B4513', color: 'white', fontWeight: 500}}
                    onClick={() => {responder_cotizacion('cancelado'); window.scrollTo(0,0)}}>
                    CANCELAR COTIZACIÓN
                </button>
            </div>
        </div>
    )
}