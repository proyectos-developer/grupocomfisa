import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import cambio_exitoso from '../../assets/images/cambio_exitoso_550.png'

export default function ConfirmacionCorretoCell({proporcional}) {

    const navigate = useNavigate()

    return (
    <div style={{width: '100%', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 60 / proporcional, paddingBottom: 60 / proporcional,
          background: 'white'}}>
        <div className='' style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <img src={cambio_exitoso} style={{width: 400 / proporcional, height: 400 / proporcional}}></img>
            </div>
            <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional}}>
              <div style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 24 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 500, color: '#007BA7',
                    textAlign: 'center'}}>
                  ¡Se cambio su contraseñ<br/>con éxito!.
                </p>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                  <button className='btn' style={{width: '80%', height: 50 / proporcional, color: 'white', background: '#8B4513', 
                    fontWeight: 600, fontSize: 18 / proporcional}} onClick={() => navigate ('/signin')}>
                      Iniciar sesión
                  </button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}