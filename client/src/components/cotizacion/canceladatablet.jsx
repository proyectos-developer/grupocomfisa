import React from 'react'

import TituloPrincipalCanceladaTablet from './tituloprincipalcanceladatablet.jsx'
import InformacionCanceladaTablet from './informacioncanceladatablet.jsx'
import FooterPrincipalTablet from '../footerprincipaltablet.jsx'
import FooterTablet from '../footertablet.jsx'
 
export default function RespuestaCotizacionCanceladaTablet({proporcional}) {
  return (
    <div style={{width: '100%'}}>
        <TituloPrincipalCanceladaTablet proporcional={proporcional}/>
        <InformacionCanceladaTablet proporcional={proporcional}/>
        <div style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                     marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
        <FooterPrincipalTablet proporcional={proporcional}/>
        <FooterTablet proporcional={proporcional}/>
    </div>
  )
}