import React, { useEffect, useState } from 'react'

import CardProductoListaTablet from './card/productolistatablet.jsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import icono_warning from '../../assets/iconos/icono_warning_black_96.png'
import { set_open_warning_login } from '../../redux/actions/dataactions.js'

export default function ListaProductosProveedorTablet({proporcional}) {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const [productos, setProductos] = useState([])
    const [lista_productos, setListaProductos] = useState([])
    const [total_productos, setTotalProductos] = useState(0)

    const [boton_iniciar, setBotonIniciar] = useState (false)
    const [boton_cancelar, setBotonCancelar] = useState (false)

    const [filtros, setFiltros] = useState({})

    const {get_productos_search_filtro_order} = useSelector(({productos_data}) => productos_data)
    const {productos_proveedor, open_warning_login} = useSelector(({datareducer}) => datareducer)
    const {filtro_productos_search_order_amount} = useSelector (({filtros}) => filtros)

    useEffect (() => {
        if (productos_proveedor && productos_proveedor.productos && productos_proveedor.total_productos){
            let data = productos_proveedor.productos.length
            let lista = []
            let cuenta = data / 4 < 1 ? 1 : data % 4 !== 0 ? (data / 4) + 1 : data / 4
            for (let count = 0; count < cuenta; count ++){
                lista.push ({num: `${count + 1}`})
            }
            if (productos_proveedor.total_productos){setTotalProductos(productos_proveedor.total_productos)}
            setProductos (productos_proveedor.productos)
            setListaProductos (lista)
        }
    }, [productos_proveedor])


    useEffect(() => {
        setFiltros(filtro_productos_search_order_amount)
    }, [filtro_productos_search_order_amount])


    useEffect(() => {
        if (get_productos_search_filtro_order && get_productos_search_filtro_order.success === true && get_productos_search_filtro_order.productos){
            let data = get_productos_search_filtro_order.productos.length
            let lista = []
            let cuenta = data / 4 < 1 ? 1 : data % 4 !== 0 ? (data / 4) + 1 : data / 4
            for (let count = 0; count < cuenta; count ++){
                lista.push ({num: `${count + 1}`})
            }
            if (get_productos_search_filtro_order.total_productos){setTotalProductos(get_productos_search_filtro_order.total_productos)}
            setProductos (get_productos_search_filtro_order.productos)
            setListaProductos (lista)
        }
    }, [get_productos_search_filtro_order])

    return (
        <div className='position-relative' style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 20 / proporcional}}>
            <p style={{fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, color: '#222931', marginBottom: 20 / proporcional}}>
                {location.pathname.split('/')[2].replace('-', ' ')}
            </p>
            {
                lista_productos && lista_productos.length > 0 ? ( 
                    lista_productos.map ((producto, numprod) => {
                        return (
                            <div className='d-flex' style={{width: '100%'}}>
                            {
                                productos[(4 *  numprod)] ? ( 
                                    <CardProductoListaTablet producto={productos[(2 *  numprod)]} key={(2 *  numprod)} index={(2 *  numprod)} proporcional={proporcional}/>
                                ) : null
                            }
                            {
                                productos[(2 *  numprod) + 1] ? ( 
                                    <CardProductoListaTablet producto={productos[(2 *  numprod) + 1]} key={(2 *  numprod) + 1} index={(2 *  numprod) + 1} proporcional={proporcional}/>
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
