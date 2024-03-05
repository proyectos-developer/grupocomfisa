import React from 'react'

import TituloPaginaEnviadaCell from './tituloprincipalenviadacell.jsx'
import EnvioCorreoCotizacionCell from './enviocorreocotizacioncell.jsx'
import FooterPrincipalCell from '../footerprincipalcell.jsx'
import FooterCell from '../footercell.jsx'

export default function EnviadaCotizacionCell({proporcional}) {
  return (
    <div style={{width: '100%'}}>
        <TituloPaginaEnviadaCell proporcional={proporcional}/>
        <EnvioCorreoCotizacionCell proporcional={proporcional}/>
        <div style={{width: 459 / proporcional, marginLeft: 20 / proporcional, marginRight: 20 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                     marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
        <FooterPrincipalCell proporcional={proporcional}/>
        <FooterCell proporcional={proporcional}/>
    </div>
  )
}
