import React, { useEffect, useState } from 'react'
import icono_cross_black from '../../assets/iconos/icono_cross_black_96.png'
import { constantes } from '../../uri/constantes'

import axios from 'axios'
import {carritodata} from '../../redux/slice/carritodata'
import { carritoConstants } from '../../uri/carrito-constants'
import { useDispatch, useSelector } from 'react-redux'
import { set_lista_carrito_cotizacion } from '../../redux/actions/dataactions'

export default function CardProductoCotizarCell({cotizar, proporcional}) {

    const dispatch = useDispatch ()
    const [foto_uno, setFotoUno] = useState('')
    const [producto, setProducto] = useState('')
    const [loading, setLoading] = useState (0)

    const {delete_producto_cotizar} = useSelector(({carrito_data}) => carrito_data)

    useEffect(() => {
        if (delete_producto_cotizar && delete_producto_cotizar.success === true && delete_producto_cotizar.lista_cotizar){
            dispatch(set_lista_carrito_cotizacion(delete_producto_cotizar.lista_cotizar))
        }
    }, [delete_producto_cotizar])

    useEffect(() => {
        setLoading (1)
        axios.get (`${constantes().url_principal[0].url}/producto/${cotizar.id_producto}`)
            .then ((res) => {
                setLoading (2)
                setFotoUno(res.data.producto.foto_uno)
                setProducto(res.data.producto.producto)
            }).catch ((err) => {
                setLoading (0)
            })
    }, [])

    const borrar_producto_carrito = () => {
        dispatch (carritodata(carritoConstants(cotizar.id_producto, cotizar.shop_id, {}, false).delete_producto_cotizar))
    }

    return (
        loading === 2 ? (
            <div style={{width: 200 / proporcional, height: 'auto', marginTop: 12 / proporcional}}>
                <div className='d-flex justify-content-end' style={{width: 200 / proporcional}}>
                    <img src={icono_cross_black} 
                        style={{width: 12 / proporcional, height: 12 / proporcional, cursor: 'pointer'}}
                            onClick={() => borrar_producto_carrito()}/>
                </div>
                <div className='d-flex' style={{width: 200 / proporcional, height: 'auto', marginBottom: 15 / proporcional}}>
                    <img src={foto_uno} style={{width: 75 / proporcional, height: 75 / proporcional, marginRight: 10 / proporcional}}/>
                    <div style={{height: 75 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 8 / proporcional, color: '#5f656d', fontWeight: 500}}>
                        {producto}
                    </p>
                    <p style={{fontSize: 15 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0, color: '#5f656d', fontWeight: 400}}>
                        Cantidad: {cotizar.cantidad} 
                    </p>
                    </div>
                </div>
            </div>
        ): null
    )
}

