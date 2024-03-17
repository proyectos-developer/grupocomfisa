import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom'
import {carritodata} from '../../../redux/slice/carritodata'
import {carritoConstants} from '../../../uri/carrito-constants'

import {v4 as uuidv4} from 'uuid'

import { set_lista_carrito_cotizacion, set_open_menu_carrito, set_open_warning_login, set_productos_proveedor } from '../../../redux/actions/dataactions';
import {productosdata} from '../../../redux/slice/productosdata';
import { productosConstants } from '../../../uri/productos-constants';
import {favoritosdata} from '../../../redux/slice/favoritosdata'
import {favoritosConstants} from '../../../uri/favoritos-constants'

export default function CardProductoTienda({producto, proporcional}) {
    console.log (producto)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [opcion_icono, setOpcionIcono] = useState('')
    const [view_opciones, setViewOpcions] = useState('')

    const {new_cotizar} = useSelector (({carrito_data}) => carrito_data)
    const {get_proveedor_detalles_productos} = useSelector (({productos_data}) => productos_data)
    const {authenticated} = useSelector (({datareducer}) => datareducer)

    useEffect (() => {
        if (new_cotizar && new_cotizar.success === true && new_cotizar.cotizar){
            dispatch (carritodata (carritoConstants(0, 0, {}, true).new_cotizar))
            dispatch (set_lista_carrito_cotizacion(new_cotizar.cotizar))
            dispatch(set_open_menu_carrito(true))
            window.scrollTo(0, 0)
        }
    }, [new_cotizar])

    useEffect (() => {
        if (get_proveedor_detalles_productos && get_proveedor_detalles_productos.success === true && get_proveedor_detalles_productos.productos &&
            get_proveedor_detalles_productos.total_productos && get_proveedor_detalles_productos.proveedor){
            dispatch (productosdata(productosConstants(0, 0, 0, 0, 0, 0, 0, {}, true).get_proveedor_detalles_productos))
            dispatch(set_productos_proveedor({productos: get_proveedor_detalles_productos.productos, total_productos: get_proveedor_detalles_productos.total_productos,
                  proveedor: get_proveedor_detalles_productos.proveedor }))
            navigate(`/proveedor/${get_proveedor_detalles_productos.productos[0].proveedor.replace(' ', '-')}`)
            window.scrollTo(0, 0)
        }
    }, [get_proveedor_detalles_productos])

    const ver_detalles_producto = (producto) => {
      dispatch(productosdata(productosConstants(producto.id_proveedor, 0, 0, 0, 0, 0, 9, {}, false).get_proveedor_detalles_productos))
    }

    return (
        <div className='shadow rounded' style={{width: '49%', marginRight: 5 / proporcional, marginLeft: 5 / proporcional, marginBottom: 40 / proporcional}}
            onMouseOver={() => setViewOpcions(true)} onMouseLeave={() => setViewOpcions(false)}>
            <img src={producto.foto_uno} style={{width: '100%', height: 'auto'}}/>
            <div className='position-relative' style={{width: '100%'}}>
                <div style={{width: '100%', height: 'auto', paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional, marginTop: 15 / proporcional, marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '100%'}}>
                        <p style={{fontSize: 14 / proporcional, fontWeight: 500, lineHeight: `${18 / proporcional}px`, color: '#5f656d', cursor: 'default', marginBottom: 0, marginRight: 5 / proporcional}}>Proveedor:</p>
                        <p style={{fontSize: 16 / proporcional, fontWeight: 600, lineHeight: `${18 / proporcional}px`, color: '#5f656d', cursor: 'default', marginBottom: 0}}>{producto.proveedor}</p>
                    </div>
                    <div className='d-flex' style={{width: '100%'}}>
                        <p style={{fontSize: 14 / proporcional, fontWeight: 500, lineHeight: `${18 / proporcional}px`, color: '#5f656d', cursor: 'default', marginBottom: 0, marginRight: 5 / proporcional}}>Producto:</p>
                        <p style={{fontSize: 16 / proporcional, fontWeight: 600, lineHeight: `${18 / proporcional}px`, color: '#5f656d', cursor: 'default', marginBottom: 0}}>{producto.producto}</p>
                    </div>
                    <div className='d-flex' style={{width: '100%'}}>
                        <p style={{fontSize: 22 / proporcional, fontWeight: 700, lineHeight: `${30 / proporcional}px`, color: '#222931', 
                            marginTop: 15 / proporcional, marginBottom: 15 / proporcional, cursor: 'default'}}>Pide cotización</p>
                    </div>
                </div>
                <div className={`position-absolute start-0 ${view_opciones ? 'animate__animated animate__bounceIn' : 'top-0 animate__animated animate__bounceOut'}`} 
                    style={{width: '100%', bottom: 0, marginLeft: 10 / proporcional, marginRight: 10 / proporcional,}}>
                    <button className='btn' style={{width: '90%', background: '#d18e32', height: 50 / proporcional, marginTop: 5 / proporcional,
                        marginBottom: 10 / proporcional, color: 'white', fontWeight: 600, fontSize: 16 / proporcional}}
                        onClick={() => ver_detalles_producto(producto)}>
                        Ver más detalles
                    </button>
                </div>
            </div>
        </div>
    )
}
