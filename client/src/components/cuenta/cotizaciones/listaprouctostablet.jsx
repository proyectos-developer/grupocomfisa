import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {carritodata} from '../../../redux/slice/carritodata'
import { carritoConstants } from '../../../uri/carrito-constants'

import CardProductoCotizacionTablet from './card/productocotizaciontablet.jsx'
import { useNavigate } from 'react-router-dom'

export default function ListaProductosTablet({proporcional}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [lista_productos, setListaProductos] = useState ([])

    const {get_productos_cotizacion_usuario} = useSelector (({carrito_data}) => carrito_data)

    useEffect(() => {
        dispatch(carritodata(carritoConstants(0, window.localStorage.getItem ('shop_id'), {}, false).get_productos_cotizacion_usuario))
    }, [])

    useEffect(() => {
        if (get_productos_cotizacion_usuario && get_productos_cotizacion_usuario.success === true && get_productos_cotizacion_usuario.productos){
            dispatch(carritodata(carritoConstants(0, 0, {}, true).get_productos_cotizacion_usuario))
            setListaProductos (get_productos_cotizacion_usuario.productos)
        }
    }, [get_productos_cotizacion_usuario])

    return (
        <div className='rounded' style={{width: '100%', height: 'auto'}}>
            {
                lista_productos && lista_productos.length > 0 ? (
                    lista_productos.map ((producto, index) => {
                        return (
                            <CardProductoCotizacionTablet proporcional={proporcional} producto={producto} total={lista_productos.length - 1} index={index}/>
                        )
                    })
                ) : null
            }
            <div className='d-flex justify-content-end' style={{width: '100%', height: 50 / proporcional}}>
                <button className='btn' style={{width: '40%', height: 50 / proporcional, fontSize: 18 / proporcional, color: 'white', fontWeight: 600,
                        background: 'rgb(56, 77, 167)'}} onClick={() => {navigate ('/cuenta/cotizaciones'); window.scrollTo(0, 0)}}>
                    Volver
                </button>
            </div>
        </div>
    )
}