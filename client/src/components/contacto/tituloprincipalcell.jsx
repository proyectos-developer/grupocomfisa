import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TituloPaginaCell({proporcional}) {

    const navigate = useNavigate()
    
    const [seleccion, setSeleccion] = useState (false)

    return (
        <div style={{width: 499 / proporcional, background: '#f5f6f6', height: 70 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional,
                paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%'}}>
                <p style={{fontSize: 22 / proporcional, fontWeight: 500, color: '#292929', marginBottom: 0, cursor: 'default'}}>CONTACTO</p>
                <div className='d-flex justify-content-end'>
                    <p style={{fontSize: 12 / proporcional, fontWeight: 400, color: '#5f656d', marginBottom: 0, marginRight: 5 / proporcional, cursor: 'pointer',
                        textDecoration: seleccion ? 'underline' : 'none', lineHeight: `${30 / proporcional}px`}} onClick={() => navigate ('/')}
                        onMouseOver={() => setSeleccion(true)} onMouseLeave={() => setSeleccion(false)}>INICIO</p>
                    <p style={{fontSize: 12 / proporcional, fontWeight: 400, color: '#5f656d', marginBottom: 0, marginRight: 5 / proporcional, cursor: 'default',
                        lineHeight: `${30 / proporcional}px`}}> / </p>
                    <p style={{fontSize: 12 / proporcional, fontWeight: 400, color: '#5f656d', marginBottom: 0, cursor: 'pointer', textDecoration: 'underline',
                        lineHeight: `${30 / proporcional}px`}}>CONTACTO</p>
                </div>
            </div>
        </div>
    )
}