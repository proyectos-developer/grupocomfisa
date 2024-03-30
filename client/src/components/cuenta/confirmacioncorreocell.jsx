import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import envio_correo from '../../assets/images/envio_correo_550.png'

export default function ConfirmacionCorreoCell({proporcional}) {

    const navigate = useNavigate()

    return (
    <div style={{width: '100%', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 60 / proporcional, paddingBottom: 60 / proporcional,
          background: 'white'}}>
        <div class='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
            <img src={envio_correo} style={{width: 400 / proporcional, height: 400 / proporcional}}></img>
        </div>
        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
          <div style={{width: 'auto', height: 'auto'}}>
            <p style={{fontSize: 24 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 500, color: '#007BA7', textAlign: 'center'}}>
              Se envío un link a su correo <span style={{fontSize: 28 / proporcional, fontWeight: 700, color: '#212121'}}><br/>
              {window.localStorage.getItem('correo')}</span><br/>para que reestablezca su contraseña.
            </p>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', }}>
              <button className='btn' style={{width: 250 / proporcional, height: 50 / proporcional, color: 'white', background: '#8B4513', 
                fontWeight: 600, fontSize: 18 / proporcional}} onClick={() => navigate ('/olvido-contraseña')}>
                  No recibí correo
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}