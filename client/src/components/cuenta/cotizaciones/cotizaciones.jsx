import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {carritodata} from '../../../redux/slice/carritodata'
import { carritoConstants } from '../../../uri/carrito-constants'

import CardCotizacion from './card/cotizacion.jsx'

export default function ListaCotizaciones({proporcional}) {

    const dispatch = useDispatch()

    const [lista_cotizaciones, setListaCotizaciones] = useState ([])

    const {get_cotizaciones_usuario} = useSelector (({carrito_data}) => carrito_data)

    useEffect(() => {
        dispatch(carritodata(carritoConstants(window.localStorage.getItem ('usuario')).get_cotizaciones_usuario))
    }, [])

    useEffect(() => {
        if (get_cotizaciones_usuario && get_cotizaciones_usuario.success === true && get_cotizaciones_usuario.cotizaciones){
            setListaCotizaciones (get_cotizaciones_usuario.cotizaciones)
        }
    }, [get_cotizaciones_usuario])

    return (
        <div className='rounded' style={{width: 900 / proporcional, height: 'auto', border: '1px solid #384da7'}}>
            {
                lista_cotizaciones && lista_cotizaciones.length > 0 ? (
                    lista_cotizaciones.map ((cotizacion, index) => {
                        return (
                            <CardCotizacion proporcional={proporcional} cotizacion={cotizacion} total={lista_cotizaciones.length - 1} index={index}/>
                        )
                    })
                ) : null
            }
        </div>
    )
}