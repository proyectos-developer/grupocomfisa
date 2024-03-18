import React, { useEffect } from 'react'    

import CardProductoCotizar from './card/productocotizar.jsx'
import ModalCargando from '../modal/cargando.jsx';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {carritodata} from '../../redux/slice/carritodata.js';
import { carritoConstants } from '../../uri/carrito-constants.js';
import { set_lista_carrito_cotizacion } from '../../redux/actions/dataactions.js';

export default function ListaCotizar({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {lista_carrito_cotizacion} = useSelector(({datareducer}) => datareducer)
    const {get_lista_cotizar} = useSelector(({carrito_data}) => carrito_data)
    const carrito_data = useSelector (({carrito_data}) => carrito_data)

    useEffect (() => {
        if (get_lista_cotizar && get_lista_cotizar.success === true && get_lista_cotizar.lista_cotizar){
            dispatch(carritodata(carritoConstants(0, 0, {}, true).get_lista_cotizar))
            dispatch(set_lista_carrito_cotizacion(get_lista_cotizar.lista_cotizar))
            navigate ('/lista-cotizar/confirmar')
        }
    }, [get_lista_cotizar])

    const confirmar_cotizacion = () => {
        dispatch(carritodata(carritoConstants(0, window.localStorage.getItem('shop_id'), {}, false).get_lista_cotizar))
    }
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 60 / proporcional, border: '1px solid #e8e8e8'}}>
                    <div style={{width: '30%', height: 58 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                            padding: 15 / proporcional}}>
                            Producto
                        </p>
                    </div>
                    <div style={{width: '10%', height: 58 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                            padding: 15 / proporcional}}>
                            Cantidad
                        </p>
                    </div>
                    <div style={{width: '50%', height: 58 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                            padding: 15 / proporcional}}>
                            Detalles requeridos
                        </p>
                    </div>
                    <div style={{width: '10%', height: 58 / proporcional}}>
                    </div>
                </div>
                {
                    lista_carrito_cotizacion && lista_carrito_cotizacion.length > 0 ?(
                        lista_carrito_cotizacion.map ((producto_cotizar, index) => {
                            return (
                                <CardProductoCotizar producto={producto_cotizar} proporcional={proporcional}/>
                            )
                        })
                    ) : null
                }
                <div className='d-flex justify-content-between' style={{width: '100%', height: 60 / proporcional, padding: 10}}>
                    <button className='btn rounded' style={{width: 358 / proporcional, height: 50 / proporcional, background: 'rgba(34, 34, 34, 0.5)',
                            fontSize: 16 / proporcional, color: 'white', fontWeight: 500, marginBottom: 10 / proporcional}}
                            onClick={() => {navigate('/'); window.scrollTo(0, 0)}}>
                        Volver
                    </button>
                    <button className='btn rounded' style={{width: 358 / proporcional, height: 50 / proporcional, background: 'rgb(34, 34, 34)',
                            fontSize: 16 / proporcional, color: 'white', fontWeight: 500}}
                            onClick={() => confirmar_cotizacion ()}>
                        Pedir cotización
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
