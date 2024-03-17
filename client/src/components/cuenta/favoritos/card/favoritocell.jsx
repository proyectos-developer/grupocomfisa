import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { constantes } from '../../../../uri/constantes'

import icono_cross from '../../../../assets/iconos/icono_cross_black_96.png'
import { useDispatch } from 'react-redux'
import {favoritosdata} from '../../../../redux/slice/favoritosdata'
import { favoritosConstants } from '../../../../uri/favoritos-constants'

export default function CardFavoritoCell({proporcional, favorito, total, index}) {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(0)

    const [nombre_producto, setNombreProducto] = useState('')
    const [foto_uno, setFotoUno] = useState('')
    const [proveedor, setProveedor] = useState('')
    const [id_producto, setIdProducto] = useState('')

    useEffect(() => {
        setLoading (1)
        axios.get (`${constantes().url_principal[0].url}/producto/${favorito.id_producto}`)
            .then ((res) => {
                setLoading (2)
                setFotoUno (res.data.producto.foto_uno)
                setNombreProducto (res.data.producto.producto)
                setProveedor (res.data.producto.proveedor)
                setIdProducto (res.data.producto.id)
            }).catch ((err) => {
                setLoading (0)                
            })
    }, [])

    const borrar_producto_favorito = () => {
        dispatch(favoritosdata(favoritosConstants({}, false, favorito.id, window.localStorage.getItem('usuario')).delete_favorito))
    }

    return (
        loading === 2 ? (
            <div className='d-flex' style={{width: 459 / proporcional, padding: 10 / proporcional, height: 70 / proporcional,
                    borderBottom: total === index ? 'null' : '1px solid #384da7'}}>
                <img src={foto_uno} style={{width: 50 / proporcional, height: 50 / proporcional, marginRight: 20 / proporcional}}/>
                <div style={{width: 349 / proporcional, height: 50 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500}}>
                        {proveedor}
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 600}}>
                        {nombre_producto}
                    </p>
                </div>
                <div style={{width: 50 / proporcional, height: 50 / proporcional, padding: 15 / proporcional, marginLeft: 20 / proporcional}}>
                    <img src={icono_cross} style={{width: 20 / proporcional, height: 20 / proporcional, cursor: 'pointer'}}
                        onClick={() => borrar_producto_favorito()}/>
                </div>
            </div>
        ) : null
    )

}