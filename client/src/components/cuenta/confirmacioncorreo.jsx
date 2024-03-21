import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import envio_correo from '../../assets/images/envio_correo_550.png'

export default function ConfirmacionCorreo({proporcional}) {

    const navigate = useNavigate()

    return (
    <div style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, paddingTop: 60 / proporcional, paddingBottom: 60 / proporcional,
          background: 'white'}}>
        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-center' style={{width: '49%', height: 'auto'}}>
                <img src={envio_correo} style={{width: 400 / proporcional, height: 400 / proporcional}}></img>
            </div>
            <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto', paddingTop: 117 / proporcional, paddingBottom: 117 / proporcional}}>
              <div style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 24 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 500, color: '#384da7'}}>
                  Se envío un link a su correo <span style={{fontSize: 28 / proporcional, fontWeight: 700, color: '#212121'}}><br/>
                  {window.localStorage.getItem('correo')}</span><br/>para que reestablezca su contraseña.
                </p>
                <button className='btn' style={{width: 250 / proporcional, height: 50 / proporcional, color: 'white', background: 'rgb(209, 142, 50)', 
                  fontWeight: 600, fontSize: 18 / proporcional}} onClick={() => navigate ('/olvido-contraseña')}>
                    No recibí correo
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}