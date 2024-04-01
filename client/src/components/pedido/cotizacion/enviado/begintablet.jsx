import React, { useEffect, useState } from 'react'

import TituloPedidoTablet from './titulopedidotablet.jsx'
import CotizacionEnviadaTablet from './cotizacionenviadatablet.jsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {carritodata} from '../../../../redux/slice/carritodata.js'
import { carritoConstants } from '../../../../uri/carrito-constants.js'

export default function PedidoEnviadoTablet({proporcional}) {

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [nro_pedido, setNroPedido] = useState('')
    const [fecha_pedido, setFechaPedido] = useState('')
    const [usuario, setUsuario] = useState({})

    const [boton_enviar, setBotonEnviar] = useState(false)

    const {get_cotizacion_productos_detalles_cliente} = useSelector(({carrito_data}) => carrito_data)
    const carrito_data = useSelector(({carrito_data}) => carrito_data)

    useEffect(() => {
        dispatch (carritodata(carritoConstants(0, location.pathname.split('/')[4], {}, false).get_cotizacion_productos_detalles_cliente))
    }, [])

    useEffect(() => {
        if (get_cotizacion_productos_detalles_cliente && get_cotizacion_productos_detalles_cliente.success === true && get_cotizacion_productos_detalles_cliente.usuario && get_cotizacion_productos_detalles_cliente.productos){
            setNroPedido(get_cotizacion_productos_detalles_cliente.productos[0].nro_pedido)
            setFechaPedido(get_cotizacion_productos_detalles_cliente.productos[0].created_at)
            setUsuario (get_cotizacion_productos_detalles_cliente.usuario)
        }
    }, [get_cotizacion_productos_detalles_cliente])

    return (
        <div tyle={{width: '100%', height: 'auto'}}>
            <TituloPedidoTablet proporcional={proporcional} nro_pedido={nro_pedido} fecha_pedido={fecha_pedido}/>
            <CotizacionEnviadaTablet proporcional={proporcional}/>
        </div>
    )
}