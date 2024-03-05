import React, { useState } from 'react'

import arrow_right_white from '../../../assets/iconos/arrow_right_white_96.png'

export default function CardProveedor({proporcional, titulo, subtitulo, descripcion, icono, logo}) {

    const [seleccion_producto, setSeleccionProducto] = useState('')

    return (
        <div style={{width: 370 / proporcional, marginRight: 15 / proporcional, marginLeft: 15 / proporcional}}>
            <div className='position-relative' style={{width: 370 / proporcional, height: 278 / proporcional, marginBottom: 15 / proporcional, border: '1px solid #ededed', cursor: 'default'}}
                onMouseOver={() => setSeleccionProducto ('norton')} onMouseLeave={() => setSeleccionProducto('')}>
                {
                    logo !== null ? (
                        <img src={logo} style={{width: 368 / proporcional, height: 276 / proporcional}}/>
                    ) : null
                }
                <div className={`position-absolute top-0 start-0 ${seleccion_producto === 'norton' ? 'animate__animated animate__backInDown' : 'animate__animated animate__bounceOut'}`} style={{width: 370 / proporcional, height: 278 / proporcional, background: '#384da7',
                    padding: 20}}>
                    <div style={{width: 330 / proporcional, height: 210 / proporcional, marginTop: 14 / proporcional, marginBottom: 14 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, color: 'white', textAlign: 'left', marginBottom: 0, lineHeight: `${24 / proporcional}px`,
                            marginBottom: 30 / proporcional}}>
                            {descripcion}
                        </p>
                        <div className='d-flex' style={{cursor: 'pointer'}}>
                            <p style={{fontSize: 14 / proporcional, fontWeight: 600 / proporcional, color: '#d18e32', lineHeight: `${14 / proporcional}px`,
                                marginRight: 5 / proporcional}}>
                                Ver más
                            </p>
                            <img src={arrow_right_white} style={{width: 14 / proporcional, height: 14 / proporcional}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex' style={{width: 370 / proporcional}}>
                <img src={icono} style={{width: 48 / proporcional, height: 48 / proporcional, margin: 13 / proporcional }}/>
                <div style={{width: 292 / proporcional, height: 'auto'}}>
                    <p style={{fontSize: 28 / proporcional, lineHeight: `${39 / proporcional}px`, color: '#292929', fontWeight: 500, marginBottom: 0}}>
                        {titulo}
                    </p>
                    <p style={{fontSize: 26 / proporcional, lineHeight: `${39 / proporcional}px`, color: '#292929', fontWeight: 500, marginBottom: 6}}>
                        {subtitulo}
                    </p>
                    <div className='rounded-pill' style={{width: 100 / proporcional, height: 4 / proporcional, background: '#d18e32'}}/>
                </div>
            </div>
        </div>
    )
}