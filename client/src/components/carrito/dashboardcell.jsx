import React from 'react'

import TituloPaginaCell from './tituloprincipalcell.jsx'
import ListaCotizarCell from './listacotizarcell.jsx'
import FooterPrincipalCell from '../footerprincipalcell.jsx'
import FooterCell from '../footercell.jsx'

export default function CarritoCotizarCell({proporcional}) {
  return (
    <div style={{width: '100%'}}>
        <TituloPaginaCell proporcional={proporcional}/>
        <ListaCotizarCell proporcional={proporcional}/>
        <div style={{width: 459 / proporcional, marginLeft: 20 / proporcional, marginRight: 20 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                     marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
        <FooterPrincipalCell proporcional={proporcional}/>
        <FooterCell proporcional={proporcional}/>
    </div>
  )
}
