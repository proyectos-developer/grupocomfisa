import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { constantes } from '../../../../uri/constantes'

import icono_view from '../../../../assets/iconos/icono_view_blue_96.png'
import { useDispatch, useSelector } from 'react-redux'
import {carritodata} from '../../../../redux/slice/carritodata'
import { carritoConstants } from '../../../../uri/carrito-constants'
import { set_lista_productos_cotizacion } from '../../../../redux/actions/dataactions'
import { useNavigate } from 'react-router-dom'

export default function CardCotizacionCell({proporcional, cotizacion, total, index}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(0)

    const [lista_productos, setListaProductos] = useState ([])

    const {get_productos_cotizacion_usuario} = useSelector(({carrito_data}) => carrito_data)

    useEffect(() => {
        setLoading (1)
        axios.get (`${constantes().url_principal[0].url}/cotizaciones/productos/${cotizacion.shop_id}`)
            .then ((res) => {
                setLoading (2)
                setListaProductos(res.data.productos)
            }).catch ((err) => {
                setLoading (0)                
            })
    }, [])

    useEffect(() => {
        if (get_productos_cotizacion_usuario && get_productos_cotizacion_usuario.success === true && get_productos_cotizacion_usuario.productos){
            dispatch (set_lista_productos_cotizacion(get_productos_cotizacion_usuario.productos))
            dispatch(carritodata(carritoConstants(0, 0, {}, true).get_productos_cotizacion_usuario))
            navigate (`/cuenta/cotizacion/detalles/${cotizacion.id}`)
        }
    }, [get_productos_cotizacion_usuario])

    const ver_detalles_productos_cotizados = () => {
        dispatch(carritodata(carritoConstants(0, window.localStorage.getItem('shop_id'), {}, false).get_productos_cotizacion_usuario))
    }

    return (
        loading === 2 ? (
            <div className='shadow-sm rounded' style={{width: 459 / proporcional, height: 'auto', marginBottom: 20 / proporcional,
                    borderBottom: total === index ? 'null' : '1px solid #007BA7'}}>
                <div className='d-flex' style={{width: 459 / proporcional, height: 60 / proporcional,
                        borderBottom: '1px solid #007BA7'}}>
                    <div style={{width: 150 / proporcional, height: 60 / proporcional, borderRight: '2px solid #007BA7', padding: 10 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500}}>
                            {cotizacion.created_at.split ('T')[0]}
                        </p>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500}}>
                            {cotizacion.nro_pedido}
                        </p>
                    </div>
                    <div className='' style={{width: 349 / proporcional, height: 60 / proporcional, padding: 10 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500}}>
                            Productos:
                        </p>
                        <div className='d-flex' style={{width: 558 / proporcional, height: 40 / proporcional}}>
                            {
                                lista_productos && lista_productos.length > 0 ? (
                                    lista_productos.map ((producto, numprod) => {
                                        return (
                                            numprod < 1 ? (
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, 
                                                            color: '#212121', fontWeight: 500,
                                                    marginRight: 10 / proporcional}}>
                                                    {producto.producto} ({producto.cantidad}){numprod !== lista_productos.length - 1 ? ',' : ''}
                                                </p>
                                            ) : null
                                        )
                                    })
                                ) : null
                            }
                        </div>
                    </div>
                </div>
                <div className='d-flex' style={{width: 459 / proporcional, height: 60 / proporcional,
                        borderBottom: total === index ? 'null' : '1px solid #007BA7'}}>
                    <div style={{width: 150 / proporcional, height: 60 / proporcional, borderRight: '2px solid #007BA7', padding: 10 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500}}>
                            Estado:
                        </p>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500}}>
                            {lista_productos[0].estado}
                        </p>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: 349 / proporcional, height: 60 / proporcional, padding: 10 / proporcional}}>
                        <img src={icono_view} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 8 / proporcional, cursor: 'pointer'}}
                        onClick={() => ver_detalles_productos_cotizados()}/>
                    </div>
                </div>
            </div>
        ) : null
    )

}