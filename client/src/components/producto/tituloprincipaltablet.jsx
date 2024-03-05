import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TituloPaginaTablet({proporcional}) {

    const navigate = useNavigate()
    
    const [seleccion, setSeleccion] = useState ('')

    return (
        <div style={{width: '100%', background: '#f5f6f6', height: 92 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional,
                paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div className='' style={{width: '100%'}}>
                <p style={{fontSize: 22 / proporcional, fontWeight: 500, color: '#292929', marginBottom: 0, cursor: 'default'}}>PRODUCTO</p>
                <div className='d-flex'>
                    <p style={{fontSize: 12 / proporcional, fontWeight: 400, color: '#5f656d', marginBottom: 0, marginRight: 5 / proporcional, cursor: 'pointer',
                        textDecoration: seleccion === 'inicio' ? 'underline' : 'none', lineHeight: `${30 / proporcional}px`}} onClick={() => navigate ('/')}
                        onMouseOver={() => setSeleccion('inicio')} onMouseLeave={() => setSeleccion(false)}>INICIO</p>
                    <p style={{fontSize: 12 / proporcional, fontWeight: 400, color: '#5f656d', marginBottom: 0, marginRight: 5 / proporcional, cursor: 'default',
                    lineHeight: `${30 / proporcional}px`
                        }}> / </p>
                    <p style={{fontSize: 12 / proporcional, fontWeight: 400, color: '#5f656d', marginBottom: 0, marginRight: 5 / proporcional, cursor: 'pointer',
                        textDecoration: seleccion === 'tienda' ? 'underline' : 'none', lineHeight: `${30 / proporcional}px`}} onClick={() => navigate ('/')}
                        onMouseOver={() => setSeleccion('tienda')} onMouseLeave={() => setSeleccion(false)}>TIENDA</p>
                    <p style={{fontSize: 12 / proporcional, fontWeight: 400, color: '#5f656d', marginBottom: 0, marginRight: 5 / proporcional, cursor: 'default',
                    lineHeight: `${30 / proporcional}px`
                        }}> / </p>
                    <p style={{fontSize: 12 / proporcional, fontWeight: 400, color: '#5f656d', marginBottom: 0, cursor: 'pointer', textDecoration: 'underline',
                    lineHeight: `${30 / proporcional}px`
                        }}>PRODUCTO</p>
                </div>
            </div>
        </div>
    )
}