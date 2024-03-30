import React from 'react'

import fondo_cotizar from '../../assets/images/fondo_cotizar.png'
import { useNavigate } from 'react-router-dom'

export default function CotizarAquiTablet({proporcional}) {

    const navigate = useNavigate ()

  return (
    <div style={{background: '#ededed', height: 670 / proporcional, width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional,
                paddingTop: 140 / proporcional, marginBottom: 50 / proporcional}}>
        <div className='d-flex' style={{width: 871 / proporcional, height: 530 / proporcional}}>
            <div className='position-relative' style={{width: 435.5 / proporcional, height: 530 / proporcional}}>
                <div className='position-absolute' style={{top: '30%'}}>
                    <p style={{fontSize: 46 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#007BA7', fontWeight: 500, marginBottom: 13 / proporcional}}>
                        Cotiza con nosotros
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: '#222931', fontWeight: 400, marginBottom: 26 / proporcional}}>
                    ¿Podría proporcionarnos una cotización detallada que incluya cantidad, tiempos de entrega, cualquier especificación aplicable? Su pronta respuesta sería muy apreciada. Si necesita más información, no dude en contactarnos.
                    </p>
                    <button className='btn' style={{width: 170 / proporcional, height: 42 / proporcional, background: '#8B4513', color: 'white', 
                            fontSize: 16 / proporcional, fontWeight: 700}}
                            onClick={() => {navigate ('/tienda'); window.scrollTo(0, 0)}}>Cotiza aquí</button>
                </div> 
            </div>
            <div className='justify-content-center d-flex' style={{width: 435.5 / proporcional, height: 530 / proporcional}}>
                <img src={fondo_cotizar} style={{width: 412 / proporcional, height: 530 / proporcional}}/>
            </div>
        </div>
    </div>
  )
}