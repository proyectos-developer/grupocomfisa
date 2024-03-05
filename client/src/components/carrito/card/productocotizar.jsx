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

export default function CardProductoCotizar({producto, proporcional}) {

    const dispatch = useDispatch()

    const [foto_uno, setFotoUno] = useState ('')
    const [nombre_producto, setNombreProducto] = useState('')
    const [descripcion, setDecripcion] = useState('')
    const [id_producto, setIdProducto] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [informacion, setInformacion] = useState('')

    const [loading, setLoading] = useState(0)

    const [boton_minus, setBotonMinus] = useState (false)
    const [boton_plus, setBotonPlus] = useState (false)

    const {delete_producto_cotizar} = useSelector(({carrito_data}) => carrito_data)

    useEffect (() => {
        setLoading(1)
        axios.get (`${constantes().url_principal[0].url}/producto/${producto.id_producto}`)
            .then ((res) => {
                setLoading(2)
                setInformacion (producto.comntarios)
                setCantidad (parseFloat(producto.cantidad))
                setNombreProducto(res.data.producto.producto) 
                setDecripcion(res.data.producto.descripcion)
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
                <div className='d-flex' style={{width: '100%', height: 131 / proporcional, border: '1px solid #e8e8e8'}}>
                    <div className='d-flex' style={{width: 360 / proporcional, height: 129 / proporcional, padding: 15 / proporcional}}>
                        <img src={foto_uno} style={{width: 99 / proporcional, height: 99 / proporcional}}/>
                        <div style={{marginLeft: 30 / proporcional, width: 201 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${49 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)'}}>
                                {nombre_producto}
                            </p>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)'}}>
                                {descripcion}
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: 150 / proporcional, height: 129 / proporcional, padding: 15 / proporcional}}>
                        <img src={icono_minus_black} style={{width: boton_minus ? 18 / proporcional : 20 / proporcional, 
                                height: boton_minus ? 18 / proporcional : 20 / proporcional, marginTop: boton_minus ? 41.5 / proporcional : 39.5 / proporcional, 
                                marginBottom: boton_minus ? 41.5 / proporcional : 39.5 / proporcional,
                                marginLeft: boton_minus ? 6 / proporcional : 5 / proporcional, 
                                marginRight: boton_minus ? 6 / proporcional : 5 / proporcional, cursor: 'pointer'}}
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
                        <img src={icono_plus_black} style={{width: boton_plus ? 18 / proporcional : 20 / proporcional, 
                                height: boton_plus ? 18 / proporcional : 20 / proporcional, marginTop: boton_plus ? 41.5 / proporcional : 39.5 / proporcional, 
                                marginBottom: boton_plus ? 41.5 / proporcional : 39.5 / proporcional,
                                marginLeft: boton_plus ? 6 / proporcional : 5 / proporcional, 
                                marginRight: boton_plus ? 6 / proporcional : 5 / proporcional, cursor: 'pointer'}}
                                onClick={() => {actualizar_cantidad(cantidad + 1); setCantidad(cantidad + 1)}}
                                onMouseOver={() => setBotonPlus(true)} onMouseLeave={() => setBotonPlus(true)}/>
                    </div>
                    <div style={{width: 550 / proporcional, height: 129 / proporcional, padding: 15 / proporcional}}>
                        <textarea 
                          type='default'
                          cols={3}
                          className='form-control'
                          value={informacion}
                          onBlur={() => actualizar_informacion(informacion)}
                          onChange={(event) => setInformacion(event.target.value)}
                          placeholder='Ingrese requerimientos del producto'
                          style={{fontSize: 16 / proporcional, width: '100%', height: 99 / proporcional, padding: 10 / proporcional, background: '#f8f9f9', 
                                  color: '#848a90', marginRight: 10 / proporcional}}/>
                    </div>
                    <div style={{width: 120 / proporcional, height: 129 / proporcional, padding: 15 / proporcional}}>
                        <img src={icono_cross_black} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 39.5 / proporcional,
                        cursor: 'pointer'}}
                        onClick={() => borrar_producto ()}/>
                    </div>
                </div>
            ) : null
    )
}
