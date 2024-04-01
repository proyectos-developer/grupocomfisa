import React from 'react'
import { useNavigate } from 'react-router-dom'

import CardProductoCell from './card/productocell.jsx'

export default function ListaProductosCell({proporcional, productos}) {

    const navigate = useNavigate()

    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
            {
                productos && productos.length > 0 ? (
                    productos.map ((producto, index) => {
                        return (
                            <CardProductoCell proporcional={proporcional} producto={producto}/>
                        )
                    })
                ) : null
            }
            <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional}}>
                <button className='btn' style={{width: '90%', height: 50 / proporcional, background: '#8B4513', color: 'white', fontWeight: 500}}
                    onClick={() => {navigate ('/'); window.scrollTo(0,0)}}>
                    PÁGINA PRINCIPAL
                </button>
            </div>
        </div>
    )
}