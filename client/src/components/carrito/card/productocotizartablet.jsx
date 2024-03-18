import React, { useEffect, useState } from 'react'

import icono_plus_black from '../../../assets/iconos/icono_plus_black_96.png'
import icono_minus_black from '../../../assets/iconos/icono_minus_black_96.png'
import icono_cross_black from '../../../assets/iconos/icono_cross_black_96.png'

import { constantes } from '../../../uri/constantes'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {carritodata} from '../../../redux/slice/carritodata'
import { carritoConstants } from '../../../uri/carrito-constants'
import { set_lista_carrito_cotizacion } from '../../../redux/actions/dataactions'

export default function CardProductoCotizarTablet({producto, proporcional}) {

    const dispatch = useDispatch()

    const [foto_uno, setFotoUno] = useState ('')
    const [nombre_producto, setNombreProducto] = useState('')
    const [proveedor, setProveedor] = useState('')
    const [id_producto, setIdProducto] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [comentarios, setComentarios] = useState('')

    const [loading, setLoading] = useState(0)

    const [boton_minus, setBotonMinus] = useState (false)
    const [boton_plus, setBotonPlus] = useState (false)

    const {delete_producto_cotizar} = useSelector(({carrito_data}) => carrito_data)

    useEffect (() => {
        setLoading(1)
        axios.get (`${constantes().url_principal[0].url}/producto/${producto.id_producto}`)
            .then ((res) => {
                setLoading(2)
                setComentarios (producto.comentarios)
                setCantidad (parseFloat(producto.cantidad))
                setNombreProducto(res.data.producto.producto) 
                setProveedor(res.data.producto.proveedor)
                setFotoUno(res.data.producto.foto_uno)
                setIdProducto(res.data.producto.id)
            }).catch ((err) => {
                setLoading(0)
            })
    }, [])

    useEffect(() => {
        if (delete_producto_cotizar && delete_producto_cotizar.success === true && delete_producto_cotizar.lista_cotizar){
            dispatch(set_lista_carrito_cotizacion(delete_producto_cotizar.lista_cotizar))
        }
    }, [delete_producto_cotizar])

    const actualizar_cantidad = (amount) => {
        const data_update = {
            cantidad: amount
        }
        dispatch(carritodata(carritoConstants(id_producto, window.localStorage.getItem('shop_id'), data_update, false).update_cantidad_producto))    
    }

    const actualizar_informacion = (info) => {
        const data_update = {
            comentarios: info
        }
        dispatch(carritodata(carritoConstants(id_producto, window.localStorage.getItem('shop_id'), data_update, false).update_comentarios_producto))    
    }

    const borrar_producto = () => {
        dispatch(carritodata(carritoConstants(id_producto, window.localStorage.getItem('shop_id'), {}, false).delete_producto_cotizar))
    }

    return (
            loading === 2 ? (
                <div className='d-flex' style={{width: 871 / proporcional, height: 131 / proporcional, border: '1px solid #e8e8e8'}}>
                    <div className='d-flex' style={{width: '20%', height: 129 / proporcional, padding: 10 / proporcional}}>
                        <did style={{width: '50%', height: 109 / proporcional, marginTop: 14.5 / proporcional, marginBottom: 14.5 / proporcional}}>
                            <img src={foto_uno} style={{width: 80 / proporcional, height: 80 / proporcional}}/>
                        </did>
                        <div style={{marginLeft: 10 / proporcional, width: '50%', marginTop: 14.5 / proporcional, marginBottom: 14.5 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0, color: 'rgb(34, 34, 34)',
                                }}>
                                 {proveedor}
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)',
                                height: 50 / proporcional}}>
                                {nombre_producto}
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '20%', height: 129 / proporcional, padding: 15 / proporcional}}>
                        <img src={icono_minus_black} style={{width: boton_minus ? 16.55 / proporcional : 18.55 / proporcional, 
                                height: boton_minus ? 16.55 / proporcional : 18.55 / proporcional, marginTop: boton_minus ? 42.225 / proporcional : 40.225 / proporcional, 
                                marginBottom: boton_minus ? 42.225 / proporcional : 40.225 / proporcional,
                                marginLeft: boton_minus ? 10.275 / proporcional : 9.275 / proporcional, 
                                marginRight: boton_minus ? 10.275 / proporcional : 9.275 / proporcional, cursor: 'pointer'}}
                                onClick={() => {actualizar_cantidad(cantidad - 1 < 1 ? cantidad : cantidad - 1); setCantidad (cantidad - 1 < 1 ? cantidad : cantidad - 1)}}
                                onMouseOver={() => setBotonMinus(true)} onMouseLeave={() => setBotonMinus(true)}/>
                        <input 
                          type='number'
                          className='form-control'
                          value={cantidad}
                          onChange={(event) => setCantidad(event.target.value)}
                          onBlur={() => actualizar_cantidad(cantidad)}
                          placeholder='1'
                          style={{fontSize: 16 / proporcional, width: 60 / proporcional, height: 50 / proporcional, 
                                  marginTop: 24.5 / proporcional, marginBottom: 24.5 / proporcional, background: '#f8f9f9', 
                                  color: '#848a90', textAlign: 'center'}}/>
                        <img src={icono_plus_black} style={{width: boton_plus ? 16.55 / proporcional : 18.55 / proporcional, 
                                height: boton_plus ? 16.55 / proporcional : 18.55 / proporcional, marginTop: boton_plus ? 42.225 / proporcional : 40.225 / proporcional, 
                                marginBottom: boton_plus ? 42.225 / proporcional : 40.225 / proporcional,
                                marginLeft: boton_plus ? 10.275 / proporcional : 9.275 / proporcional, 
                                marginRight: boton_plus ? 10.275 / proporcional : 9.275 / proporcional, cursor: 'pointer'}}
                                onClick={() => {actualizar_cantidad(cantidad + 1); setCantidad(cantidad + 1)}}
                                onMouseOver={() => setBotonPlus(true)} onMouseLeave={() => setBotonPlus(true)}/>
                    </div>
                    <div style={{width: '50%', height: 129 / proporcional, padding: 15 / proporcional}}>
                        <textarea 
                          type='number'
                          cols={3}
                          className='form-control'
                          value={comentarios}
                          onChange={(event) => setComentarios(event.target.value)}
                          onBlur={() => actualizar_informacion(comentarios)}
                          placeholder='Ingrese requerimientos del producto'
                          style={{fontSize: 16 / proporcional, width: '100%', height: 99 / proporcional, padding: 10 / proporcional, background: '#f8f9f9', 
                                  color: '#848a90'}}/>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '10%', height: 129 / proporcional, padding: 10 / proporcional}}>
                        <img src={icono_cross_black} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 44.5 / proporcional, marginBottom: 44.5 / proporcional,
                            cursor: 'pointer'}} onClick={() => borrar_producto()}/>
                    </div>
                </div>
            ) : null
    )
}
