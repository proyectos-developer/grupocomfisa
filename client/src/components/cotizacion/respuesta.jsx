import React from 'react'

import TituloPagina from './tituloprincipal.jsx'
import LitaRespuetaCotizacion from './respuestacotizacion.jsx'
import FooterPrincipal from '../footerprincipal.jsx'
import Footer from '../footer.jsx'

export default function RespuetaCotizacion({proporcional}) {
  return (
    <div style={{width: '100%'}}>
        <TituloPagina proporcional={proporcional}/>
        <LitaRespuetaCotizacion proporcional={proporcional}/>
        <div style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                     marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
        <FooterPrincipal proporcional={proporcional}/>
        <Footer proporcional={proporcional}/>
    </div>
  )
}
