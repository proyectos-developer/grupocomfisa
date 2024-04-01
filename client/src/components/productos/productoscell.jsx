import React, { useEffect, useState } from 'react'

import CardProductoResultadoCell from './card/productoresultadocell.jsx'

import { useDispatch, useSelector } from 'react-redux'

import icono_warning from '../../assets/iconos/icono_warning_black_96.png'
import { set_open_warning_login } from '../../redux/actions/dataactions.js'
import { useLocation, useNavigate } from 'react-router-dom'

export default function ProductosCell({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [lista_productos, setListaProductos] = useState([])

    const [boton_iniciar, setBotonIniciar] = useState (false)
    const [boton_cancelar, setBotonCancelar] = useState (false)

    const [resultado, setResultado] = useState('')

    const {open_warning_login, lista_productos_buscar} = useSelector(({datareducer}) => datareducer)

    useEffect (() => {
        setListaProductos (lista_productos_buscar.productos)
        setResultado(lista_productos_buscar.buscar)
    }, [])

    useEffect(() => {
        setListaProductos (lista_productos_buscar.productos)
        setResultado(lista_productos_buscar.buscar)
    }, [lista_productos_buscar])

    return (
        <div className='position-relative' style={{width: '100%', paddingTop: 60 / proporcional, paddingBotton: 60 / proporcional, paddingRight: 20 / proporcional,
                paddingLeft: 20 / proporcional}}>
            <p style={{fontSize: 24 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, marginBottom: 30 / proporcional, color: '#212121'}}>
                Búsqueda: <span style={{fontSize: 26 / proporcional, color: '#007BA7'}}>"{resultado}"</span>
            </p>
            {
                lista_productos && lista_productos.length > 0 ? ( 
                    lista_productos.map ((producto, numprod) => {
                        return (
                            <div className='d-flex justify-content-between' style={{width: '100%'}}>
                                <CardProductoResultadoCell producto={producto} key={numprod} index={numprod} proporcional={proporcional}/>
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
