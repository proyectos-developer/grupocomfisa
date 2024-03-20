import React from 'react'

import cotizacion_cancelada from '../../assets/images/cancelar_cotizacion_600.png'
import { useNavigate } from 'react-router-dom'

export default function InformacionCancelada({proporcional}) {

  const navigate = useNavigate()

  return (
    <div style={{width: '100%', height: 'auto', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional,
          paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
        <div className='d-flex justify-content-betweeen' style={{width: '100%', height: 'auto'}}>
          <div className='d-flex jusitfy-content-center' style={{width: '49%', height: 'auto'}}>
              <img src={cotizacion_cancelada} style={{width: 550 / proporcional, height: 550 / proporcional}}/>
          </div>
          <div className='' style={{width: '49%', height: 'auto', paddingTop: 170 / proporcional, paddingBottom: 170 / proporcional}}>
              <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 700, color: 'rgb(56, 77, 167)', marginBottom: 20 / proporcional}}>
                USTED A CANCELADO <br/>LA COTIZACIÓN ENVIADA
              </p>
              <p style={{fontSize: 24 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 600, color: '#212121', marginBottom: 20 / proporcional}}>
                ¡ESPEREMOS QUE VUELVA PRONTO!
              </p>
              <button className='btn' style={{width: 250 / proporcional, height: 50 / proporcional, color: 'white', 
                    fontWeight: 600, background: 'rgb(56, 77, 167)'}} onClick={() => {navigate ('/'); window.scrollTo(0,0)}}>
                  FINALIZAR
              </button >
          </div>
        </div>
    </div>
  ) 

}
