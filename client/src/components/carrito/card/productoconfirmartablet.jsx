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

export default function CardProductoConfirmarTablet({producto, proporcional}) {

    const dispatch = useDispatch()

    const [foto_uno, setFotoUno] = useState ('')
    const [nombre_producto, setNombreProducto] = useState('')
    const [proveedor, setProveedor] = useState('')
    const [id_producto, setIdProducto] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [comentarios, setComentarios] = useState('')

    const [loading, setLoading] = useState(0)

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

    return (
            loading === 2 ? (
                <div className='d-flex' style={{width: 871 / proporcional, height: 131 / proporcional, border: '1px solid #e8e8e8'}}>
                    <div className='d-flex' style={{width: 304.85 / proporcional, height: 129 / proporcional, padding: 15 / proporcional}}>
                        <img src={foto_uno} style={{width: 99 / proporcional, height: 99 / proporcional}}/>
                        <div style={{marginLeft: 30 / proporcional, width: 145.85 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${49 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)'}}>
                                {proveedor}
                            </p>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)'}}>
                                {nombre_producto}
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: 127.1 / proporcional, height: 129 / proporcional, padding: 15 / proporcional}}>
                        <input 
                          type='number'
                          disabled={true}
                          className='form-control'
                          value={cantidad}
                          onChange={(event) => setCantidad(event.target.value)}
                          onBlur={() => actualizar_cantidad(cantidad)}
                          placeholder='1'
                          style={{fontSize: 16 / proporcional, width: 60 / proporcional, height: 50 / proporcional, 
                                  marginTop: 24.5 / proporcional, marginBottom: 24.5 / proporcional, background: 'white', 
                                  color: '#848a90', textAlign: 'center'}}/>
                    </div>
                    <div style={{width: 429.05 / proporcional, height: 129 / proporcional, padding: 15 / proporcional}}>
                        <textarea 
                          type='default'
                          cols={3}
                          disabled={true}
                          className='form-control'
                          value={comentarios}
                          onBlur={() => actualizar_informacion(comentarios)}
                          onChange={(event) => setComentarios(event.target.value)}
                          placeholder=''
                          style={{fontSize: 16 / proporcional, width: 399.5 / proporcional, height: 99 / proporcional, padding: 10 / proporcional, background: 'white', 
                                  color: '#848a90', marginRight: 10 / proporcional}}/>
                    </div>
                </div>
            ) : null
    )
}
