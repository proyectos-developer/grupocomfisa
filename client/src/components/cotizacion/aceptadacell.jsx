import React from 'react'

import TituloPrincipalAceptadaCell from './tituloprincipalaceptadacell.jsx'
import InformacionAceptadaCell from './informacionaceptadacell.jsx'
import FooterPrincipalCell from '../footerprincipalcell.jsx'
import FooterCell from '../footercell.jsx'
 
export default function RespuestaCotizacionAceptadaCell({proporcional}) {
  return (
    <div style={{width: '100%'}}>
        <TituloPrincipalAceptadaCell proporcional={proporcional}/>
        <InformacionAceptadaCell proporcional={proporcional}/>
        <div style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                     marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
        <FooterPrincipalCell proporcional={proporcional}/>
        <FooterCell proporcional={proporcional}/>
    </div>
  )
}