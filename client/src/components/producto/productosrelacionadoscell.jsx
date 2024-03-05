import React, { useEffect, useState } from 'react'

import CardProductoInformacionCell from './card/productoinformacioncell.jsx'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {productosdata} from '../../redux/slice/productosdata.js'
import { productosConstants } from '../../uri/productos-constants.js'

export default function ProductosRelacionadosCell({proporcional}) {

    const location = useLocation()
    const dispatch = useDispatch()

    const [productos, setProductos] = useState ([])
    const [total_productos, setTotalProductos] = useState (0)
    const [lista_productos, setListaProductos] = useState([])

    const {get_productos_relacionados} = useSelector(({productos_data}) => productos_data)
    const {producto_data} = useSelector (({datareducer}) => datareducer)

    useEffect (() => {
        dispatch(productosdata(productosConstants(producto_data.id_proveedor, 0, 0, 0, 0, 0, 4, {}, false).get_productos_relacionados))
    }, [])

    useEffect (() => {
        if (get_productos_relacionados && get_productos_relacionados.success === true && get_productos_relacionados.productos){
            if (get_productos_relacionados.total_productos){setTotalProductos(get_productos_relacionados.total_productos)}
            setListaProductos (get_productos_relacionados.productos)
        }
    }, [get_productos_relacionados])

    return (
        <div className='' style={{width: '100%', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 20 / proporcional}}>
            <p style={{fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, color: '#222931', marginBottom: 20 / proporcional}}>
                Productos relacionados
            </p>
            <div className='' style={{width: '100%'}}>
            {
                lista_productos && lista_productos.length > 0 ? ( 
                    lista_productos.map ((producto, numprod) => {
                        return (
                            <CardProductoInformacionCell producto={producto} key={numprod} index={numprod} proporcional={proporcional}/>
                        )
                    })
                ) : null
            }
            </div>
        </div>
    )
}
