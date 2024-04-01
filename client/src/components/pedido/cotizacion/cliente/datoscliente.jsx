import React from 'react'

export default function DatosClinte({proporcional, usuario}) {
    
    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500, marginRight: 10 / proporcional}}>
                    Hola <spah style={{fontSize: 28 / proporcional, fontWeight: 700, color: '#007BA7', marginBottom: 0}}>{usuario.nombres} {usuario.apellidos}, </spah>
                </p>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500}}>
                    GRACIAS POR ELEGIRNOS 
                </p>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500}}>
                    ESTA ES TU LISTA DE PRODUCTOS PARA COTIZAR 
                </p>
            </div>
        </div>
    )
}