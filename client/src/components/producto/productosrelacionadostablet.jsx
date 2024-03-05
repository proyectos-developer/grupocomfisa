import React, { useEffect, useState } from 'react'

import CardProductoInformacionTablet from './card/productoinformaciontablet.jsx'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {productosdata} from '../../redux/slice/productosdata.js'
import { productosConstants } from '../../uri/productos-constants.js'

export default function ProductosRelacionadosTablet({proporcional}) {

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
            let data = get_productos_relacionados.productos.length
            let lista = []
            let cuenta = data / 2 < 1 ? 1 : data % 2 !== 0 ? (data / 2) + 1 : data / 2
            for (let count = 0; count < cuenta; count ++){
                lista.push ({num: `${count + 1}`})
            }
            if (get_productos_relacionados.total_productos){setTotalProductos(get_productos_relacionados.total_productos)}
            setProductos (get_productos_relacionados.productos)
            setListaProductos (lista)
        }
    }, [get_productos_relacionados])

    return (
        <div className='' style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 20 / proporcional}}>
            <p style={{fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, color: '#222931', marginBottom: 20 / proporcional}}>
                Productos relacionados
            </p>
            {
                lista_productos && lista_productos.length > 0 ? ( 
                    lista_productos.map ((producto, numprod) => {
                        return (
                            <div className='d-flex' style={{width: '100%'}}>
                            {
                                productos[(4 *  numprod)] ? ( 
                                    <CardProductoInformacionTablet producto={productos[(4 *  numprod)]} key={(4 *  numprod)} index={(4 *  numprod)} proporcional={proporcional}/>
                                ) : null
                            }
                            {
                                productos[(4 *  numprod) + 1] ? ( 
                                    <CardProductoInformacionTablet producto={productos[(4 *  numprod) + 1]} key={(4 *  numprod) + 1} index={(4 *  numprod) + 1} proporcional={proporcional}/>
                                ) : null
                            }
                            </div>
                        )
                    })
                ) : null
            }
        </div>
    )
}
