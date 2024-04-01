import React from 'react'

export default function DatosClinteTablete({proporcional, usuario}) {
    
    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
            <div className='' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500, textAlign: 'center', marginRight: 10 / proporcional}}>
                    Hola <spah style={{fontSize: 22 / proporcional, fontWeight: 700, color: '#007BA7', marginBottom: 10 / proporcional}}>{usuario.nombres} {usuario.apellidos}, </spah>
                </p>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500, textAlign: 'center'}}>
                    GRACIAS POR ELEGIRNOS 
                </p>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500, textAlign: 'center'}}>
                    ESTA ES TU LISTA DE <br/>
                    PRODUCTOS PARA COTIZAR 
                </p>
            </div>
        </div>
    )
}