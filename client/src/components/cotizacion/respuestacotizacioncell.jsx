import React, { useEffect, useState } from 'react'    

import CardProductoRepustaCell from './card/productorespuestacell.jsx'
import ModalCargando from '../modal/cargando.jsx';

import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {carritodata} from '../../redux/slice/carritodata.js';
import { carritoConstants } from '../../uri/carrito-constants.js';

export default function LitaRespuetaCotizacionCell({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const [lista_cotizar, setListCotizar] = useState([])

    const {get_lista_cotizar, update_estado_cotizacion} = useSelector(({carrito_data}) => carrito_data)
    const carrito_data = useSelector (({carrito_data}) => carrito_data)

    useEffect(() => {
        dispatch(carritodata(carritoConstants(0, location.pathname.split('/')[3], {}, false).get_lista_cotizar))
    }, [])

    useEffect (() => {
        if (get_lista_cotizar && get_lista_cotizar.success === true && get_lista_cotizar.lista_cotizar){
            dispatch(carritodata(carritoConstants(0, 0, {}, true).get_lista_cotizar))
            setListCotizar(get_lista_cotizar.lista_cotizar)
        }
    }, [get_lista_cotizar])

    const aceptar_cotizacion = () => {
        
    }

    const cancelar_cotizacion = () => {
        const data_update = {
            estado: 'cancelado'
        }
        dispatch (carritodata(carritoConstants(0, location.pathname.split('/')[3], data_update, false).update_estado_cotizacion))
    }

    useEffect (() => {
        if (update_estado_cotizacion && update_estado_cotizacion.success === true){
            dispatch (carritodata(carritoConstants(0, 0, {}, true).update_estado_cotizacion))
            navigate ('/cotizacion/respuesta/cancelada')
        }
    }, [update_estado_cotizacion])

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 25 / proporcional, color: '#212121', fontWeight: 600}}>
                        NÚMERO DE PEDIDO {lista_cotizar && lista_cotizar.length > 0 ? lista_cotizar[0].nro_pedido : ''}
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 60 / proporcional, border: '1px solid #e8e8e8'}}>
                    <div style={{width: '70%', height: 58 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                            padding: 15 / proporcional}}>
                            Producto
                        </p>
                    </div>
                    <div style={{width: '30%', height: 58 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                            padding: 15 / proporcional, textAlign: 'center'}}>
                            Cantidad
                        </p>
                    </div>
                </div>
                {
                    lista_cotizar && lista_cotizar.length > 0 ?(
                        lista_cotizar.map ((producto, index) => {
                            return (
                                <CardProductoRepustaCell producto={producto} proporcional={proporcional}/>
                            )
                        })
                    ) : null
                }
                <div className='d-flex justify-content-centeer' style={{width: '100%', height: 60 / proporcional, marginBottom: 20 / proporcional}}>
                    <button className='btn rounded' style={{width: '90%', height: 50 / proporcional, background: 'rgba(34, 34, 34, 0.5)',
                            fontSize: 16 / proporcional, color: 'white', fontWeight: 500, marginBottom: 10 / proporcional}}
                            onClick={() => {cancelar_cotizacion()}}>
                        CANCELAR COTIZACIÓN
                    </button>
                </div>
                <div className='d-flex justify-content-centeer' style={{width: '100%', height: 60 / proporcional}}>
                    <button className='btn rounded' style={{width: '90%', height: 50 / proporcional, background: 'rgb(34, 34, 34)',
                            fontSize: 16 / proporcional, color: 'white', fontWeight: 500}}
                            onClick={() => aceptar_cotizacion ()}>
                        ACPTAR COTIZACIÓN
                    </button>
                </div>
            </div>
            {
                carrito_data.loading ? (
                    <ModalCargando loading={carrito_data.loading}/>
                ): null
            }
        </div>
    )
}
