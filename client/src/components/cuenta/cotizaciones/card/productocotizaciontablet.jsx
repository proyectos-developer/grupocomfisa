import axios from 'axios'
import React, { useEffect, useState } from 'react'

import icono_view from '../../../../assets/iconos/icono_view_blue_96.png'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function CardProductoCotizacion({proporcional, producto, total, index}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className='border shadow-sm' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional,
                borderBottom: total === index ? 'null' : '1px solid #384da7'}}>
            <div className='d-flex' style={{width: '100%', height: 'auto', borderBottom: '1px solid #384da7'}}>
                <div className='d-flex justify-content-center' style={{width: '10%', height: 'auto', padding: 10 / proporcional}}>
                    <img src={producto.foto_uno} style={{width: 40, height: 40 / proporcional}}/>
                </div> 
                <div style={{width: '90%', height: 'auto', padding: 10 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500}}>
                        Proveedor: {producto.proveedor}
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 600}}>
                        Producto: {producto.producto}
                    </p>
                </div>
            </div>
            <div className='d-flex' style={{width: '100%', height: 'auto',
                    borderBottom: '1px solid #384da7'}}>
                <div style={{width: '20%', height: 'auto', padding: 10 / proporcional,  borderRight: '2px solid #384da7', }}>
                    <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500, textAlign: 'center'}}>
                        Cantidad: 
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 600, textAlign: 'center'}}>
                        {producto.cantidad}
                    </p>
                </div>
                <div style={{width: '80%', height: 'auto',  padding: 10 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500}}>
                        Comentarios: 
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 600}}>
                        {producto.comentarios}
                    </p>
                </div>
            </div>
            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '20%', height: 'auto', padding: 10 / proporcional, borderRight: '2px solid #384da7', }}>
                    <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500, textAlign: 'center'}}>
                        Precio: 
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 600, textAlign: 'center'}}>
                        S/. {producto.precio}
                    </p>
                </div>
                <div style={{width: '80%', height: 'auto',  padding: 10 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500}}>
                        Observaciones: 
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 600}}>
                        {producto.observaciones}
                    </p>
                </div>
            </div>
        </div>
    )

}