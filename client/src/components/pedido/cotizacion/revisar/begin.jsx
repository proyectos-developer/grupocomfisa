import React, { useEffect, useState } from 'react'

import TituloPedido from './titulopedido.jsx'
import DatosCliente from './datoscliente.jsx'
import ListaProductos from './listaproductos.jsx'
import icono_up from '../../../../assets/iconos/icono_page_up_96.png'

import { useDispatch, useSelector } from 'react-redux'
import {carritodata} from '../../../../redux/slice/carritodata'
import { carritoConstants } from '../../../../uri/carrito-constants'
import { useLocation } from 'react-router-dom'

export default function CotizacionDelCliente({proporcional}) {

    const location = useLocation()
    const dispatch = useDispatch()

    const [nro_pedido, setNroPedido] = useState('')
    const [fecha_pedido, setFechaPedido] = useState('')
    const [usuario, setUsuario] = useState({})
    const [productos, setProductos] = useState([])

    const {get_cotizacion_productos_detalles_cliente} = useSelector(({carrito_data}) => carrito_data)

    useEffect(() => {
        dispatch (carritodata(carritoConstants(0, location.pathname.split('/')[4], {}, false).get_cotizacion_productos_detalles_cliente))
    }, [])

    useEffect(() => {
        if (get_cotizacion_productos_detalles_cliente && get_cotizacion_productos_detalles_cliente.success === true && get_cotizacion_productos_detalles_cliente.usuario && get_cotizacion_productos_detalles_cliente.productos){
            setNroPedido(get_cotizacion_productos_detalles_cliente.productos[0].nro_pedido)
            setFechaPedido(get_cotizacion_productos_detalles_cliente.productos[0].created_at)
            setUsuario (get_cotizacion_productos_detalles_cliente.usuario)
            setProductos (get_cotizacion_productos_detalles_cliente.productos)
        }
    }, [get_cotizacion_productos_detalles_cliente])

    return (
        <div className='position-relative' style={{width: '100%', height: 'auto'}}>
            <TituloPedido proporcional={proporcional} nro_pedido={nro_pedido} fecha_pedido={fecha_pedido}/>
            <div style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional, paddingLeft: 320 / proporcional, paddingRight: 320 / proporcional}}>
                <DatosCliente proporcional={proporcional} usuario={usuario}/>
                <ListaProductos proporcional={proporcional} productos={productos}/>
            </div>
            <div className='position-fixed' style={{width: 64 / proporcional, height: 64 / proporcional, bottom: 36 / proporcional,
            left: 36 / proporcional, cursor: 'pointer', zIndex: 99999}} onClick={() => window.scrollTo(0, 0)}>
                <img src={icono_up} style={{width: 64 / proporcional, height: 64 / proporcional}}/>
            </div>
            <a href='https://wa.me/51979357290?text=Hola,%20vi%20tu%20página%20web%20y%20me%20gustaría%20mas%20información%20sobre%20tus%20productos.' target='_blank' rel='noopener noreferrer'>
                <img alt='whatsapp' className='position-fixed' src="https://img.icons8.com/fluent/72/000000/whatsapp.png" 
                    style={{bottom: 36 / proporcional, right: 36 / proporcional, zIndex: 99999}}/>
            </a>
        </div>
    )
}