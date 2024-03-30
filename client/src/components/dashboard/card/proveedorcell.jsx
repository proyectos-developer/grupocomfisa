import React, { useEffect, useState } from 'react'

import arrow_right_white from '../../../assets/iconos/arrow_right_white_96.png'
import { useDispatch, useSelector } from 'react-redux'
import {productosdata} from '../../../redux/slice/productosdata'
import { productosConstants } from '../../../uri/productos-constants'
import { useNavigate } from 'react-router-dom'
import { set_productos_proveedor } from '../../../redux/actions/dataactions'

export default function CardProveedorTablet({proporcional, id, titulo, subtitulo, descripcion, icono, logo}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [seleccion_producto, setSeleccionProducto] = useState('')

    const {get_proveedor_detalles_productos} = useSelector(({productos_data}) => productos_data)

    useEffect (() => {
      if (get_proveedor_detalles_productos && get_proveedor_detalles_productos.success === true && get_proveedor_detalles_productos.productos &&
          get_proveedor_detalles_productos.total_productos && get_proveedor_detalles_productos.proveedor){
            console.log (get_proveedor_detalles_productos)
        dispatch (productosdata(productosConstants(0, 0, 0, 0, 0, 0, 0, {}, true).get_proveedor_detalles_productos))
        dispatch(set_productos_proveedor({productos: get_proveedor_detalles_productos.productos, total_productos: get_proveedor_detalles_productos.total_productos,
              proveedor: get_proveedor_detalles_productos.proveedor }))
        navigate(`/proveedor/${get_proveedor_detalles_productos.productos[0].proveedor.replace(' ', '-')}`)
      }
    }, [get_proveedor_detalles_productos])

    const ver_productos_proveedor = () => {
      dispatch(productosdata(productosConstants(id, 0, 0, 0, 0, 0, 9, {}, false).get_proveedor_detalles_productos))
    }

    return (
        <div style={{width: 429 / proporcional, marginBottom: 37 / proporcional, marginRight: 15 / proporcional, marginLeft: 15 / proporcional}}>
            <div className='position-relative' style={{width: 429 / proporcional, height: 345 / proporcional, marginBottom: 15 / proporcional, border: '1px solid #ededed', cursor: 'default'}}
                onMouseOver={() => setSeleccionProducto ('norton')} onMouseLeave={() => setSeleccionProducto('')}>
                {
                    logo !== null ? (
                        <img src={logo} style={{width: 427 / proporcional, height: 343 / proporcional}}/>
                    ) : null
                }
                <div className={`position-absolute top-0 start-0 ${seleccion_producto === 'norton' ? 'animate__animated animate__backInDown' : 'animate__animated animate__bounceOut'}`} 
                    style={{width: 429 / proporcional, height: 345 / proporcional, background: '#007BA7',
                            padding: 10}}>
                    <div style={{width: 409 / proporcional, height: 325 / proporcional, marginTop: 14 / proporcional, marginBottom: 14 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, color: 'white', textAlign: 'left', marginBottom: 0, lineHeight: `${24 / proporcional}px`,
                            marginBottom: 30 / proporcional}}>
                            {descripcion.slice(0, 250)}...
                        </p>
                        <div className='d-flex' style={{cursor: 'pointer'}}
                            onClick={() => {ver_productos_proveedor(); window.scrollTo(0, 0)}}>
                            <p style={{fontSize: 14 / proporcional, fontWeight: 600 / proporcional, color: '#8B4513', lineHeight: `${14 / proporcional}px`,
                                marginRight: 5 / proporcional}}>
                                Ver más
                            </p>
                            <img src={arrow_right_white} style={{width: 14 / proporcional, height: 14 / proporcional}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex' style={{width: 429 / proporcional, cursor: 'pointer'}} onClick={() => {ver_productos_proveedor(); window.scrollTo(0, 0)}}>
                <img src={icono} style={{width: 32 / proporcional, height: 32 / proporcional, margin: 13 / proporcional }}/>
                <div style={{width: 292 / proporcional, height: 'auto'}}>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${29 / proporcional}px`, color: '#292929', fontWeight: 500, marginBottom: 0}}>
                        {titulo}
                    </p>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${29 / proporcional}px`, color: '#292929', fontWeight: 500, marginBottom: 6}}>
                        {subtitulo}
                    </p>
                    <div className='rounded-pill' style={{width: 100 / proporcional, height: 4 / proporcional, background: '#8B4513'}}/>
                </div>
            </div>
        </div>
    )
}