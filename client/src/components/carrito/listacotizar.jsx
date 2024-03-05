import React from 'react'

import CardProductoCotizar from './card/productocotizar.jsx'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function ListaCotizar({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {lista_carrito_cotizacion} = useSelector(({datareducer}) => datareducer)
    
    return (
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
                        onClick={() => {navigate('/lista-cotizar/confirmar'); window.scrollTo(0, 0)}}>
                    Pedir cotización
                </button>
            </div>
        </div>
    )
}
