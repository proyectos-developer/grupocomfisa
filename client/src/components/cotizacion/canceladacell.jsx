import React from 'react'

import TituloPrincipalCanceladaCell from './tituloprincipalcanceladacell.jsx'
import InformacionCanceladaCell from './informacioncanceladacell.jsx'
import FooterPrincipalCell from '../footerprincipalcell.jsx'
import FooterCell from '../footercell.jsx'
 
export default function RespuestaCotizacionCanceladaCell({proporcional}) {
  return (
    <div style={{width: '100%'}}>
        <TituloPrincipalCanceladaCell proporcional={proporcional}/>
        <InformacionCanceladaCell proporcional={proporcional}/>
        <div style={{width: '100%', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                     marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
        <FooterPrincipalCell proporcional={proporcional}/>
        <FooterCell proporcional={proporcional}/>
    </div>
  )
}