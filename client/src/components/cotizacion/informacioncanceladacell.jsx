import React from 'react'

import cotizacion_cancelada from '../../assets/images/cancelar_cotizacion_600.png'
import { useNavigate } from 'react-router-dom'

export default function InformacionCanceladaCell({proporcional}) {

  const navigate = useNavigate()

  return (
    <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
          paddingTop: 60 / proporcional, paddingBottom: 60 / proporcional}}>
        <div className='' style={{width: '100%', height: 'auto'}}>
          <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
              <img src={cotizacion_cancelada} style={{width: 550 / proporcional, height: 550 / proporcional}}/>
          </div>
          <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
            <div style={{width: 'auto', height: 'auto'}}>
              <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 700, color: 'rgb(56, 77, 167)', marginBottom: 20 / proporcional,
                    textAlign: 'center'}}>
                USTED A CANCELADO <br/>LA COTIZACIÓN ENVIADA
              </p>
              <p style={{fontSize: 24 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 600, color: '#212121', marginBottom: 20 / proporcional,
                    textAlign: 'center'}}>
                ¡ESPEREMOS QUE VUELVA PRONTO!
              </p>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <button className='btn' style={{width: 250 / proporcional, height: 50 / proporcional, color: 'white', 
                        fontWeight: 600, background: 'rgb(56, 77, 167)'}} onClick={() => {navigate ('/'); window.scrollTo(0,0)}}>
                    FINALIZAR
                </button >
            </div>
            </div>
          </div>
        </div>
    </div>
  ) 

}
