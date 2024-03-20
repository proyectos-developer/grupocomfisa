import React from 'react'

import TituloPrincipalAceptadaTablet from './tituloprincipalaceptadatablet.jsx'
import InformacionAceptadaTablet from './informacionaceptadatablet.jsx'
import FooterPrincipalTablet from '../footerprincipaltablet.jsx'
import FooterTablet from '../footertablet.jsx'
 
export default function RespuestaCotizacionAceptadaTablet({proporcional}) {
  return (
    <div style={{width: '100%'}}>
        <TituloPrincipalAceptadaTablet proporcional={proporcional}/>
        <InformacionAceptadaTablet proporcional={proporcional}/>
        <div style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                     marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
        <FooterPrincipalTablet proporcional={proporcional}/>
        <FooterTablet proporcional={proporcional}/>
    </div>
  )
}