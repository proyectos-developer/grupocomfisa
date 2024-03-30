import React, { useEffect, useState } from 'react'

import CardProductoTienda from './card/productotienda.jsx'

import { useDispatch, useSelector } from 'react-redux'

import {productosdata} from '../../redux/slice/productosdata.js'
import {productosConstants} from '../../uri/productos-constants.js'
import { set_filtro_productos_search_order_amount } from '../../redux/actions/filtrosactions.js'
import icono_warning from '../../assets/iconos/icono_warning_black_96.png'
import { set_open_warning_login } from '../../redux/actions/dataactions.js'
import { useLocation, useNavigate } from 'react-router-dom'

export default function  Productos({proporcional}) {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const [order_by_filtro, setOrderByFiltro] = useState ('')
    const [productos, setProductos] = useState([])
    const [lista_productos, setListaProductos] = useState([])
    const [total_productos, setTotalProductos] = useState(0)

    const [boton_iniciar, setBotonIniciar] = useState (false)
    const [boton_cancelar, setBotonCancelar] = useState (false)

    const [filtros, setFiltros] = useState({})

    const {get_productos_search_filtro_order_tienda} = useSelector(({productos_data}) => productos_data)
    const {open_warning_login} = useSelector(({datareducer}) => datareducer)
    const {filtro_productos_search_order_amount} = useSelector (({filtros}) => filtros)

    useEffect (() => {
        const id = filtro_productos_search_order_amount.id
        const filtro = filtro_productos_search_order_amount.filtro
        const search = filtro_productos_search_order_amount.search
        const order_by = filtro_productos_search_order_amount.order_by
        const order = filtro_productos_search_order_amount.order
        const begin = filtro_productos_search_order_amount.begin
        const cantidad = filtro_productos_search_order_amount.cantidad
        dispatch (productosdata(productosConstants(id, search, filtro, order_by, order, 0, 9, {}, false).get_productos_search_filtro_order_tienda))
    }, [])

    useEffect(() => {
        setFiltros(filtro_productos_search_order_amount)
    }, [filtro_productos_search_order_amount])

    useEffect(() => {
        console.log ('filtros', get_productos_search_filtro_order_tienda)
        if (get_productos_search_filtro_order_tienda && get_productos_search_filtro_order_tienda.success === true && 
            get_productos_search_filtro_order_tienda.productos){
            let data = get_productos_search_filtro_order_tienda.productos.length
            let lista = []
            let cuenta = data / 3 < 1 ? 1 : data % 3 !== 0 ? (data / 3) + 1 : data / 3
            for (let count = 0; count < cuenta; count ++){
                lista.push ({num: `${count + 1}`})
            }
            if (get_productos_search_filtro_order_tienda.total_productos){setTotalProductos(get_productos_search_filtro_order_tienda.total_productos)}
            setProductos (get_productos_search_filtro_order_tienda.productos)
            setListaProductos (lista)
        }
    }, [get_productos_search_filtro_order_tienda])

    const ordenar_productos_por = (value) => {
        setOrderByFiltro(value.split ('-')[0])
        const id = filtros.id
        const filtro = filtros.filtro
        const search = filtros.search
        const order_by = value.split('-')[0]
        const order = value.split('-')[1]
        const cantidad = filtros.cantidad
        const begin = filtros.begin
        dispatch (set_filtro_productos_search_order_amount({pagina: 'tienda', id: id, search: search, filtro: filtro, order_by: order_by, order: order, begin: begin, cantidad: cantidad}))
        dispatch(productosdata(productosConstants(0, search, filtro, order_by, order, begin, cantidad, {}, false).get_productos_search_filtro_order_tienda))
    }

    return (
        <div className='position-relative' style={{width: '100%', paddingTop: 10 / proporcional, paddingLeft: 10 / proporcional}}>
            <p style={{fontSize: 34 / proporcional, fontWeight: 500, lineHeight: `${45 / proporcional}px`, marginBottom: 30 / proporcional, color: '#007BA7'}}>
                TIENDA
            </p>
            <select
                className='form-control'
                onChange={(event) => ordenar_productos_por(event.target.value)}
                value={order_by_filtro}
                style={{width: 270 / proporcional, height: 50 / proporcional, background: '#f8f9f9', marginBottom: 23 / proporcional, paddingTop: 5 / proporcional,
                        paddingBottom: 5 / proporcional, paddingLeft: 22 / proporcional, fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, 
                        color: '#5f656d'}}>
                <option defaultValue={'0'}>{order_by_filtro === '' ? 'Ordenar por' : order_by_filtro}</option>
                <option value={'producto-ASC'}>Nombre producto A-Z</option>
                <option value={'producto-DESC'}>Nombre producto Z-A</option>
                <option value={'proveedor-ASC'}>Proveedor A-Z</option>
                <option value={'proveedor-DESC'}>Proveedor Z-A</option>
            </select>
            <div className='rounded-pill' style={{width: '100%', height: 2 / proporcional, background: '#ececec', marginBottom: 60 / proporcional}}/>
            {
                lista_productos && lista_productos.length > 0 ? ( 
                    lista_productos.map ((producto, numprod) => {
                        return (
                            <div className='d-flex justify-content-between' style={{width: '100%'}}>
                            {
                                productos[(3 *  numprod)] ? ( 
                                    <CardProductoTienda producto={productos[(3 *  numprod)]} key={(3 *  numprod)} index={(3 *  numprod)} proporcional={proporcional}/>
                                ) : null
                            }
                            {
                                productos[(3 *  numprod) + 1] ? ( 
                                    <CardProductoTienda producto={productos[(3 *  numprod) + 1]} key={(3 *  numprod) + 1} index={(3 *  numprod) + 1} proporcional={proporcional}/>
                                ) : null
                            }
                            {
                                productos[(3 *  numprod) + 2] ? ( 
                                    <CardProductoTienda producto={productos[(3 *  numprod) + 2]} key={(3 *  numprod) + 2} index={(3 *  numprod) + 2} proporcional={proporcional}/>
                                ) : null
                            }
                            </div>
                        )
                    })
                ) : null
            }
            {
                open_warning_login.open ? (
                    <div className='position-fixed top-50 start-50 translate-middle shadow-lg rounded'
                        style={{width: 500 / proporcional, height: 'auto', background: 'white'}}>
                        <div className='d-flex' style={{width: 500 / proporcional, height: 50 / proporcional, paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional,
                            paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional }}>
                            <img src={icono_warning} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 20 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 700, color: 'rgb(56, 77, 167)'}}>
                                Advertencia
                            </p>
                        </div>
                        <div style={{width: 500 / proporcional, height: 1 / proporcional, background: '#bdbdbd'}}/>
                        <div className='' style={{width: 500 / proporcional, height: 50 / proporcional, paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional,
                            paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional }}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 700, color: '#212121'}}>
                                ¡Inicie sesión para agregar a su lista de favoritos!
                            </p>
                        </div>   
                        <div className='d-flex' style={{width: 500 / proporcional, height: 'auto', paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional,
                            paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional }}>
                            <button className='btn' style={{width: 240 / proporcional, height: 50 / proporcional, color: boton_cancelar ? 'white' : 'rgb(56,77,167)',
                                        background: boton_cancelar ? 'rgb(56, 77, 167' : 'white', border: '1px solid rgb(56, 77, 167)', marginRight: 10 / proporcional}}
                                        onMouseOver={() => setBotonCancelar(true)} onMouseLeave={() => setBotonCancelar(false)}
                                        onClick={() => dispatch(set_open_warning_login({open: false, warning: ''}))}>Cancelar</button>
                            <button className='btn' style={{width: 240 / proporcional, height: 50 / proporcional, color: !boton_iniciar ? 'white' : 'rgb(56,77,167)',
                                        background: !boton_iniciar ? 'rgb(56,77,167)' : 'white', 
                                        border: '1px solid rgb(56, 77, 167)', marginLeft: 10 / proporcional}}
                                onMouseOver={() => setBotonIniciar(true)} onMouseLeave={() => setBotonIniciar(false)}
                                onClick={() => {dispatch(set_open_warning_login({open: false, warning: ''})); navigate ('/signin')}}>Iniciar sesión</button>
                        </div>   
                    </div>   
                ) : null
            }
        </div>
    )
}
