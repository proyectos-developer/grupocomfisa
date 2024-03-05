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

    const agregar_lista_cotizar = () => {
        const shop_id = window.localStorage.getItem ('shop_id')
        if (shop_id){
            const new_lista = {
                id_producto: producto.id,
                usuario: authenticated ? window.localStorage.getItem ('usuario') : '',
                shop_id: shop_id,
                comentarios: '',
                cantidad: 1,
                precio: 0
            }
            dispatch (carritodata (carritoConstants(0, 0, new_lista, false).new_cotizar))
        }else{
            const shopid = uuidv4()
            const new_lista = {
                id_producto: producto.id,
                usuario: authenticated ? window.localStorage.getItem ('usuario') : '',
                shop_id: shopid,
                comentarios: '',
                cantidad: 1,
                precio: 0
            }
            window.localStorage.setItem ('shop_id', shopid)
            dispatch (carritodata (carritoConstants(0, 0, new_lista, false).new_cotizar))
        }
    }

    const agregar_favoritos = () => {
        if (!authenticated){
            dispatch(set_open_warning_login({open: true, warning: 'favoritos'}))
        }else{
            const favorito_data = {
                id_producto: producto.id,
                usuario: window.localStorage.getItem ('usuario')
            }
            dispatch (favoritosdata(favoritosConstants(favorito_data, false, 0, 0).new_favorito))
        }
    }

    const ver_detalles_producto = (producto) => {
        dispatch(productosdata(productosConstants(producto.id_proveedor, 0, 0, 0, 0, 0, 0, {}, false).get_proveedor_detalles_productos))
    }

    return (
        <div className='shadow rounded' style={{width: 258 / proporcional, marginRight: 5 / proporcional, marginLeft: 5 / proporcional, marginBottom: 40 / proporcional}}
            onMouseOver={() => setViewOpcions(true)} onMouseLeave={() => setViewOpcions(false)}>
            <img src={producto.foto_uno} style={{width: 258 / proporcional, height: 258 / proporcional}}/>
            <div className='position-relative' style={{width: 258 / proporcional}}>
                <div className='d-flex' style={{width: 258 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, fontWeight: 700, lineHeight: `${18 / proporcional}px`, color: '#5f656d', paddingTop: 10 / proporcional,
                        paddingBottom: 10 / proporcional, marginTop: 15 / proporcional, marginBottom: 15 / proporcional, cursor: 'default', marginRight: 5 / proporcional}}>{producto.producto.split(' ')[0]}:</p>
                    <p style={{fontSize: 16 / proporcional, fontWeight: 500, lineHeight: `${18 / proporcional}px`, color: '#5f656d', paddingTop: 10 / proporcional,
                        paddingBottom: 10 / proporcional, marginTop: 15 / proporcional, marginBottom: 15 / proporcional, cursor: 'default'}}>{producto.descripcion}</p>
                </div>
                <div className='d-flex' style={{width: 258 / proporcional, paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional}}>
                    <p style={{fontSize: 26 / proporcional, fontWeight: 700, lineHeight: `${30 / proporcional}px`, color: '#222931', paddingTop: 10 / proporcional,
                            paddingBottom: 10 / proporcional, marginTop: 15 / proporcional, marginBottom: 15 / proporcional, cursor: 'default'}}>Pide cotización</p>
                </div>
                <div className={`position-absolute start-0 ${view_opciones ? 'animate__animated animate__bounceIn' : 'top-0 animate__animated animate__bounceOut'}`} 
                    style={{width: 238 / proporcional, bottom: 0, marginLeft: 10 / proporcional, marginRight: 10 / proporcional,}}>
                    <button className='btn' style={{width: 238 / proporcional, background: '#d18e32', height: 50 / proporcional, marginTop: 5 / proporcional,
                        marginBottom: 10 / proporcional, color: 'white', fontWeight: 400, fontSize: 16 / proporcional}}
                        onClick={() => ver_detalles_producto(producto)}>
                        Ver más detalles
                    </button>
                </div>
            </div>
        </div>
    )
}
