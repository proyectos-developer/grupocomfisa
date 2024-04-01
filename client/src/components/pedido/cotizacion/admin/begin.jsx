import React, { useEffect, useState } from 'react'

import TituloPedido from './titulopedido.jsx'
import DatosCliente from './datoscliente.jsx'
import ListaProductos from './listaproductos.jsx'
import icono_up from '../../../../assets/iconos/icono_page_up_96.png'

import { useDispatch, useSelector } from 'react-redux'
import {carritodata} from '../../../../redux/slice/carritodata.js'
import { carritoConstants } from '../../../../uri/carrito-constants.js'
import { useLocation, useNavigate } from 'react-router-dom'
import ModalCargando from '../../../modal/cargando.jsx'
import {correodata} from '../../../../redux/slice/correodata.js'
import { correoConstants } from '../../../../uri/correo-constants.js'

export default function CotizacionParaAdmin({proporcional}) {

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [nro_pedido, setNroPedido] = useState('')
    const [fecha_pedido, setFechaPedido] = useState('')
    const [usuario, setUsuario] = useState({})
    const [productos, setProductos] = useState([])

    const [boton_enviar, setBotonEnviar] = useState(false)

    const {get_cotizacion_productos_detalles_cliente} = useSelector(({carrito_data}) => carrito_data)
    const {send_correo_revisar_cotizacion} = useSelector(({correo_data}) => correo_data)
    const carrito_data = useSelector(({carrito_data}) => carrito_data)

    useEffect(() => {
        dispatch (carritodata(carritoConstants(0, location.pathname.split('/')[4], {}, false).get_cotizacion_productos_detalles_cliente))
    }, [])

    useEffect (() => {
        if (send_correo_revisar_cotizacion && send_correo_revisar_cotizacion.message){
            navigate (`/pedido/cotizacion/enviada/${location.pathname.split('/')[4]}`)
        }
    }, [send_correo_revisar_cotizacion])

    useEffect(() => {
        if (get_cotizacion_productos_detalles_cliente && get_cotizacion_productos_detalles_cliente.success === true && get_cotizacion_productos_detalles_cliente.usuario && get_cotizacion_productos_detalles_cliente.productos){
            setNroPedido(get_cotizacion_productos_detalles_cliente.productos[0].nro_pedido)
            setFechaPedido(get_cotizacion_productos_detalles_cliente.productos[0].created_at)
            setUsuario (get_cotizacion_productos_detalles_cliente.usuario)
            setProductos (get_cotizacion_productos_detalles_cliente.productos)
        }
    }, [get_cotizacion_productos_detalles_cliente])

    const enviar_correo = () => {
        dispatch(correodata(correoConstants({}, false, location.pathname.split('/')[4], usuario.usuario).send_correo_revisar_cotizacion))
    }

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <TituloPedido proporcional={proporcional} nro_pedido={nro_pedido} fecha_pedido={fecha_pedido}/>
            <div style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional, paddingLeft: 320 / proporcional, paddingRight: 320 / proporcional}}>
                <DatosCliente proporcional={proporcional} usuario={usuario}/>
                <ListaProductos proporcional={proporcional} productos={productos}/>
                <div className='d-flex justify-content-end' style={{width: '100%', height: 50 / proporcional}}>
                    <button className='btn' style={{width: '30%', height: 50 / proporcional, fontSize: 20 / proporcional, background: boton_enviar ? 'transparent' : '#8B4513', 
                            color: boton_enviar ? '#8b4513' : 'white', fontWeight: 600, 
                            border: '2px solid #8b4513'}} onMouseOver={() => setBotonEnviar(true)} onMouseLeave={() => setBotonEnviar(false)}
                        onClick={() => enviar_correo()}>
                        ENVIAR COTIZACIÓN
                    </button>
                </div>
            </div>
            {
                carrito_data.loading ? (
                    <ModalCargando loading={carrito_data.loading}/>
                ) : null
            }
            <div className='position-fixed' style={{width: 64 / proporcional, height: 64 / proporcional, bottom: 36 / proporcional,
            left: 36 / proporcional, cursor: 'pointer', zIndex: 99999}} onClick={() => window.scrollTo(0, 0)}>
                <img src={icono_up} style={{width: 64 / proporcional, height: 64 / proporcional}}/>
            </div>
        </div>
    )
}