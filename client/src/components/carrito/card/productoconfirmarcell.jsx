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

export default function CardProductoConfirmarCell({producto, proporcional}) {

    const dispatch = useDispatch()

    const [foto_uno, setFotoUno] = useState ('')
    const [nombre_producto, setNombreProducto] = useState('')
    const [proveedor, setProveedor] = useState('')
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
                setProveedor(res.data.producto.proveedor)
                setFotoUno(res.data.producto.foto_uno)
                setIdProducto(res.data.producto.id)
            }).catch ((err) => {
                setLoading(0)
            })
    }, [])

    return (
        loading === 2 ? (
            <div className='' style={{width: 459 / proporcional, height: 262 / proporcional}}>
                <div className='d-flex' style={{width: 459 / proporcional, height: 131 / proporcional, border: '1px solid #e8e8e8'}}>
                    <div className='d-flex' style={{width: 339 / proporcional, height: 129 / proporcional, padding: 15 / proporcional}}>
                        <img src={foto_uno} style={{width: 99 / proporcional, height: 99 / proporcional}}/>
                        <div style={{marginLeft: 30 / proporcional, width: 180 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)',
                                height: 49 / proporcional}}>
                                {proveedor}
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)',
                                height: 50 / proporcional}}>
                                {nombre_producto}
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: 120 / proporcional, height: 129 / proporcional, padding: 15 / proporcional}}>
                        <input 
                          type='number'
                          className='form-control'
                          value={cantidad}
                          disabled={true}
                          onChange={(event) => setCantidad(event.target.value)}
                          placeholder='1'
                          style={{fontSize: 16 / proporcional, width: 60 / proporcional, height: 50 / proporcional, 
                                  marginTop: 24.5 / proporcional, marginBottom: 24.5 / proporcional, background: 'white', 
                                  color: '#848a90', textAlign: 'center'}}/>
                    </div>
                </div>
                <div className='d-flex' style={{width: 459 / proporcional, height: 131 / proporcional, border: '1px solid #e8e8e8'}}>
                    <div style={{width: 459 / proporcional, height: 129 / proporcional, padding: 10 / proporcional}}>
                        <textarea 
                        type='number'
                        cols={3}
                        className='form-control'
                        value={informacion}
                        onChange={(event) => setInformacion(event.target.value)}
                        onBlur={() => actualizar_informacion(informacion)}
                        placeholder='Ingrese requerimientos del producto'
                        style={{fontSize: 16 / proporcional, width: '100%', height: 99 / proporcional, padding: 10 / proporcional, background: 'white', 
                                color: '#848a90', marginRight: 10 / proporcional}}/>
                    </div>
                </div>
            </div>
        ) : null
    )
}
