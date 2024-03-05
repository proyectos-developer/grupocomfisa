import React from 'react'

import CardProductoCotizarTablet from './card/productocotizartablet.jsx'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function ListaCotizarTablet({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {lista_carrito_cotizacion} = useSelector(({datareducer}) => datareducer)

    return (
        <div style={{width: 871 / proporcional, height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
            <div className='d-flex' style={{width: 871 / proporcional, height: 60 / proporcional, border: '1px solid #e8e8e8'}}>
                <div style={{width: 261.3, height: 58 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                        padding: 15 / proporcional}}>
                        Producto
                    </p>
                </div>
                <div style={{width: 127.1 / proporcional, height: 58 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                        padding: 15 / proporcional}}>
                        Cantidad
                    </p>
                </div>
                <div style={{width: 385.5 / proporcional, height: 58 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                        padding: 15 / proporcional}}>
                        Detalles requeridos
                    </p>
                </div>
                <div style={{width: 87.1 / proporcional, height: 58 / proporcional}}>
                </div>
            </div>
            {
                lista_carrito_cotizacion && lista_carrito_cotizacion.length > 0 ?(
                    lista_carrito_cotizacion.map ((producto_cotizar, index) => {
                        return (
                            <CardProductoCotizarTablet producto={producto_cotizar} proporcional={proporcional}/>
                        )
                    })
                ) : null
            }
            <div className='d-flex justify-content-between' style={{width: 871 / proporcional, height: 60 / proporcional, marginTop: 50 / proporcional}}>
                <button className='btn rounded' style={{width: 358 / proporcional, height: 50 / proporcional, background: 'rgba(34, 34, 34, 0.5)',
                        fontSize: 16 / proporcional, color: 'white', fontWeight: 500, marginBottom: 10 / proporcional}}
                        onClick={() => {navigate('/'); window.scrollTo(0, 0)}}>
                    Volver
                </button>
                <button className='btn rounded' style={{width: 358 / proporcional, height: 50 / proporcional, background: 'rgb(34, 34, 34)',
                        fontSize: 16 / proporcional, color: 'white', fontWeight: 500}}
                        onClick={() => {navigate('/lista-cotizar/confirmar'); window.scrollTo(0, 0)}}>
                    Pedir cotización
                </button>
            </div>
        </div>
    )
}
