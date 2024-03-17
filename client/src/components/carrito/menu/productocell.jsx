import React, { useEffect, useState } from 'react'
import axios from 'axios'

import icono_plus_black from '../../../assets/iconos/icono_plus_black_96.png'
import icono_minus_black from '../../../assets/iconos/icono_minus_black_96.png'
import { constantes } from '../../../uri/constantes'
import { useDispatch, useSelector } from 'react-redux'
import {carritodata} from '../../../redux/slice/carritodata'
import { carritoConstants } from '../../../uri/carrito-constants'
import { set_lista_carrito_cotizacion } from '../../../redux/actions/dataactions'

export default function  CardProductoMenuCell({cotizar, proporcional}) {

    const dispatch = useDispatch ()

    const [cantidad, setCantidad] = useState (1)
    const [producto, setProducto] = useState('')
    const [proveedor, setProveedor] = useState('')
    const [id_producto, setIdProducto] = useState('')
    const [foto_uno, setFotoUno] = useState('')
    const [loading, setLoading] = useState (0)

    const [boton_plus, setBotonPlus] = useState(false)
    const [boton_minus, setBotonMinus] = useState(false)

    const {delete_producto_cotizar} = useSelector (({carrito_data}) => carrito_data)

    useEffect (() => {
        setLoading (1)
        axios.get (`${constantes().url_principal[0].url}/producto/${cotizar.id_producto}`)
            .then ((res) => {
                setLoading (2)
                setProducto(res.data.producto.producto)
                setProveedor (res.data.producto.proveedor)
                setIdProducto(res.data.producto.id)
                setFotoUno(res.data.producto.foto_uno)
            }).catch ((err) => {
                setLoading (0)
            })
    }, [])

    useEffect(() => {
        if (delete_producto_cotizar && delete_producto_cotizar.success === true && delete_producto_cotizar.lista_cotizar){
            dispatch(set_lista_carrito_cotizacion(delete_producto_cotizar.lista_cotizar))
        }
    }, [delete_producto_cotizar])

    const actualizar_cantidad = (cantidad) => {
        const data_update = {cantidad: cantidad}
        dispatch (carritodata(carritoConstants(id_producto, cotizar.shop_id, data_update, false).update_cantidad_producto))
    }

    const borrar_producto_cotizar = () => {
        dispatch (carritodata(carritoConstants(cotizar.id_producto, cotizar.shop_id, {}, false).delete_producto_cotizar))
    }
 
    return (
        loading === 2 ? (
            <div className='' style={{with: 418 / proporcional, paddingLeft: 30 / proporcional, paddingRight: 10 / proporcional, height: 'auto', marginBottom: 25 / proporcional}}>
                <div className='d-flex' style={{width: 378 / proporcional, height: 124 / proporcional}}>
                    <img src={foto_uno} style={{width: 124 / proporcional, height: 124 / proporcional, marginRight: 15 / proporcional}}/>
                    <div style={{width: 239 / proporcional, height: 124 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 10 / proporcional, color: '#222222'}}>
                        {proveedor} <br/> {producto}
                        </p>
                        <div className='d-flex' style={{width: 140 / proporcional, height: 40 / proporcional}}>
                            <img src={icono_minus_black} style={{width: boton_minus ? 22 / proporcional : 24 / proporcional, 
                                    height: boton_minus ? 22 / proporcional : 24 / proporcional, margin: boton_minus ? 9 / proporcional : 8 / proporcional, cursor: 'pointer',
                                    marginRight: 10 / proporcional}} onClick={() => {actualizar_cantidad (cantidad - 1 < 1 ? cantidad : cantidad - 1); 
                                        setCantidad(cantidad - 1 < 1 ? cantidad : cantidad - 1)}}
                                    onMouseOver={() => setBotonMinus(true)} onMouseLeave={() => setBotonMinus(false)}/>
                            <input 
                                type='number'
                                className='form-control'
                                value={cantidad}
                                onChange={(event) => setCantidad(event.target.value)}
                                placeholder='1'
                                style={{fontSize: 16 / proporcional, width: 50 / proporcional, height: 40 / proporcional, padding: 10 / proporcional, background: 'white', 
                                        color: '#848a90'}}/>
                            <img src={icono_plus_black} style={{width: boton_plus ? 22 / proporcional : 24 / proporcional, 
                                    height: boton_plus ? 22 / proporcional : 24 / proporcional, margin: boton_plus ? 9 / proporcional : 8 / proporcional, cursor: 'pointer',
                                    marginLeft: 10 / proporcional}} onClick={() => {actualizar_cantidad(cantidad + 1);
                                        setCantidad(cantidad + 1)}}
                                        onMouseOver={() => setBotonPlus(true)} onMouseLeave={() => setBotonPlus(false)}/> 
                        </div>
                        <p style={{fontSize: 12 / proporcional, lineHeight: `${14 / proporcional}px`, color: '#666666', textDecoration: 'underline', cursor: 'pointer'}}
                            onClick={() => borrar_producto_cotizar (producto)}>
                            Borrar de la lista
                        </p>
                    </div>
                </div>
            </div>
        ) : null
    )
}