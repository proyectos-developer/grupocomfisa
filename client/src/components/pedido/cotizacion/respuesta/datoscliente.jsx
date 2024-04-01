import React from 'react'

export default function DatosClinte({proporcional, usuario}) {
    
    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 28 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 10 / proporcional, color: '#212121', fontWeight: 500, marginRight: 10 / proporcional, textAlign: 'center'}}>
                    DATOS DEL CLIENTE:
                </p>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto'}}>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500, marginRight: 10 / proporcional}}>
                        Nombres: <span style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: '#007BA7'}}>
                            {usuario.nombres} {usuario.apellidos}
                        </span>
                    </p>
                </div>
                <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500, marginRight: 10 / proporcional}}>
                        Teléfono: <span style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: '#007BA7'}}>
                            {usuario.nro_telefono}
                        </span>
                    </p>
                </div>
            </div>
            <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500, marginRight: 10 / proporcional}}>
                    Correo: <span style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: '#007BA7'}}>
                        {usuario.correo}
                    </span>
                </p>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: '#212121', fontWeight: 500}}>
                    ESTA ES LA LISTA DE PRODUCTOS
                </p>
            </div>
        </div>
    )
}