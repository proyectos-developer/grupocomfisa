import React from 'react'

import TituloPaginatTablet from './tituloprincipaltablet.jsx'
import LitaRespuetaCotizacionTablet from './respuestacotizaciontablet.jsx'
import FooterPrincipaTabletl from '../footerprincipaltablet.jsx'
import FooterTablet from '../footertablet.jsx'

export default function RespuetaCotizacionTablet({proporcional}) {
  return (
    <div style={{width: '100%'}}>
        <TituloPaginatTablet proporcional={proporcional}/>
        <LitaRespuetaCotizacionTablet proporcional={proporcional}/>
        <div style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                     marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
        <FooterPrincipaTabletl proporcional={proporcional}/>
        <FooterTablet proporcional={proporcional}/>
    </div>
  )
}
